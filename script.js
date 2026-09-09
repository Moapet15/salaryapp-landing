const ANALYTICS_ENDPOINT = "https://conta-contes.vercel.app/api/analytics-salaryapp";
const INSTALLATION_KEY = "salaryapp_landing_installation_id";
const SESSION_ID = `${Date.now()}-${Math.random().toString(36).slice(2, 14)}`;

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 14)}`;
}

function getInstallationId() {
  try {
    let id = localStorage.getItem(INSTALLATION_KEY);
    if (!id) {
      id = makeId();
      localStorage.setItem(INSTALLATION_KEY, id);
    }
    return id;
  } catch {
    return makeId();
  }
}

async function trackEvent(eventName, metadata = {}) {
  try {
    await fetch(ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        installationId: getInstallationId(),
        sessionId: SESSION_ID,
        eventName,
        platform: "web-landing",
        appVersion: null,
        metadata: { source: "landing", ...metadata }
      })
    });
  } catch {
    // Analytics must never block the landing page.
  }
}

const translations = {
  es: {
    navHow: "Cómo funciona",
    navWho: "Para quién",
    navDownload: "Descargar",
    eyebrow: "Tu nómina, antes de que llegue",
    heroTitle: "Calcula cuánto cobrarás este mes antes de recibir tu nómina.",
    heroLead: "Añade noches, festivos, horas extra, complementos y deducciones. SalaryApp te da una estimación clara de lo que puedes esperar cobrar.",
    ctaPlay: "Descargar gratis en Google Play",
    ctaWeb: "Probar en la web",
    trustFree: "Gratis",
    trustPrivacy: "Tus datos no se venden",
    trustEstimate: "Estimación orientativa",
    demoMonth: "Septiembre 2026",
    demoEstimate: "Estimación",
    demoUpdated: "Actualizado",
    demoNet: "Neto estimado",
    demoBefore: "Antes de recibir la nómina",
    demoGross: "Bruto",
    demoDeductions: "Deducciones",
    conceptBase: "Salario base",
    conceptNight: "Nocturnidad",
    conceptHoliday: "Festivos",
    conceptExtra: "Horas extra",
    problem: "Si tu sueldo cambia cada mes, esperar a la nómina para saber cuánto cobrarás no debería ser la única opción.",
    howKicker: "Simple por diseño",
    howTitle: "Configura una vez. Calcula cada mes.",
    howLead: "SalaryApp convierte tus conceptos salariales en un cálculo mensual fácil de revisar.",
    step1Title: "Configura cómo cobras",
    step1Text: "Añade salario base, complementos, porcentajes, deducciones y conceptos variables.",
    step2Title: "Introduce lo que has trabajado",
    step2Text: "Registra noches, festivos, horas extra u otros conceptos del periodo.",
    step3Title: "Consulta tu estimación",
    step3Text: "Visualiza bruto, deducciones, neto y el desglose de cada concepto.",
    whoKicker: "Especialmente útil si tu nómina varía",
    whoTitle: "Hecha para quien no cobra exactamente lo mismo cada mes.",
    whoLead: "Turnos, noches, festivos y complementos hacen difícil anticipar el sueldo. SalaryApp está pensada precisamente para ese escenario.",
    sectorHealth: "Sanidad",
    sectorHealthText: "Noches, festivos, guardias y complementos.",
    sectorHospitality: "Hostelería",
    sectorHospitalityText: "Horas variables, extras y festivos.",
    sectorSecurity: "Seguridad",
    sectorSecurityText: "Turnos, nocturnidad y pluses.",
    sectorLogistics: "Logística e industria",
    sectorLogisticsText: "Turnos, primas y complementos variables.",
    feature1Title: "Antes de cobrar",
    feature1Text: "No esperes al final de mes para tener una referencia de cuánto vas a recibir.",
    feature2Title: "Desglose claro",
    feature2Text: "Entiende qué aporta cada concepto al resultado final de tu salario.",
    feature3Title: "Historial mensual",
    feature3Text: "Mantén tus periodos organizados y revisa cómo evoluciona tu sueldo.",
    feature4Title: "Sin complicaciones",
    feature4Text: "Una herramienta personal para controlar tu salario, no un software de nóminas empresarial.",
    finalKicker: "Este mes, no vayas a ciegas",
    finalTitle: "Ten una estimación antes de que llegue la nómina.",
    finalText: "Configura SalaryApp y empieza a controlar mejor lo que esperas cobrar.",
    faqTitle: "Preguntas frecuentes",
    faq1Q: "¿SalaryApp genera una nómina oficial?",
    faq1A: "No. SalaryApp ofrece estimaciones orientativas basadas en los datos que introduces y no sustituye una nómina oficial ni asesoramiento laboral, fiscal o contable.",
    faq2Q: "¿Puedo usarla si cobro conceptos variables?",
    faq2A: "Sí. Está pensada especialmente para registrar horas extra, nocturnidad, festivos, complementos y otros conceptos que pueden cambiar cada mes.",
    faq3Q: "¿SalaryApp es gratuita?",
    faq3A: "Sí. Actualmente SalaryApp puede utilizarse gratuitamente.",
    faq4Q: "¿Se venden mis datos?",
    faq4A: "No. SalaryApp no vende tus datos personales. Consulta la política de privacidad para conocer qué información se trata y con qué finalidad.",
    footerText: "Controla tu salario antes de que llegue la nómina.",
    privacy: "Privacidad",
    contact: "Contacto",
    legalNote: "Las estimaciones son orientativas."
  },
  ca: {
    navHow: "Com funciona",
    navWho: "Per a qui",
    navDownload: "Descarrega",
    eyebrow: "La teva nòmina, abans que arribi",
    heroTitle: "Calcula quant cobraràs aquest mes abans de rebre la nòmina.",
    heroLead: "Afegeix nits, festius, hores extra, complements i deduccions. SalaryApp et dona una estimació clara del que pots esperar cobrar.",
    ctaPlay: "Descarrega gratis a Google Play",
    ctaWeb: "Prova-la al web",
    trustFree: "Gratis",
    trustPrivacy: "Les teves dades no es venen",
    trustEstimate: "Estimació orientativa",
    demoMonth: "Setembre 2026",
    demoEstimate: "Estimació",
    demoUpdated: "Actualitzat",
    demoNet: "Net estimat",
    demoBefore: "Abans de rebre la nòmina",
    demoGross: "Brut",
    demoDeductions: "Deduccions",
    conceptBase: "Sou base",
    conceptNight: "Nocturnitat",
    conceptHoliday: "Festius",
    conceptExtra: "Hores extra",
    problem: "Si el teu sou canvia cada mes, esperar la nòmina per saber quant cobraràs no hauria de ser l'única opció.",
    howKicker: "Simple per disseny",
    howTitle: "Configura una vegada. Calcula cada mes.",
    howLead: "SalaryApp converteix els teus conceptes salarials en un càlcul mensual fàcil de revisar.",
    step1Title: "Configura com cobres",
    step1Text: "Afegeix sou base, complements, percentatges, deduccions i conceptes variables.",
    step2Title: "Introdueix el que has treballat",
    step2Text: "Registra nits, festius, hores extra o altres conceptes del període.",
    step3Title: "Consulta la teva estimació",
    step3Text: "Visualitza brut, deduccions, net i el desglossament de cada concepte.",
    whoKicker: "Especialment útil si la teva nòmina varia",
    whoTitle: "Feta per a qui no cobra exactament el mateix cada mes.",
    whoLead: "Torns, nits, festius i complements fan difícil anticipar el sou. SalaryApp està pensada precisament per aquest escenari.",
    sectorHealth: "Sanitat",
    sectorHealthText: "Nits, festius, guàrdies i complements.",
    sectorHospitality: "Hostaleria",
    sectorHospitalityText: "Hores variables, extres i festius.",
    sectorSecurity: "Seguretat",
    sectorSecurityText: "Torns, nocturnitat i plusos.",
    sectorLogistics: "Logística i indústria",
    sectorLogisticsText: "Torns, primes i complements variables.",
    feature1Title: "Abans de cobrar",
    feature1Text: "No esperis a final de mes per tenir una referència de quant rebràs.",
    feature2Title: "Desglossament clar",
    feature2Text: "Entén què aporta cada concepte al resultat final del teu salari.",
    feature3Title: "Historial mensual",
    feature3Text: "Mantén els teus períodes organitzats i revisa com evoluciona el teu sou.",
    feature4Title: "Sense complicacions",
    feature4Text: "Una eina personal per controlar el teu salari, no un software de nòmines empresarial.",
    finalKicker: "Aquest mes, no vagis a cegues",
    finalTitle: "Tingues una estimació abans que arribi la nòmina.",
    finalText: "Configura SalaryApp i comença a controlar millor el que esperes cobrar.",
    faqTitle: "Preguntes freqüents",
    faq1Q: "SalaryApp genera una nòmina oficial?",
    faq1A: "No. SalaryApp ofereix estimacions orientatives basades en les dades que introdueixes i no substitueix una nòmina oficial ni assessorament laboral, fiscal o comptable.",
    faq2Q: "La puc utilitzar si cobro conceptes variables?",
    faq2A: "Sí. Està pensada especialment per registrar hores extra, nocturnitat, festius, complements i altres conceptes que poden canviar cada mes.",
    faq3Q: "SalaryApp és gratuïta?",
    faq3A: "Sí. Actualment SalaryApp es pot utilitzar gratuïtament.",
    faq4Q: "Es venen les meves dades?",
    faq4A: "No. SalaryApp no ven les teves dades personals. Consulta la política de privacitat per conèixer quina informació es tracta i amb quina finalitat.",
    footerText: "Controla el teu salari abans que arribi la nòmina.",
    privacy: "Privacitat",
    contact: "Contacte",
    legalNote: "Les estimacions són orientatives."
  }
};

function setLanguage(lang) {
  const safeLang = translations[lang] ? lang : "es";
  document.documentElement.lang = safeLang;
  localStorage.setItem("salaryapp_lang", safeLang);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[safeLang][key];
    if (value) node.textContent = value;
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === safeLang);
  });

  const title = safeLang === "ca"
    ? "SalaryApp | Calcula quant cobraràs abans de rebre la nòmina"
    : "SalaryApp | Calcula cuánto cobrarás antes de recibir tu nómina";

  const description = safeLang === "ca"
    ? "Calcula quant cobraràs aquest mes abans de rebre la nòmina. Controla nits, festius, hores extra, complements i deduccions amb SalaryApp."
    : "Calcula cuánto cobrarás este mes antes de recibir tu nómina. Controla noches, festivos, horas extra, complementos y deducciones con SalaryApp.";

  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute("content", description);

  const url = new URL(window.location.href);
  url.searchParams.set("lang", safeLang);
  history.replaceState({}, "", url);
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    trackEvent("landing_language_changed", { language: button.dataset.lang });
  });
});

document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    trackEvent(element.dataset.track, {
      language: document.documentElement.lang,
      href: element.href
    });
  });
});

const urlLang = new URLSearchParams(window.location.search).get("lang");
const savedLang = localStorage.getItem("salaryapp_lang");
setLanguage(urlLang || savedLang || "es");

trackEvent("landing_view", {
  language: document.documentElement.lang,
  path: window.location.pathname
});
