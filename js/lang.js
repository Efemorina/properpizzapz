const translations = {
  sq: {
    home: "Kryefaqja",
    about: "Rreth Nesh",
    contact: "Kontakt",
    delicious: "E Shijshme",
    pershuto_pizza: "Pershuto Pizza",
    pershuto_desc: "Një kombinim i shijshëm i salcës së bardhë kremoze dhe pulës së butë. Pjekur në mënyrë të përsosur me kore krokante, kjo picë ofron një shije të pasur dhe të lehtë në çdo kafshim!",
    order_now: "Porosit Tani",
    view_menu: "Shiko Menunë",
    crunchy: "Krokante",
    patata_pizza: "La Patata Loca Pizza",
    patata_desc: "Një lumë i vogël i quajtur Duden kalon pranë dhe e furnizon atë me regelialinë e nevojshme.",
    welcome: "Mirë se vini",
    welcome_title: "Ne gatuam recetën tuaj të preferuar të picës",
    welcome_desc: "Një lumë i vogël i quajtur Duden kalon pranë dhe e furnizon atë me regelialinë e nevojshme."
  },
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    delicious: "Delicious",
    pershuto_pizza: "Prosciutto Pizza",
    pershuto_desc: "A delicious combo of creamy white sauce and tender chicken. Perfectly baked with a crispy crust, this pizza offers a rich yet light flavor in every bite!",
    order_now: "Order Now",
    view_menu: "View Menu",
    crunchy: "Crunchy",
    patata_pizza: "La Patata Loca Pizza",
    patata_desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    welcome: "Welcome",
    welcome_title: "We cooked your desired Pizza Recipe",
    welcome_desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
  }
};

function setLanguage(lang) {
  const selector = document.getElementById('languageSelector');
  if (selector) {
    selector.value = lang;
    updateLanguage(lang);
    localStorage.setItem('selectedLang', lang);
  }
}

const updateLanguage = (lang) => {
  document.querySelectorAll('.translatable').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
};

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('languageSelector');
  if (!selector) {
    console.error("languageSelector element not found");
    return;
  }

  selector.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    updateLanguage(selectedLang);
    localStorage.setItem('selectedLang', selectedLang);
  });

  const savedLang = localStorage.getItem('selectedLang') || 'sq';
  selector.value = savedLang;
  updateLanguage(savedLang);
});
