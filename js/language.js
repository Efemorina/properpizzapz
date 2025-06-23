// Language translations
const translations = {
  sq: {
    // Navigation
    "home": "Kryefaqja",
    "about": "Rreth Nesh",
    "contact": "Kontakt",
    
    // Slider
    "delicious": "Delicious",
    "pershuto_pizza": "Pershuto Pizza",
    "pershuto_desc": "Një kombinim i shijshëm i salcës së bardhë kremoze dhe pule të butë. Pjekur në mënyrë të përkryer me një crust të krokant, kjo pizza ofron një shije të pasur por të lehtë në çdo kafshatë!",
    "order_now": "Porosit Tani",
    "view_menu": "Shiko Menunë",
    "crunchy": "Crunchy",
    "patata_pizza": "La Patata Loca Pizza",
    "patata_desc": "Një lumë i vogël i quajtur Duden rrjedh pranë vendit të tyre dhe u siguron atyre gjërat e nevojshme.",
    "welcome": "Mirësevini",
    "welcome_title": "Ne gatuajmë recetën tuaj të preferuar të pizzës",
    "welcome_desc": "Një lumë i vogël i quajtur Duden rrjedh pranë vendit të tyre dhe u siguron atyre gjërat e nevojshme.",
    
    // Add more translations as needed...
  },
  en: {
    // Navigation
    "home": "Home",
    "about": "About",
    "contact": "Contact",
    
    // Slider
    "delicious": "Delicious",
    "pershuto_pizza": "Pershuto Pizza",
    "pershuto_desc": "A delicious combo of creamy white sauce and tender chicken. Perfectly baked with a crispy crust, this pizza offers a rich yet light flavor in every bite!",
    "order_now": "Order Now",
    "view_menu": "View Menu",
    "crunchy": "Crunchy",
    "patata_pizza": "La Patata Loca Pizza",
    "patata_desc": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    "welcome": "Welcome",
    "welcome_title": "We cooked your desired Pizza Recipe",
    "welcome_desc": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    
    // Add more translations as needed...
  }
};

function changeLanguage(lang) {
  // Update html lang attribute
  document.documentElement.lang = lang;
  
  // Get all elements with data-key attribute
  const translatableElements = document.querySelectorAll('[data-key]');
  
  // Update each element's text
  translatableElements.forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update the language selector
  document.getElementById('languageSelector').value = lang;
  
  // Save preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
}