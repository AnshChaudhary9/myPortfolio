# Ansh Gandharve | Personal Portfolio

A modern, responsive and interactive personal portfolio built with **React.js and Tailwind CSS**. This website showcases my technical skills, projects, education, and development journey through a clean interface with multiple customizable themes.

🌐 **Live Website:** https://anshchaudhary9.github.io/myPortfolio/

💻 **GitHub Repository:** https://github.com/AnshChaudhary9/myPortfolio

---

## ✨ Features

- **Responsive Design** – Works across desktop, tablet, and mobile devices.
- **Multiple Themes** – Switch between different visual themes inspired by popular brands.
- **Interactive UI** – Smooth transitions, hover effects, and animations.
- **Animated Introduction** – Dynamic text animation in the hero section.
- **About Me** – Introduction and professional background.
- **Skills Section** – Displays technical skills and technologies.
- **Projects Showcase** – Highlights development projects and their technologies.
- **Education Section** – Displays academic background.
- **Testimonials** – Dedicated section for feedback and recommendations.
- **Resume Download** – Allows visitors to download my resume.
- **Contact Form** – Lets visitors send messages through Getform.
- **Social Media Links** – Direct links to GitHub, LinkedIn, and email.
- **Back to Top** – Quickly navigate to the top of the website.
- **SEO Support** – Includes metadata configuration for better search visibility.

## 🎨 Available Themes

The portfolio includes multiple theme styles:

| Theme | Inspiration |
|---|---|
| Default | Cyan Blue |
| Netflix | Netflix |
| Facebook | Facebook |
| Amazon | Amazon |
| Spotify | Spotify |

Each theme provides a different visual experience with customized colors and section styling.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS

### Libraries and Tools
- React Icons
- React Scroll
- React Type Animation
- AOS (Animate On Scroll)
- React Helmet Async
- Getform (Contact Form)
- GitHub Pages
- gh-pages

## 📂 Project Structure

```text
myPortfolio/
│
├── public/
│   ├── index.html
│   ├── resume.pdf
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── BrandLogo.jsx
│   │   ├── BrandSelector.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── NavBar.jsx
│   │   ├── Portfolio.jsx
│   │   ├── SEO.jsx
│   │   ├── Skill.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── Testimonials.jsx
│   │   └── ThemeSwitcher.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.js
│   │
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/AnshChaudhary9/myPortfolio.git
```

### 2. Navigate to the project directory

```bash
cd myPortfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## 📦 Production Build

To create an optimized production build, run:

```bash
npm run build
```

The generated production files will be available inside the `build` directory.

## 🚀 Deployment

This portfolio is deployed using **GitHub Pages** and the `gh-pages` package.

The following configuration is used in `package.json`:

```json
{
  "homepage": "https://anshchaudhary9.github.io/myPortfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

To deploy the latest changes, run:

```bash
npm run deploy
```

This command automatically builds the React application and publishes the contents of the build folder to the `gh-pages` branch.

## 📄 Resume

The resume PDF is stored inside the `public` directory.

```text
public/resume.pdf
```

It can be accessed using the following path:

```jsx
<a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
  Download Resume
</a>
```

## 📬 Contact

**Ansh Gandharve**

- GitHub: https://github.com/AnshChaudhary9
- LinkedIn: https://www.linkedin.com/in/ansh-gandharve-700048303
- Email: anshgandharve@gmail.com

---

⭐ If you like this project, feel free to explore the repository and connect with me.

**Built with React.js, creativity, and a passion for development.**
