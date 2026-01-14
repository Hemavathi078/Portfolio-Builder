# PortfolioPress

A React app that helps you create professional resumes and portfolios. No backend, no signup - just open it and start building.

## What It Does

This tool lets you build two things:
- **ATS-friendly resumes** for job applications (the kind that actually get past automated screening)
- **Visual portfolios** to showcase your work

Everything saves automatically in your browser, and you can export to PDF when you're done.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` and you're good to go.

## Main Features

**Resume Builder**
- Clean, single-column layout that ATS systems can actually read
- Standard section headings (Professional Summary, Experience, Skills, etc.)
- Categorized skills format (Technical, Tools, Soft Skills)
- Auto-generate professional summaries based on your role
- Export to PDF ready for job applications

**Portfolio Builder**
- Visual skills with progress bars
- Project showcase with images and links
- Colorful gradient themes
- Glassmorphism effects
- Perfect for showing off your work

**Both Modes**
- Real-time preview as you type
- Multiple theme options (4 gradient presets + custom colors)
- Font customization (including ATS-safe options)
- Dark mode support
- Upload a reference resume for guidance
- Everything auto-saves to your browser

## How to Use It

1. **Pick Your Path**: Start from the landing page and choose Resume or Portfolio
2. **Fill In Your Info**: Use the sidebar to navigate through sections
3. **Customize**: Pick colors, fonts, and toggle sections on/off
4. **Export**: Download as PDF when you're ready

### Tips for Resumes

- Use ATS-safe fonts (Inter, Roboto, or Arial)
- Fill out the categorized skills section
- Use the auto-summary generator for a professional tone
- Keep it simple - the ATS template is designed to be parsed correctly

### Tips for Portfolios

- Add project images for visual appeal
- Use the visual skills section with progress bars
- Pick a colorful gradient theme
- Enable glassmorphism for a modern look

## Tech Stack

- React 18 with hooks and Context API
- Vite for fast development
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- html2canvas + jsPDF for PDF export
- Lucide React for icons

## Project Structure

```
src/
├── components/
│   ├── forms/          # All the input forms
│   ├── preview/        # Resume and portfolio previews
│   ├── layout/         # Sidebar and preview panel
│   └── common/         # Reusable UI components
├── pages/
│   ├── LandingPage.jsx
│   └── Dashboard.jsx
├── context/
│   └── AppContext.jsx  # Global state management
├── utils/
│   └── exportPdf.js    # PDF export logic
└── data/
    └── defaultData.js  # Default values and templates
```

## Customization

Want to add your own gradient theme? Edit `src/data/defaultData.js`:

```javascript
export const gradientPresets = {
  'your-theme': {
    name: 'Your Theme Name',
    from: '#hexcolor1',
    to: '#hexcolor2',
    css: 'from-color1 to-color2',
  },
};
```

## PDF Export

The export uses html2canvas to capture the preview and jsPDF to create the PDF. If you run into issues with content getting cut off at page breaks, try using your browser's print function (Ctrl+P → Save as PDF) instead - it handles page breaks better.

## Privacy

Everything runs in your browser. No data gets sent anywhere. Your info is stored in localStorage and never leaves your device.

## Deployment

Works with any static hosting:

**Netlify**: Connect your repo and it'll auto-deploy

**Vercel**: 
```bash
npm i -g vercel
vercel
```

**GitHub Pages**: Build and push the `dist` folder

## Known Issues

- PDF export can sometimes crop content at page breaks (html2canvas limitation)
- Large images might slow down the preview
- Browser print (Ctrl+P) often gives better results than direct PDF export

## Contributing

Found a bug? Have an idea? Feel free to open an issue or submit a PR.

## License

MIT - use it however you want.

---

Built for developers and job seekers who need a quick, professional resume or portfolio without the hassle.
