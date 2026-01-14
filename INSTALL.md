# 🚀 Installation & Running Instructions

## Problem: Blank Page / Routing Not Working

If you see a blank page, follow these steps:

### Step 1: Install Dependencies
```bash
npm install
```

This will install:
- react-router-dom (for routing)
- framer-motion (for animations)
- All other required packages

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
The terminal will show:
```
  VITE v5.0.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
```

Click the link or open `http://localhost:5173/` in your browser.

---

## Expected Behavior

### Landing Page (/)
- Beautiful hero section
- "Build Your Resume" button → Goes to `/builder/resume`
- "Build Your Portfolio" button → Goes to `/builder/portfolio`
- Features, templates, how it works sections
- Footer

### Resume Builder (/builder/resume)
- Sidebar with menu items
- Form panel (scrollable)
- Preview panel (scrollable)
- All forms work
- Live preview updates

### Portfolio Builder (/builder/portfolio)
- Same as resume builder
- Different preview style
- Visual skills instead of categorized

---

## Troubleshooting

### Issue: "Cannot find module 'react-router-dom'"
**Solution**: Run `npm install`

### Issue: Blank page after npm install
**Solution**: 
1. Stop the server (Ctrl+C)
2. Run `npm run dev` again
3. Hard refresh browser (Ctrl+Shift+R)

### Issue: Buttons don't navigate
**Solution**: Check browser console (F12) for errors

### Issue: Port 5173 already in use
**Solution**: 
- Kill the process using port 5173
- Or Vite will suggest another port

---

## Quick Test

After running `npm run dev`:

1. ✅ Landing page loads
2. ✅ Click "Build Your Resume" → Goes to resume builder
3. ✅ Fill in personal info → Preview updates
4. ✅ Click "Back to Home" → Returns to landing page
5. ✅ Click "Build Your Portfolio" → Goes to portfolio builder

---

## File Structure Check

Make sure these files exist:
```
src/
├── App.jsx (has Router setup)
├── main.jsx (renders App)
├── pages/
│   ├── LandingPage.jsx
│   └── Dashboard.jsx
└── components/ (all components)
```

---

## Common Errors & Fixes

### Error: "useNavigate() may be used only in the context of a <Router> component"
**Fix**: Already fixed - Router wraps everything in App.jsx

### Error: "Cannot read property 'mode' of undefined"
**Fix**: Already fixed - Dashboard handles undefined mode

### Error: Module not found
**Fix**: Run `npm install` and restart dev server

---

## Success Indicators

✅ Terminal shows "ready in XXX ms"
✅ Browser shows landing page
✅ No errors in browser console (F12)
✅ Buttons navigate correctly
✅ Forms are editable
✅ Preview updates in real-time

---

## Need Help?

1. Check browser console (F12) for errors
2. Check terminal for build errors
3. Try `npm install` again
4. Try deleting `node_modules` and `package-lock.json`, then `npm install`
5. Make sure you're using Node.js 16+

---

**Ready to build!** 🎉
