// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.getElementById('lang-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const currentLangSpan = document.getElementById('current-lang');
  const navMenu = document.getElementById('nav-menu');
  const esContent = document.querySelector('.lang-es');
  const enContent = document.querySelector('.lang-en');
  
  // Get saved language or default to Spanish
  let currentLang = localStorage.getItem('site-language') || 'es';
  
  // Apply saved language on load
  updateLanguage(currentLang);
  
  // Language switcher
  langToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    currentLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage(currentLang);
    localStorage.setItem('site-language', currentLang);
  });
  
  function updateLanguage(lang) {
    if (lang === 'es') {
      currentLangSpan.textContent = '🇪🇸';
      esContent.classList.add('active');
      enContent.classList.remove('active');
    } else {
      currentLangSpan.textContent = '🇺🇸';
      enContent.classList.add('active');
      esContent.classList.remove('active');
    }
  }
  
  // Hamburger menu toggle (mobile)
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navMenu.classList.toggle('nav-open');
    menuToggle.classList.toggle('active');
  });
  
  // Dropdown toggle for mobile (click on dropdown items)
  const dropdowns = document.querySelectorAll('.dropdown');
  console.log('Dropdowns encontrados:', dropdowns.length);
  
  dropdowns.forEach(function(dropdown) {
    const dropdownLink = dropdown.querySelector('.nav-link');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    // Toggle dropdown on click (for mobile)
    dropdownLink.addEventListener('click', function(e) {
      console.log('Click en dropdown, ancho ventana:', window.innerWidth);
      
      // Only prevent default and toggle on mobile
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Modo móvil - toggling dropdown');
        
        // Close other dropdowns
        dropdowns.forEach(function(otherDropdown) {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('dropdown-open');
          }
        });
        
        // Toggle this dropdown
        dropdown.classList.toggle('dropdown-open');
        console.log('Dropdown abierto:', dropdown.classList.contains('dropdown-open'));
      }
    });
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navMenu.classList.remove('nav-open');
      menuToggle.classList.remove('active');
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.site-nav')) {
      navMenu.classList.remove('nav-open');
      menuToggle.classList.remove('active');
    }
  });
});
