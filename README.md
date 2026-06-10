# Lahiru Thilakawardhana - Personal Portfolio & Aevon Digital Solutions

A modern, premium, professional portfolio website designed for an Information Technology Undergraduate and Digital Solutions Entrepreneur.

## Features & Tech Stack
- **Framework**: React.js (v18) + Vite (fast build system)
- **Styling**: Tailwind CSS (v3) + Vanilla CSS (for custom glassmorphism and animations)
- **Icons**: Lucide React (premium vector graphics)
- **Theme**: Dark theme only with Electric Blue (`#00BFFF`) accent colors
- **Effects**: Custom smooth-following mouse cursor, scroll-reveal fade-ins, floating ambient grids, and full mobile-first responsive layout

---

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Installation
First, open your terminal (e.g., PowerShell, Git Bash, or Command Prompt) and navigate to the project directory:

```bash
cd C:\Users\WiFiZone\.gemini\antigravity\scratch\hasitha-portfolio
```

Then, install the required packages:
```bash
npm install
```

### 2. Run Locally (Development Server)
Launch the development server to preview the site in your browser:
```bash
npm run dev
```
By default, the server will open the application at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Build for Production
To bundle and optimize the project for hosting:
```bash
npm run build
```
This generates a production-ready bundle inside the `dist/` directory.

---

## Deployment to GitHub Pages

This project is configured to be easily deployed to GitHub Pages. Follow these steps:

### 1. Initialize Git Repository
In your project directory, initialize a Git repository and commit your files:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

### 2. Create a GitHub Repository
1. Go to your [GitHub account](https://github.com/) and create a new repository (e.g., named `lahiru-portfolio`).
2. Link your local repository to GitHub (replace `YOUR_USERNAME` with your actual GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/lahiru-portfolio.git
git branch -M main
git push -u origin main
```

### 3. Configure package.json
Open your `package.json` file and add a `"homepage"` field at the root level (replace `YOUR_USERNAME` and `REPO_NAME`):

```json
"homepage": "https://YOUR_USERNAME.github.io/lahiru-portfolio",
```

Also, add the following deploy scripts inside the `"scripts"` block:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

*(Note: We already installed `gh-pages` as a development dependency inside your `package.json` for you!)*

### 4. Deploy!
Run the deployment command:

```bash
npm run deploy
```

This will automatically trigger `npm run build`, create a branch called `gh-pages` on GitHub, push the `dist/` bundle assets to it, and configure GitHub Pages to serve your site. Within a few minutes, your site will be live at `https://YOUR_USERNAME.github.io/lahiru-portfolio`.

---

## Customizing Assets
- **Favicon**: The logo is embedded as a inline SVG favicon in `index.html`. You can replace the `<link rel="icon" ...>` inside `index.html` if you want to use a custom `.png` or `.ico` file.
