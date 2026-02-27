/**
 * Cross-platform script to copy static files for standalone build
 * Works on Windows, macOS, and Linux
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the project root directory (ESM compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = __dirname;

// Source and destination paths
const staticSrc = path.join(projectRoot, '.next', 'static');
const staticDest = path.join(projectRoot, '.next', 'standalone', '.next', 'static');
const publicSrc = path.join(projectRoot, 'public');
const publicDest = path.join(projectRoot, '.next', 'standalone', 'public');

/**
 * Copy a directory recursively
 * @param {string} src - Source directory
 * @param {string} dest - Destination directory
 */
function copyDirectory(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
    console.log(`Created directory: ${dest}`);
  }

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
}

/**
 * Main function
 */
function main() {
  console.log('Copying files for standalone build...\n');

  try {
    // Copy .next/static
    if (fs.existsSync(staticSrc)) {
      console.log('Copying .next/static...');
      copyDirectory(staticSrc, staticDest);
      console.log('✓ Static files copied successfully\n');
    } else {
      console.log('⚠ Static source directory not found:', staticSrc);
    }

    // Copy public folder
    if (fs.existsSync(publicSrc)) {
      console.log('Copying public folder...');
      copyDirectory(publicSrc, publicDest);
      console.log('✓ Public files copied successfully\n');
    } else {
      console.log('⚠ Public source directory not found:', publicSrc);
    }

    console.log('✓ All files copied successfully!');
  } catch (error) {
    console.error('Error copying files:', error.message);
    process.exit(1);
  }
}

main();
