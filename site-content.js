export const supportedLanguages = ['pt', 'en', 'es'];

const projects = {
  pt: [
    ['Meliora 2.0 SDF', 'Aplicação web para gestão integrada de processos e dados. Desenvolvida com Laravel 5.7 e Vue.js.', 'Sistemas Web Complexos'],
    ['Sistema Financeiro', 'Plataforma de gestão financeira pessoal com inteligência de investimentos (Modelo de Markowitz) usando Python e Streamlit.', 'Automações Inteligentes e IA'],
    ['Capivara Romântica', 'Agente de IA customizado para WhatsApp utilizando OpenAI e FastAPI, simulando a personalidade de um universitário.', 'Automações Inteligentes'],
    ['Gusli Books', 'Plataforma de e-commerce de livros com Node.js, React e SQLite. Demonstração de loja virtual literária completa.', 'Landing Pages e E-commerces'],
    ['Gusmão Madeiras', 'Portfólio web responsivo em SPA, catálogo com filtros em tempo real e integração com WhatsApp para orçamentos.', 'Landing Pages'],
    ['Revista Entre Parágrafos', 'Portal acadêmico completo com sistema back-end, área restrita para autores e leitores para publicação de artigos.', 'Sistemas Web Complexos'],
    ['Are You a Criminal', 'Machine Learning em Python que extrai um embedding facial normalizado e compara com um conjunto local de imagens de referência.', 'Machine Learning e Visão Computacional'],
    ['GWeb', 'Aplicativo de desenvolvimento de software web através de interfaces gráficas facilitadas. Desenvolvido com C#.', 'Ferramentas de Desenvolvimento'],
    ['Kitchlean', 'Plataforma SaaS que ajuda restaurantes a transformar capacidade ociosa em marcas virtuais para delivery, com diagnóstico, recomendações de IA e projeções financeiras.', 'SaaS, IA e Food Service'],
  ],
  en: [
    ['Meliora 2.0 SDF', 'Web application for integrated process and data management. Built with Laravel 5.7 and Vue.js.', 'Complex Web Systems'],
    ['Financial System', 'Personal finance management platform with investment intelligence (Markowitz Model) built with Python and Streamlit.', 'Smart Automation and AI'],
    ['Romantic Capybara', 'Custom AI agent for WhatsApp built with OpenAI and FastAPI, simulating a university student\'s personality.', 'Smart Automation'],
    ['Gusli Books', 'Book e-commerce platform built with Node.js, React, and SQLite. A complete literary online store demonstration.', 'Landing Pages and E-commerce'],
    ['Gusmão Madeiras', 'Responsive SPA web portfolio, product catalog with real-time filters, and WhatsApp integration for quotes.', 'Landing Pages'],
    ['Entre Parágrafos Magazine', 'Complete academic portal with a back-end system and restricted areas for authors and readers to publish articles.', 'Complex Web Systems'],
    ['Are You a Criminal', 'Python machine learning project that extracts a normalized facial embedding and compares it with a local reference-image set.', 'Machine Learning and Computer Vision'],
    ['GWeb', 'Web software development application using approachable graphical interfaces. Built with C#.', 'Development Tools'],
    ['Kitchlean', 'SaaS platform that helps restaurants turn unused capacity into virtual delivery brands, with diagnostics, AI recommendations, and financial projections.', 'SaaS, AI, and Food Service'],
  ],
  es: [
    ['Meliora 2.0 SDF', 'Aplicación web para la gestión integrada de procesos y datos. Desarrollada con Laravel 5.7 y Vue.js.', 'Sistemas Web Complejos'],
    ['Sistema Financiero', 'Plataforma de gestión financiera personal con inteligencia de inversiones (Modelo de Markowitz) usando Python y Streamlit.', 'Automatizaciones Inteligentes e IA'],
    ['Capibara Romántica', 'Agente de IA personalizado para WhatsApp que utiliza OpenAI y FastAPI, simulando la personalidad de un estudiante universitario.', 'Automatizaciones Inteligentes'],
    ['Gusli Books', 'Plataforma de comercio electrónico de libros con Node.js, React y SQLite. Demostración completa de tienda literaria virtual.', 'Landing Pages y Comercio Electrónico'],
    ['Gusmão Madeiras', 'Portafolio web responsivo en SPA, catálogo con filtros en tiempo real e integración con WhatsApp para presupuestos.', 'Landing Pages'],
    ['Revista Entre Parágrafos', 'Portal académico completo con sistema de back-end y área restringida para autores y lectores para la publicación de artículos.', 'Sistemas Web Complejos'],
    ['Are You a Criminal', 'Proyecto de aprendizaje automático en Python que extrae un embedding facial normalizado y lo compara con un conjunto local de imágenes de referencia.', 'Aprendizaje Automático y Visión por Computadora'],
    ['GWeb', 'Aplicación de desarrollo de software web mediante interfaces gráficas accesibles. Desarrollada con C#.', 'Herramientas de Desarrollo'],
    ['Kitchlean', 'Plataforma SaaS que ayuda a restaurantes a transformar capacidad ociosa en marcas virtuales de delivery, con diagnóstico, recomendaciones de IA y proyecciones financieras.', 'SaaS, IA y Servicio de Alimentos'],
  ],
};

