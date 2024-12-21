import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten, Dropout
from tensorflow.keras.callbacks import ModelCheckpoint
from tensorflow.keras.preprocessing.image import load_img, img_to_array


data_dir = "/data/pnuemonia.csv"  
train_dir = os.path.join(data_dir, "train")
val_dir = os.path.join(data_dir, "val")
test_dir = os.path.join(data_dir, "test")

# Image and batch size 
image_size = (224, 224)
batch_size = 32

# Data augmentation
def create_data_generators():
    train_datagen = ImageDataGenerator(
        rescale=1.0 / 255,
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.2,
        horizontal_flip=True,
    )
    val_test_datagen = ImageDataGenerator(rescale=1.0 / 255)

    train_generator = train_datagen.flow_from_directory(
        train_dir, target_size=image_size, batch_size=batch_size, class_mode="binary"
    )
    val_generator = val_test_datagen.flow_from_directory(
        val_dir, target_size=image_size, batch_size=batch_size, class_mode="binary"
    )

    return train_generator, val_generator

# Dmodel definition
def create_model():
    base_model = ResNet50(weights="imagenet", include_top=False, input_shape=(224, 224, 3))
    base_model.trainable = False  # Freeze the base model

    model = Sequential([
        base_model,
        Flatten(),
        Dense(128, activation="relu"),
        Dropout(0.5),
        Dense(1, activation="sigmoid"),
    ])

    model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
    return model

# Train 
def train_model(model, train_generator, val_generator):
    checkpoint = ModelCheckpoint(
        "pneumonia_detector.h5", save_best_only=True, monitor="val_accuracy", mode="max"
    )

    epochs = 10
    model.fit(
        train_generator,
        validation_data=val_generator,
        epochs=epochs,
        steps_per_epoch=train_generator.samples // batch_size,
        validation_steps=val_generator.samples // batch_size,
        callbacks=[checkpoint],
    )

# Predictor
def predict_pneumonia(model, image_path):
    image = load_img(image_path, target_size=image_size)
    image_array = img_to_array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension

    prediction = model.predict(image_array)
    if prediction[0] > 0.5:
        print("Prediction: Pneumonia")
    else:
        print("Prediction: No Pneumonia")

if __name__ == "__main__":
    # Prepare data generators
    train_generator, val_generator = create_data_generators()

    
    model = create_model()
    train_model(model, train_generator, val_generator)

    print("Model training complete. Saved as 'pneumonia_detector.h5'.")

    trained_model = tf.keras.models.load_model("pneumonia_detector.h5")
#example
    test_image_path = "path_to_test_image.jpg"  # Replace with the path to  X-ray image
    predict_pneumonia(trained_model, test_image_path)

