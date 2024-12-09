import os
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten, Dropout
from tensorflow.keras.callbacks import ModelCheckpoint


data_dir = "path_to_dataset_directory"  
train_dir = os.path.join(data_dir, "train")
val_dir = os.path.join(data_dir, "val")
test_dir = os.path.join(data_dir, "test")


image_size = (224, 224)
batch_size = 32


train_datagen = ImageDataGenerator(rescale=1.0 / 255, rotation_range=15, width_shift_range=0.1,
                                   height_shift_range=0.1, zoom_range=0.2, horizontal_flip=True)
val_test_datagen = ImageDataGenerator(rescale=1.0 / 255)

train_generator = train_datagen.flow_from_directory(train_dir, target_size=image_size, batch_size=batch_size,
                                                    class_mode="binary")
val_generator = val_test_datagen.flow_from_directory(val_dir, target_size=image_size, batch_size=batch_size,
                                                     class_mode="binary")

# model
base_model = ResNet50(weights="imagenet", include_top=False, input_shape=(224, 224, 3))
base_model.trainable = False  

model = Sequential([
    base_model,
    Flatten(),
    Dense(128, activation="relu"),
    Dropout(0.5),
    Dense(1, activation="sigmoid")
])

model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])


checkpoint = ModelCheckpoint("pneumonia_detector.h5", save_best_only=True, monitor="val_accuracy", mode="max")


epochs = 10
model.fit(
    train_generator,
    validation_data=val_generator,
    epochs=epochs,
    steps_per_epoch=train_generator.samples // batch_size,
    validation_steps=val_generator.samples // batch_size,
    callbacks=[checkpoint]
)

print("Model training complete. Saved as 'pneumonia_detector.h5'.")
