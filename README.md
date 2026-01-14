# 🎨 Multi-Color Gradient Portfolio & Resume Builder

A fully functional, frontend-only React.js application that allows users to create, customize, preview, and export a personal portfolio website and professional resume from a single dashboard interface.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.5-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-ff0055)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎯 Core Functionality
- **Professional Landing Page** - Beautiful first impression with clear CTAs
- **Dual Builder Modes** - Separate Resume and Portfolio builders
- **Real-time Live Preview** - See changes instantly as you type
- **ATS-Friendly Resumes** - Optimized for Applicant Tracking Systems
- **Multi-Color Gradient Themes** - 4 beautiful preset gradients + custom colors
- **Advanced Theme Customization** - Fonts, colors, card styles, dark mode
- **PDF Export** - Export both portfolio and resume as high-quality PDFs
- **LocalStorage Persistence** - Auto-save with debouncing
- **Fully Responsive** - Works on desktop, tablet, and mobile

### 📝 Content Sections
- **Personal Information** - Name, title, contact, photo, summary
- **Auto-Generated Summaries** - AI-powered professional summaries for different roles
- **Education** - Multiple entries with institution, degree, years
- **Experience** - Work history with responsibilities
- **Skills** - Dual format: Visual progress bars (portfolio) or categorized bullets (resume)
- **Projects** - Showcase with images, tech stack, and links
- **Reference Upload** - Upload sample resume format as visual reference

### 🎨 Theme Options
- **Gradient Presets**: Blue→Purple, Pink→Orange, Teal→Green, Indigo→Cyan
- **Font Families**: Inter, Roboto, Arial (ATS-safe), Poppins, Montserrat
- **Font Sizes**: Small, Medium, Large (resume-specific)
- **Card Styles**: Flat or Glassmorphism
- **Dark Mode**: Full dark theme support
- **Custom Colors**: Primary and secondary color pickers
- **Section Visibility**: Toggle which sections appear

### 🎯 ATS-Friendly Features
- **Single-column layout** for better parsing
- **Standard section headings** recognized by ATS
- **Clean ATS-safe fonts** (Inter, Roboto, Arial)
- **Categorized skills** with bullet points
- **No decorative elements** in resume view
- **Proper formatting and spacing**
- **Text-based content** (no text in images)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── forms/              # Form components
│   │   ├── PersonalInfoForm.jsx
│   │   ├── SummaryGenerator.jsx    # NEW: Auto-generate summaries
│   │   ├── EducationForm.jsx
│   │   ├── ExperienceForm.jsx
│   │   ├── SkillsForm.jsx          # ENHANCED: Dual format support
│   │   ├── ProjectsForm.jsx
│   │   ├── ReferenceUpload.jsx     # NEW: Upload reference resume
│   │   └── ThemeCustomizer.jsx     # ENHANCED: More options
│   ├── preview/            # Preview components
│   │   ├── PortfolioPreview.jsx
│   │   └── ResumePreview.jsx       # ENHANCED: ATS-friendly
│   ├── layout/             # Layout components
│   │   ├── Sidebar.jsx             # ENHANCED: New menu items
│   │   └── PreviewPanel.jsx
│   └── common/             # Reusable components
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Input.jsx
│       └── Textarea.jsx
├── pages/
│   ├── LandingPage.jsx     # NEW: Professional landing page
│   └── Dashboard.jsx       # ENHANCED: Better scrolling
├── context/
│   └── AppContext.jsx      # ENHANCED: New state slices
├── hooks/
│   └── useLocalStorage.js
├── styles/
│   └── themes.js
├── utils/
│   └── exportPdf.js
├── data/
│   └── defaultData.js      # ENHANCED: Summary templates
├── App.jsx                 # ENHANCED: React Router
├── main.jsx
└── index.css
```

## 🎯 Usage Guide

### 1. Choose Your Path
- Visit the landing page
- Click "Build Your Resume" for ATS-optimized job applications
- Click "Build Your Portfolio" for visual showcase websites

### 2. Enter Your Information
- Navigate through the sidebar menu
- Fill in your personal details, education, experience, skills, and projects
- Use "Auto Summary" to generate professional summaries
- Upload a reference resume format for visual guidance (optional)

### 3. Customize Skills
- **For Resumes**: Use categorized skills (Technical, Tools, Soft Skills)
- **For Portfolios**: Use visual progress bars with proficiency levels
- Switch between formats using the tabs

### 4. Customize Theme
- Click "Theme" in the sidebar
- Choose a gradient preset or create custom colors
- Select ATS-safe fonts for resumes
- Adjust font size and section spacing
- Toggle section visibility
- Switch between light and dark mode

### 5. Preview Your Work
- Click "Portfolio" to see your portfolio website
- Click "Resume" to see your ATS-friendly resume
- Changes reflect instantly in the preview
- Preview panel is sticky on desktop for easy reference

### 6. Export as PDF
- Click "Export as PDF" button in the preview panel
- Choose between portfolio or resume export
- PDF maintains all styling and formatting
- Resume exports are optimized for A4 printing

### 7. Data Management
- All data auto-saves to localStorage
- Use "Reset All Data" to start fresh
- Use "Back to Home" to return to landing page
- Data persists across browser sessions

## 🛠️ Tech Stack

### Core
- **React 18.2** - UI library with functional components
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

### State Management
- **React Context API** - Global state management
- **useReducer** - Complex state logic

### Animations
- **Framer Motion** - Smooth animations and transitions

### PDF Export
- **html2canvas** - HTML to canvas conversion
- **jsPDF** - PDF generation

### Icons
- **Lucide React** - Beautiful icon library

## 🎨 Customization

### Adding New Gradient Presets
Edit `src/data/defaultData.js`:

```javascript
export const gradientPresets = {
  'your-gradient': {
    name: 'Your Name',
    from: '#hexcolor1',
    to: '#hexcolor2',
    css: 'from-color1 to-color2',
  },
};
```

### Adding New Font Families
1. Add font to `index.html` (Google Fonts)
2. Update `tailwind.config.js` fontFamily
3. Add to `src/data/defaultData.js` fontFamilies array

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Data Privacy

- **100% Client-Side** - No backend, no servers
- **LocalStorage Only** - Data never leaves your browser
- **No Authentication** - No user accounts or tracking
- **Privacy First** - Your data stays on your device

## 🚀 Deployment

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
# Or connect your GitHub repo to Netlify for auto-deployment
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎯 Key Features Explained

### Real-Time Preview
All form inputs are controlled components that update global state via Context API. The preview components subscribe to state changes and re-render instantly.

### LocalStorage Persistence
Uses debounced auto-save (500ms delay) to prevent excessive writes. Data is automatically loaded on app mount.

### PDF Export
Converts preview DOM elements to canvas using html2canvas, then generates PDF with jsPDF. Maintains A4 sizing for resume exports.

### Theme System
Dynamic theme application using Tailwind classes and inline styles. Supports gradient backgrounds, custom colors, and dark mode.

## 🐛 Troubleshooting

### PDF Export Issues
- Ensure preview is fully loaded before exporting
- Check browser console for errors
- Try disabling browser extensions

### LocalStorage Not Working
- Check browser privacy settings
- Ensure localStorage is enabled
- Clear browser cache if needed

### Styling Issues
- Run `npm install` to ensure all dependencies are installed
- Check that Tailwind CSS is properly configured
- Verify PostCSS is processing styles

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 🌟 Acknowledgments

- Built with React and Tailwind CSS
- Icons by Lucide
- Fonts by Google Fonts
- Animations by Framer Motion

---

**Made with ❤️ for developers and job seekers**