const translations = {
  pt: {
    pageTitle: 'Henrique Lima Gusmão - Portfólio',
    navigationLabel: 'Navegação principal',
    languageSelectorLabel: 'Selecionar idioma',
    navigation: { home: 'Início', about: 'Sobre mim', projects: 'Projetos', contact: 'Contato' },
    hero: { firstLine: 'TUDO É', accentLine: 'DIGITAL.', question: 'Onde posso te ajudar no universo digital hoje?', cta: 'Iniciar Projeto' },
    about: {
      title: 'Sobre Mim',
      introduction: 'Sou estudante de Ciência da Computação na UFMG (2030).<br><br>Gosto de imaginar soluções que fazem nossa vida melhor. Daí eu crio elas.',
      profile: [
        { title: 'Pesquisas Científicas', items: [
          { heading: 'A falsa ideia de “criminalidade facial”', href: 'https://doi.org/10.5281/zenodo.21659240', paragraphs: ['Viés racial, listas públicas de procurados e os limites da similaridade facial. Preprint publicado em 19 de agosto de 2026.'] },
          { heading: 'Rupturas conversacionais e sinais de artificialidade em uma persona no WhatsApp', href: 'https://doi.org/10.5281/zenodo.21539839', paragraphs: ['Estudo exploratório do caso Capivara Romântica, publicado em 24 de julho de 2026.'] },
        ] },
        { title: 'Competências, Certificações & Prêmios', items: [{ paragraphs: ['<strong>Idiomas:</strong> Inglês (C1), Espanhol (B2)', '<strong>Tech:</strong> Python, TypeScript, AWS, IA, Excel Avançado', '<strong>Certificação:</strong> English Proficiency Certification — C1 Conversational, Duolingo English Test.', '<strong>Missão 42:</strong> Python, resolução de problemas e Bash.', '<strong>Prêmios:</strong> Medalha de Ouro na Olimpíada Brasileira de Ciências, Ministério da Ciência, Tecnologia e Inovação (emitida em jan. de 2022); Top 3% ENEM 2024.'] }] },
      ],
      experience: [
        { title: 'Experiência Profissional', items: [
          { heading: 'P&D — Laboratório de Engenharia de Sistemas, Dados e Inovação', paragraphs: ['Escola de Engenharia da UFMG (ago. de 2026 — o momento)'], list: ['Desenvolvimento de página web para a Escola de Engenharia da UFMG com React e Figma.', 'Criação de sistema acadêmico para mestrado e doutorado voltado à Escola de Engenharia, à UFMG e a universidades federais brasileiras.'] },
          { heading: 'Desenvolvedor Full Stack — Espaço de Inovação, Departamento de Física', paragraphs: ['UFMG (mar. de 2026 — o momento)'], list: ['Desenvolvimento ágil de aplicativo de aprendizado em duas etapas para o <a href="https://meliora.ufmg.br/" target="_blank">Meliora</a>, com PHP, Laravel, Vue.js, JavaScript, MySQL, OpenAI API e Git.'] },
          { heading: 'Ensino de Idiomas', paragraphs: ['Professor de inglês na plataforma Aliança (2025).'] },
          { heading: 'Empreendedorismo', paragraphs: ['Fundador da Loja do Doce (2021-2022). Importação, logística e gestão de e-commerce.'] },
          { heading: 'Assistente Administrativo — Aprendiz', paragraphs: ['Gusmão Madeiras (nov. de 2020 — abr. de 2021)'], list: ['Suporte aos Departamentos Administrativos e de TI, com atendimento ao cliente, entrada de dados e documentação técnica.'] },
        ] },
        { title: 'Voluntariado & Liderança', items: [
          { heading: 'Revista Entreparágrafos (2026-Atual)', paragraphs: ['Manutenção do site, infraestrutura digital e suporte técnico.', 'Desenvolvimento acelerado de competências full stack, com entrega de API completa, login seguro e gerenciamento de banco de dados.'] },
          { heading: 'Coordenador de Campo — Projeto Rondon', paragraphs: ['jan. de 2026 · 1 mês · Direitos civis e ações sociais'], list: ['Realização de trabalho de campo com coleta de mais de 6.000 dados de moradores urbanos e rurais, subsidiando relatórios estratégicos ao Ministério Público e à Prefeitura.', 'Condução de oficinas de alfabetização, matemática e lógica para crianças, além de ações de arrecadação para um abrigo infantil local.', 'Coordenação de eventos públicos com triagens básicas de saúde, atividades recreativas e campanhas de conscientização em saúde mental.'] },
          { heading: 'Missão 42', paragraphs: ['dez. de 2025 · Bootcamp intensivo de programação e resolução de problemas na 42 SP.'] },
          { heading: 'Fundador e Professor Voluntário — Gusli Academy', paragraphs: ['jan. de 2024 — jan. de 2025 · 1 ano e 1 mês · Educação', 'Fundação de iniciativa para auxiliar estrangeiros interessados em aprender português e brasileiros que desejavam aprender inglês, conectando professores em aprimoramento metodológico a estudantes online com barreiras financeiras ao acesso a aulas particulares ou em grupo.'] },
        ] },
      ],
    },
    projectsTitle: 'Meus Projetos', projectsLabel: 'Projetos desenvolvidos',
    contact: { prompt: 'Se interessou?', heading: 'ENTÃO VAMOS<br>CONVERSAR.', logoAlt: 'Logo Henrique' },
    footer: 'Ciência da Computação - UFMG',
  },
  en: {
    pageTitle: 'Henrique Lima Gusmão - Portfolio',
    navigationLabel: 'Primary navigation',
    languageSelectorLabel: 'Select language',
    navigation: { home: 'Home', about: 'About me', projects: 'Projects', contact: 'Contact' },
    hero: { firstLine: "IT'S ALL", accentLine: 'DIGITAL.', question: 'Where can I help you in the digital universe today?', cta: 'Start a Project' },
    about: {
      title: 'About Me',
      introduction: 'I am a Computer Science student at UFMG (class of 2030).<br><br>I enjoy imagining solutions that make our lives better. Then I build them.',
      profile: [
        { title: 'Research', items: [
          { heading: 'The false idea of “facial criminality”', href: 'https://doi.org/10.5281/zenodo.21659240', paragraphs: ['Racial bias, public wanted lists, and the limits of facial similarity. Preprint published on August 19, 2026.'] },
          { heading: 'Conversational ruptures and signs of artificiality in a WhatsApp persona', href: 'https://doi.org/10.5281/zenodo.21539839', paragraphs: ['Exploratory study of the Romantic Capybara case, published on July 24, 2026.'] },
        ] },
        { title: 'Skills, Certifications & Awards', items: [{ paragraphs: ['<strong>Languages:</strong> English (C1), Spanish (B2)', '<strong>Tech:</strong> Python, TypeScript, AWS, AI, Advanced Excel', '<strong>Certification:</strong> English Proficiency Certification — C1 Conversational, Duolingo English Test.', '<strong>Mission 42:</strong> Python, problem-solving, and Bash.', '<strong>Awards:</strong> Gold Medal at the Brazilian Science Olympiad, Ministry of Science, Technology and Innovation (issued January 2022); Top 3% in ENEM 2024.'] }] },
      ],
      experience: [
        { title: 'Professional Experience', items: [
          { heading: 'R&D — Systems, Data and Innovation Engineering Laboratory', paragraphs: ['UFMG School of Engineering (August 2026 — present)'], list: ['Developing a web page for UFMG School of Engineering using React and Figma.', 'Creating an academic system for master\'s and doctoral programs for the School of Engineering, UFMG, and Brazilian federal universities.'] },
          { heading: 'Full-Stack Developer — Innovation Space, Physics Department', paragraphs: ['UFMG (March 2026 — present)'], list: ['Rapid development of a two-stage learning app for <a href="https://meliora.ufmg.br/" target="_blank">Meliora</a>, using PHP, Laravel, Vue.js, JavaScript, MySQL, the OpenAI API, and Git.'] },
          { heading: 'Language Teaching', paragraphs: ['English teacher on the Aliança platform (2025).'] },
          { heading: 'Entrepreneurship', paragraphs: ['Founder of Loja do Doce (2021–2022). Importing, logistics, and e-commerce management.'] },
          { heading: 'Administrative Assistant — Apprentice', paragraphs: ['Gusmão Madeiras (November 2020 — April 2021)'], list: ['Supported Administrative and IT departments through customer service, data entry, and technical documentation.'] },
        ] },
        { title: 'Volunteering & Leadership', items: [
          { heading: 'Entreparágrafos Magazine (2026–present)', paragraphs: ['Maintaining the website, digital infrastructure, and technical support.', 'Accelerated development of full-stack skills, delivering a complete API, secure login, and database management.'] },
          { heading: 'Field Coordinator — Rondon Project', paragraphs: ['January 2026 · 1 month · Civil rights and social action'], list: ['Conducted fieldwork collecting more than 6,000 data points from urban and rural residents, informing strategic reports for the Public Prosecutor\'s Office and City Hall.', 'Led literacy, mathematics, and logic workshops for children, as well as fundraising for a local children\'s shelter.', 'Coordinated public events with basic health screenings, recreational activities, and mental health awareness campaigns.'] },
          { heading: 'Mission 42', paragraphs: ['December 2025 · Intensive programming and problem-solving bootcamp at 42 São Paulo.'] },
          { heading: 'Founder and Volunteer Teacher — Gusli Academy', paragraphs: ['January 2024 — January 2025 · 1 year and 1 month · Education', 'Founded an initiative to help foreigners interested in learning Portuguese and Brazilians who wanted to learn English, connecting teachers developing their methodology with online students facing financial barriers to private or group classes.'] },
        ] },
      ],
    },
    projectsTitle: 'My Projects', projectsLabel: 'Developed projects',
    contact: { prompt: 'Interested?', heading: "LET'S<br>TALK.", logoAlt: 'Henrique logo' },
    footer: 'Computer Science - UFMG',
  },
  es: {
    pageTitle: 'Henrique Lima Gusmão - Portafolio',
    navigationLabel: 'Navegación principal',
    languageSelectorLabel: 'Seleccionar idioma',
    navigation: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', contact: 'Contacto' },
    hero: { firstLine: 'TODO ES', accentLine: 'DIGITAL.', question: '¿Cómo puedo ayudarte hoy en el universo digital?', cta: 'Iniciar Proyecto' },
    about: {
      title: 'Sobre Mí',
      introduction: 'Soy estudiante de Ciencias de la Computación en la UFMG (2030).<br><br>Me gusta imaginar soluciones que mejoran nuestras vidas. Entonces las creo.',
      profile: [
        { title: 'Investigación Científica', items: [
          { heading: 'La falsa idea de la “criminalidad facial”', href: 'https://doi.org/10.5281/zenodo.21659240', paragraphs: ['Sesgo racial, listas públicas de personas buscadas y los límites de la similitud facial. Preprint publicado el 19 de agosto de 2026.'] },
          { heading: 'Rupturas conversacionales y señales de artificialidad en una persona de WhatsApp', href: 'https://doi.org/10.5281/zenodo.21539839', paragraphs: ['Estudio exploratorio del caso Capibara Romántica, publicado el 24 de julio de 2026.'] },
        ] },
        { title: 'Competencias, Certificaciones y Premios', items: [{ paragraphs: ['<strong>Idiomas:</strong> Inglés (C1), Español (B2)', '<strong>Tecnología:</strong> Python, TypeScript, AWS, IA, Excel Avanzado', '<strong>Certificación:</strong> English Proficiency Certification — C1 Conversational, Duolingo English Test.', '<strong>Misión 42:</strong> Python, resolución de problemas y Bash.', '<strong>Premios:</strong> Medalla de Oro en la Olimpíada Brasileña de Ciencias, Ministerio de Ciencia, Tecnología e Innovación (emitida en enero de 2022); Top 3% ENEM 2024.'] }] },
      ],
      experience: [
        { title: 'Experiencia Profesional', items: [
          { heading: 'I+D — Laboratorio de Ingeniería de Sistemas, Datos e Innovación', paragraphs: ['Escuela de Ingeniería de la UFMG (agosto de 2026 — actualidad)'], list: ['Desarrollo de una página web para la Escuela de Ingeniería de la UFMG con React y Figma.', 'Creación de un sistema académico de maestría y doctorado para la Escuela de Ingeniería, la UFMG y universidades federales brasileñas.'] },
          { heading: 'Desarrollador Full Stack — Espacio de Innovación, Departamento de Física', paragraphs: ['UFMG (marzo de 2026 — actualidad)'], list: ['Desarrollo ágil de una aplicación de aprendizaje en dos etapas para <a href="https://meliora.ufmg.br/" target="_blank">Meliora</a>, con PHP, Laravel, Vue.js, JavaScript, MySQL, OpenAI API y Git.'] },
          { heading: 'Enseñanza de Idiomas', paragraphs: ['Profesor de inglés en la plataforma Aliança (2025).'] },
          { heading: 'Emprendimiento', paragraphs: ['Fundador de Loja do Doce (2021–2022). Importación, logística y gestión de comercio electrónico.'] },
          { heading: 'Asistente Administrativo — Aprendiz', paragraphs: ['Gusmão Madeiras (noviembre de 2020 — abril de 2021)'], list: ['Apoyo a los departamentos Administrativo y de TI, con atención al cliente, entrada de datos y documentación técnica.'] },
        ] },
        { title: 'Voluntariado y Liderazgo', items: [
          { heading: 'Revista Entreparágrafos (2026–actualidad)', paragraphs: ['Mantenimiento del sitio web, la infraestructura digital y el soporte técnico.', 'Desarrollo acelerado de competencias full stack, con entrega de una API completa, inicio de sesión seguro y gestión de base de datos.'] },
          { heading: 'Coordinador de Campo — Proyecto Rondon', paragraphs: ['enero de 2026 · 1 mes · Derechos civiles y acción social'], list: ['Realización de trabajo de campo con la recopilación de más de 6.000 datos de residentes urbanos y rurales, que respaldaron informes estratégicos para el Ministerio Público y el Ayuntamiento.', 'Conducción de talleres de alfabetización, matemáticas y lógica para niños, además de acciones de recaudación para un refugio infantil local.', 'Coordinación de eventos públicos con controles básicos de salud, actividades recreativas y campañas de concienciación sobre salud mental.'] },
          { heading: 'Misión 42', paragraphs: ['diciembre de 2025 · Bootcamp intensivo de programación y resolución de problemas en 42 São Paulo.'] },
          { heading: 'Fundador y Profesor Voluntario — Gusli Academy', paragraphs: ['enero de 2024 — enero de 2025 · 1 año y 1 mes · Educación', 'Fundación de una iniciativa para ayudar a extranjeros interesados en aprender portugués y a brasileños que deseaban aprender inglés, conectando docentes que perfeccionaban su metodología con estudiantes en línea que enfrentaban barreras económicas para acceder a clases privadas o grupales.'] },
        ] },
      ],
    },
    projectsTitle: 'Mis Proyectos', projectsLabel: 'Proyectos desarrollados',
    contact: { prompt: '¿Te interesó?', heading: 'ENTONCES<br>HABLEMOS.', logoAlt: 'Logotipo de Henrique' },
    footer: 'Ciencias de la Computación - UFMG',
  },
};

for (const language of supportedLanguages) {
  translations[language].projects = projects[language].map(([title, description, category]) => ({ title, description, category }));
}

export function resolveLanguage(language) {
  return supportedLanguages.includes(language) ? language : 'pt';
}

export function getContent(language) {
  return translations[resolveLanguage(language)];
}

export function renderExperienceBlocks(blocks) {
  return blocks.map((block) => `
    <div class="experience-block${block.profile ? ' profile-block' : ''}">
      <h3>${block.title}</h3>
      ${block.items.map((item) => `
        <div class="experience-item">
          ${item.heading ? `<h4>${item.href ? `<a href="${item.href}" target="_blank" rel="noreferrer">${item.heading}</a>` : item.heading}</h4>` : ''}
          ${(item.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join('')}
          ${item.list ? `<ul class="experience-list">${item.list.map((entry) => `<li>${entry}</li>`).join('')}</ul>` : ''}
        </div>
      `).join('')}
    </div>
  `).join('');
}

export function renderProfile(about) {
  const profileBlocks = about.profile.map((block) => ({ ...block, profile: true }));

  return `<p class="bio-text">${about.introduction}</p>${renderExperienceBlocks(profileBlocks)}`;
}
