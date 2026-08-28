# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and hover effects
- **Modern UI**: Clean, professional design with gradient accents
- **Contact Form**: Functional contact form with validation
- **Social Links**: Integrated social media profiles
- **Skill Showcase**: Visual representation of technical skills
- **Project Gallery**: Grid layout for featured projects

## Technologies Used

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Create React App
- **Icons**: Inline SVG icons
- **Fonts**: Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be in the `build` directory.

## Customization

### Personal Information

Update the following files with your personal information:

- **Hero Section**: `src/components/Hero.js` - Update name, title, and description
- **About Section**: `src/components/About.js` - Update personal story and experience
- **Contact Section**: `src/components/Contact.js` - Update contact information
- **Footer**: `src/components/Footer.js` - Update name and social links

### Projects

Edit `src/components/Projects.js` to showcase your own projects:

```javascript
{
  title: "Your Project Name",
  description: "Brief description of your project",
  technologies: ["Tech1", "Tech2", "Tech3"],
  image: "path/to/your/image",
  liveUrl: "https://your-project-url.com",
  githubUrl: "https://github.com/your-username/your-repo"
}
```

### Skills

Update `src/components/Skills.js` to reflect your actual skill levels and categories.

### Styling

The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. You can:

- Modify colors in the theme extension
- Add custom utilities
- Adjust breakpoints
- Add custom fonts

## Deployment

### Netlify

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically detect the Create React App setup

### Other Platforms

The build output in the `build` directory can be deployed to any static hosting service.

## Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using React and Tailwind CSS
