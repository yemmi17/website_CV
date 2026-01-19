import { initNavigation } from './modules/navigation.js';
import { initCounters } from './modules/counters.js';
import { initBackToTop } from './modules/backToTop.js';
import { initAnimations } from './modules/animations.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio initialized');
  
  // Initialize modules
  initNavigation();
  initCounters();
  initBackToTop();
  initAnimations();
  
  // Set current year in footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Handle Vite hot module replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}