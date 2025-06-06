# 🚀 My Portfolio Website — Built with React + Vite

Welcome to my interactive portfolio website! This project is designed to showcase my skills, projects, and experience as a developer. Built with the modern React + Vite stack, it features blazing-fast development, hot module replacement, and a beautiful, responsive UI powered by Tailwind CSS and smooth animations using Framer Motion.

---

## ✨ Features

- **Modern Stack:** Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/) for fast, efficient development and lightning-fast builds.
- **Responsive Design:** Styled with [Tailwind CSS](https://tailwindcss.com/) for a seamless experience on any device.
- **Smooth Animations:** Enhanced with [Framer Motion](https://www.framer.com/motion/) for interactive and engaging transitions.
- **Project Showcase:** Browse my featured projects with live demos and source code links.
- **Skills & Experience:** Explore my technical skills, work history, and education.
- **Contact:** Easy ways to connect with me via email or social media.

---

## 🛠️ Getting Started

Follow these steps to run the project locally and start exploring or customizing your own portfolio!

### 1. Clone the Repository

git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio

### 2. Install Dependencies

Install the required libraries for React, Vite, Tailwind CSS, and Framer Motion:

npm install

### 3. Set Up Tailwind CSS

Install Tailwind CSS and its dependencies:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Update your `tailwind.config.js` content property:

content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
]

Import Tailwind in your `src/index.css` (or `App.css`):

@tailwind base;
@tailwind components;
@tailwind utilities;

### 4. Add Framer Motion

Install Framer Motion for animations:

npm install framer-motion

You can now use Framer Motion components in your React files:

import { motion } from "framer-motion";

function Example() {
return <motion.div animate={{ opacity: 1 }}>Hello Motion!</motion.div>;
}

### 5. Start the Development Server

npm run dev

Open your browser and visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to see your portfolio in action!

---

## 🧑‍💻 Customization

- **Edit Content:** Update components to reflect your own projects, skills, and contact info.
- **Styling:** Modify Tailwind classes or add custom CSS for a unique look.
- **Add Sections:** Want a blog or testimonials? Add new sections easily!

---

# Contact Form Email Integration Guide

This guide will help you set up email functionality for the contact form using EmailJS.

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up
2. Verify your email address

## 2. Set Up Email Service
1. In EmailJS Dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select your email provider (Gmail recommended)
4. Follow the connection steps
5. Note the generated **Service ID**

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up template with these variables:

<html> <body> <p>Name: {{name}}</p> <p>Email: {{email}}</p> <p>Subject: {{subject}}</p> <p>Message: {{message}}</p> </body> </html>

4. Set "To Email" to your personal email 5. Set "From Name" to `{{name}}` 6. Set "Reply To" to `{{email}}` 
7. Save and note the **Template ID**



## Key Changes Made:
1. Replaced mock submission with EmailJS integration
2. Added environment variables for security
3. Implemented proper error handling
4. Maintained existing UI/UX while adding email functionality
5. Added email template structure for proper data formatting

This setup will now send form submissions directly to your email while keeping your credentials secure through environment variables.

4. Get API Keys
Go to "Account" > "API Keys"

Copy the Public Key

5. Configure Environment Variables
Create .env file in project root


## **Add these variables with your actual values:**

**.env - file:**

**REACT_APP_EMAILJS_SERVICE_ID=your_service_id**
**REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id**
**REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key**

6. Install Dependencies

npm install @emailjs/browser

7. Test the Form
Fill out the contact form in your React app

Submit the form

Check your email inbox (and spam folder)

Troubleshooting
Emails not arriving?

Verify EmailJS service connection

Check template fields match form names

Ensure environment variables are correctly set

Whitelist EmailJS in your email provider

CORS Errors?

Ensure you're using latest @emailjs/browser version

Verify public key initialization

---
## 🚀 Deployment

You can deploy your portfolio to any static hosting platform, such as:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

Follow the deployment instructions for your chosen platform to go live!

---

## 🤝 Contributing

Have suggestions or want to improve this project? Feel free to open an issue or submit a pull request.

---

## 📚 Continued Learning

- Explore more about [React + Vite](https://vitejs.dev/guide/)
- Deep dive into [Tailwind CSS](https://tailwindcss.com/docs/installation)
- Animate with [Framer Motion](https://www.framer.com/motion/)

---

> _Ready to build your own stunning portfolio? Fork this repo, make it yours, and showcase your journey!_

---

**Happy coding!** 🎉

---

<sup>Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion</sup>

---

<!--
References:
- [How to set up Tailwind CSS in Vite](https://riike.hashnode.dev/easy-tutorial-setting-up-reactjs-with-vite-typescript-and-tailwind-css)
- [Install and use Framer Motion in React + Vite](https://www.motioncookbook.com/posts/install-framer-motion)
- [Portfolio project inspiration](https://github.com/IbrahimHiarea/portfolio)
-->
