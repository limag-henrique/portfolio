import { getContent, renderExperienceBlocks, renderProfile, resolveLanguage } from './site-content.js';

const storageKey = 'portfolio-language';
const languageTags = { pt: 'pt-BR', en: 'en', es: 'es' };
const valueAt = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);

let savedLanguage = 'pt';

try {
  savedLanguage = window.localStorage.getItem(storageKey) || 'pt';
} catch {
  // Portuguese remains the fallback when browser storage is unavailable.
}

const applyLanguage = (requestedLanguage) => {
  const language = resolveLanguage(requestedLanguage);
  const content = getContent(language);

  document.documentElement.lang = languageTags[language];
  document.title = content.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = valueAt(content, element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = valueAt(content, element.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.alt = valueAt(content, element.dataset.i18nAlt);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', valueAt(content, element.dataset.i18nAriaLabel));
  });

  document.querySelector('[data-i18n-container="profile"]').innerHTML = renderProfile(content.about);
  document.querySelector('[data-i18n-container="experience"]').innerHTML = renderExperienceBlocks(content.about.experience);

  document.querySelectorAll('.project-card').forEach((card, index) => {
    const project = content.projects[index % content.projects.length];
    card.querySelector('h3').textContent = project.title;
    card.querySelector('.project-card__content p').textContent = project.description;
    card.querySelector('.project-category').textContent = project.category;
  });

  document.querySelectorAll('[data-language]').forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  try {
    window.localStorage.setItem(storageKey, language);
  } catch {
    // The current page still works if storage is blocked by browser settings.
  }
};

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

applyLanguage(savedLanguage);
