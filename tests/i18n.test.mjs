import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getContent,
  renderExperienceBlocks,
  renderProfile,
  resolveLanguage,
  supportedLanguages,
} from '../site-content.js';

test('uses Portuguese as the fallback for unsupported saved languages', () => {
  assert.equal(resolveLanguage('de'), 'pt');
  assert.equal(resolveLanguage(null), 'pt');
});

test('exposes complete content for Portuguese, English, and Spanish', () => {
  assert.deepEqual(supportedLanguages, ['pt', 'en', 'es']);

  for (const language of supportedLanguages) {
    const content = getContent(language);

    assert.equal(typeof content.navigation.home, 'string');
    assert.equal(typeof content.navigationLabel, 'string');
    assert.equal(typeof content.languageSelectorLabel, 'string');
    assert.equal(typeof content.about.introduction, 'string');
    assert.equal(typeof content.contact.heading, 'string');
    assert.equal(content.projects.length, 9);
    assert.ok(content.projects.every((project) => project.title && project.description && project.category));
  }
});

test('returns independent project content in the selected language', () => {
  const portugueseProject = getContent('pt').projects[1];
  const englishProject = getContent('en').projects[1];
  const spanishProject = getContent('es').projects[1];

  assert.equal(portugueseProject.title, 'Sistema Financeiro');
  assert.equal(englishProject.description, 'Personal finance management platform with investment intelligence (Markowitz Model) built with Python and Streamlit.');
  assert.equal(spanishProject.category, 'Automatizaciones Inteligentes e IA');
});

test('keeps every profile and experience entry aligned across languages', () => {
  const portuguese = getContent('pt').about;

  for (const language of ['en', 'es']) {
    const translated = getContent(language).about;

    assert.deepEqual(
      translated.profile.map((block) => block.items.length),
      portuguese.profile.map((block) => block.items.length),
    );
    assert.deepEqual(
      translated.experience.map((block) => block.items.length),
      portuguese.experience.map((block) => block.items.length),
    );
  }
});

test('renders translated professional experience without changing linked destinations', () => {
  const markup = renderExperienceBlocks(getContent('en').about.experience);

  assert.match(markup, /Professional Experience/);
  assert.match(markup, /Full-Stack Developer/);
  assert.match(markup, /https:\/\/meliora\.ufmg\.br\//);
  assert.doesNotMatch(markup, /Experiência Profissional/);
});

test('renders the translated biography before its profile sections', () => {
  const markup = renderProfile(getContent('es').about);

  assert.match(markup, /Soy estudiante de Ciencias de la Computación/);
  assert.match(markup, /Investigación Científica/);
  assert.doesNotMatch(markup, /Sou estudante de Ciência da Computação/);
});
