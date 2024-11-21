# Fresh-Air Computer Vision Project

## Project Overview
This project aims to develop a web application that assists healthcare professionals by analyzing chest X-ray images to detect signs of pneumonia and other lung conditions. Using a convolutional neural network (CNN), the model will analyze X-rays and provide insights, helping reduce diagnostic time and improving patient care. The dataset for this project is sourced from [Kaggle's chest X-ray pneumonia dataset](https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia).

## Motivation
My interest in bioinformatics was furthered through the NYU AI School, where I learned about various machine learning applications, including medical image analysis. This project not only serves as a stepping stone towards a potential career in bioinformatics but also contributes to a growing need for AI tools in healthcare.

## Problem Statement
Medical professionals often face heavy workloads analyzing X-ray images, which can lead to delays in diagnosis and treatment. This project seeks to build a tool that streamlines lung X-ray analysis, providing quick preliminary feedback on possible anomalies and helping healthcare providers make faster, more informed decisions.

## Minimum Viable Product (MVP)
- **Frontend**: Interactive user interface with Streamlit
- **Backend**: FastAPI for handling server-side logic
- **ML Model**: CNN built with TensorFlow or PyTorch for image analysis
- **Hosting**: AWS, Google Cloud, Vercel, or Hugging Face for model deployment
- **Database**: MongoDB for user data and analysis history

## Tech Stack
- **Frameworks**: Next.JS, FastAPI (Backend)
- **Machine Learning**: TensorFlow or PyTorch
- **Cloud Services**: Vercel Deployment
- **Database**: MongoDB

## Progress and Next Steps
- [x] Identify dataset (Kaggle chest X-ray pneumonia dataset)
- [ ] Develop CNN model for X-ray analysis
- [ ] Build frontend with Streamlit for image upload and display results
- [ ] Integrate backend with FastAPI and MongoDB for data management
- [ ] Deploy model and host web app

## Conclusion
This project bridges machine learning and healthcare, showcasing the potential of AI to assist in medical diagnostics. By automating lung X-ray analysis, the application could help alleviate workload pressures on healthcare professionals and support faster patient care.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

