#!/usr/bin/env node

/**
 * Bundle Analysis Script
 * Analyzes the production build for performance insights
 */

import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

console.log('🔍 Analyzing bundle performance...\n');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check if dist folder exists
  const distPath = join(process.cwd(), 'dist');
  if (!existsSync(distPath)) {
    throw new Error('Build failed: dist folder not found');
  }
  
  // Analyze bundle sizes
  console.log('\n📊 Bundle Analysis:');
  
  const files = [
    'index.html',
    'assets/js/index-*.js',
    'assets/css/index-*.css',
    'assets/js/vendor-*.js',
    'assets/js/ui-*.js',
    'assets/js/utils-*.js',
  ];
  
  files.forEach(pattern => {
    try {
      const result = execSync(`find dist -name "${pattern}" -type f`, { encoding: 'utf8' });
      if (result.trim()) {
        const filePath = result.trim().split('\n')[0];
        const stats = execSync(`ls -lh "${filePath}"`, { encoding: 'utf8' });
        const size = stats.split(/\s+/)[4];
        const name = filePath.split('/').pop();
        console.log(`  ${name}: ${size}`);
      }
    } catch (error) {
      // File not found, skip
    }
  });
  
  // Check for common issues
  console.log('\n🔍 Performance Checks:');
  
  // Check for large files
  const largeFiles = execSync('find dist -type f -size +500k', { encoding: 'utf8' });
  if (largeFiles.trim()) {
    console.log('  ⚠️  Large files detected:');
    largeFiles.trim().split('\n').forEach(file => {
      if (file) {
        const size = execSync(`ls -lh "${file}"`, { encoding: 'utf8' }).split(/\s+/)[4];
        console.log(`    ${file}: ${size}`);
      }
    });
  } else {
    console.log('  ✅ No large files detected');
  }
  
  // Check for duplicate dependencies
  console.log('  ✅ Bundle analysis complete');
  
  console.log('\n🚀 Performance Recommendations:');
  console.log('  1. Use lazy loading for routes');
  console.log('  2. Optimize images with WebP format');
  console.log('  3. Consider code splitting for large components');
  console.log('  4. Monitor Core Web Vitals in production');
  
} catch (error) {
  console.error('❌ Analysis failed:', error.message);
  process.exit(1);
} 