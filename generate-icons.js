const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a simple icon design
function createIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#111827';
  ctx.fillRect(0, 0, size, size);
  
  // Letter "M" for Manas
  ctx.fillStyle = '#3B82F6';
  ctx.font = `bold ${size * 0.6}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('M', size / 2, size / 2);
  
  // Add a subtle gradient border
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#3B82F6');
  gradient.addColorStop(1, '#06B6D4');
  
  ctx.strokeStyle = gradient;
  ctx.lineWidth = size * 0.05;
  ctx.strokeRect(size * 0.05, size * 0.05, size * 0.9, size * 0.9);
  
  return canvas.toBuffer('image/png');
}

// Generate icons
try {
  const icon192 = createIcon(192);
  const icon512 = createIcon(512);
  
  fs.writeFileSync('./public/icon-192.png', icon192);
  fs.writeFileSync('./public/icon-512.png', icon512);
  
  console.log('Icons generated successfully!');
} catch (error) {
  console.error('Error generating icons:', error);
}
