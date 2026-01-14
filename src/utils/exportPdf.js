import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async (elementId, filename = 'document.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    alert('Preview element not found. Please refresh and try again.');
    return;
  }

  // Show loading overlay
  const overlay = document.createElement('div');
  overlay.id = 'pdf-export-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:99999;';
  overlay.innerHTML = `
    <div style="background:white;padding:32px 48px;border-radius:16px;text-align:center;">
      <div style="font-size:36px;margin-bottom:12px;">📄</div>
      <div style="font-size:18px;font-weight:700;color:#1f2937;margin-bottom:6px;">Generating PDF</div>
      <div style="font-size:13px;color:#6b7280;">Please wait...</div>
    </div>
  `;
  document.body.appendChild(overlay);

  try {
    await document.fonts.ready;

    // Create wrapper for capture
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: fixed;
      left: 0;
      top: 0;
      width: 794px;
      background: #ffffff;
      z-index: -9999;
      visibility: hidden;
    `;
    
    const clone = element.cloneNode(true);
    
    clone.style.cssText = `
      width: 794px;
      max-width: 794px;
      min-height: auto;
      background: #ffffff;
      margin: 0;
      padding: 0;
      transform: none;
      box-sizing: border-box;
    `;
    
    // Clean up clone styles
    const allElements = clone.querySelectorAll('*');
    allElements.forEach(el => {
      el.style.animation = 'none';
      el.style.transition = 'none';
      el.style.transform = 'none';
    });
    
    // Hide SVG icons
    clone.querySelectorAll('svg').forEach(svg => svg.style.display = 'none');
    
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);
    wrapper.style.visibility = 'visible';
    
    await new Promise(r => setTimeout(r, 300));

    const contentHeight = wrapper.scrollHeight;
    
    const canvas = await html2canvas(wrapper, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: 794,
      height: contentHeight,
      windowWidth: 794,
      windowHeight: contentHeight,
    });

    document.body.removeChild(wrapper);

    if (!canvas || canvas.width === 0 || canvas.height === 0) {
      throw new Error('Canvas capture failed');
    }

    // A4 dimensions
    const a4Width = 210;
    const a4Height = 297;
    
    // Calculate scale ratio
    const imgWidth = a4Width;
    const ratio = canvas.width / imgWidth;
    const pageHeight = a4Height * ratio; // Page height in canvas pixels
    
    // Create PDF
    const pdf = new jsPDF('portrait', 'mm', 'a4');
    
    let y = 0;
    let pageNum = 0;
    
    while (y < canvas.height) {
      if (pageNum > 0) {
        pdf.addPage();
      }
      
      // Calculate slice height (don't exceed remaining content)
      const sliceHeight = Math.min(pageHeight, canvas.height - y);
      
      // Create canvas for this page
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = canvas.width;
      pageCanvas.height = sliceHeight;
      
      const ctx = pageCanvas.getContext('2d');
      
      // Fill with white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
      
      // Copy the slice from main canvas
      ctx.drawImage(
        canvas,
        0, y,                    // Source position
        canvas.width, sliceHeight,  // Source dimensions
        0, 0,                    // Destination position
        canvas.width, sliceHeight   // Destination dimensions
      );
      
      // Convert to image and add to PDF
      const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.92);
      const imgHeight = sliceHeight / ratio;
      
      pdf.addImage(pageImgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      
      y += pageHeight;
      pageNum++;
    }

    pdf.save(filename);
    document.body.removeChild(overlay);

    // Success toast
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;top:20px;right:20px;background:linear-gradient(135deg,#10b981,#059669);color:white;padding:14px 24px;border-radius:10px;z-index:99999;font-weight:600;font-size:14px;box-shadow:0 4px 20px rgba(0,0,0,0.2);';
    toast.innerHTML = '✓ PDF Downloaded!';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);

  } catch (error) {
    console.error('PDF Error:', error);
    document.body.removeChild(overlay);
    
    const wrapper = document.querySelector('[style*="z-index: -9999"]');
    if (wrapper) wrapper.remove();
    
    alert('PDF export failed. Try using Ctrl+P (Print to PDF) as an alternative.');
  }
};

export const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
};
