export const languages = {
  tr: 'TR',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'tr';

const tr = {
  meta: {
    title: 'Nilay Dilekçi — Portfolyo',
    description:
      'Koç Üniversitesi Medya ve Görsel Sanatlar öğrencisi. İçerik yazarlığı, marka dili, tasarım ve kampanya.',
  },
  nav: {
    work: 'İşler',
    about: 'Hakkımda',
    skills: 'Yetkinlikler',
    contact: 'İletişim',
    cv: 'CV İndir',
  },
  hero: {
    brand: 'Nilay Dilekçi',
    role: 'Medya ve Görsel Sanatlar',
    headline: 'Hikâye, ton ve görsel iletişim.',
    sub: 'Markalar için akılda kalan içerikler, kampanyalar ve tasarımlar üretiyorum.',
    ctaWork: 'İşlere bak',
    ctaContact: 'İletişime geç',
    year: '2026',
  },
  about: {
    eyebrow: 'Hakkımda',
    title: 'Strateji ile yaratıcılığı aynı masaya getiriyorum.',
    body: [
      'Ben Nilay Dilekçi. Koç Üniversitesi Medya ve Görsel Sanatlar bölümü öğrencisiyim. Hikâye anlatımı, kullanıcı içgörüsü ve doğru tonu yakalamaya odaklanan içerikler üretmeyi seviyorum.',
      'Bunu yaparken tasarım, strateji ve görsel iletişimi bir araya getirerek markalar için etkili ve akılda kalıcı deneyimler oluşturuyorum.',
      'İçerik yazarlığı, marka dili geliştirme, sosyal medya iletişimi ve kampanya oluşturma üzerine çalışıyorum. Aynı zamanda tasarım ve dijital pazarlama alanlarında güçlü bir üretim becerisine sahibim.',
    ],
  },
  skills: {
    eyebrow: 'Yetkinlikler',
    title: 'Ürettiğim işlerin omurgası.',
    items: [
      {
        title: 'İçerik & Metin Yazarlığı',
        desc: 'Marka dili, senaryo, sosyal medya içerikleri',
      },
      {
        title: 'Tasarım',
        desc: 'Sosyal medya görselleri, poster, mockup',
      },
      {
        title: 'Strateji',
        desc: 'Hedef kitle analizi, kampanya planlama',
      },
      {
        title: 'İletişim',
        desc: 'Yaratıcı konsept geliştirme, sunum',
      },
    ],
    toolsLabel: 'Araçlar',
    tools: ['Canva', 'MS Office', 'CapCut'],
    educationLabel: 'Eğitim',
    education: {
      school: 'Koç Üniversitesi',
      program: 'Medya ve Görsel Sanatlar',
      status: 'Senior Student',
    },
    experienceLabel: 'Deneyim',
    experience: [
      {
        org: 'TNC Group Şirketleri',
        role: 'Satış ve Pazarlama Stajyeri',
      },
      {
        org: 'Koç Üniversitesi Folklör & Hemşirelik Kulüpleri',
        role: 'Sosyal Medya Yöneticisi',
      },
    ],
  },
  work: {
    eyebrow: 'Seçilmiş işler',
    title: 'Afişten kampanyaya, metinden görsele.',
    categories: {
      posters: 'Afiş Tasarımları',
      posts: 'Post Tasarımları',
      campaigns: 'Reklam Kampanyaları',
      writing: 'Metin Yazarlığı',
    },
  },
  contact: {
    eyebrow: 'İletişim',
    title: 'Bana buradan ulaşabilirsiniz.',
    body: 'Staj, freelance veya yaratıcı işbirlikleri için yazın — en kısa sürede dönüş yaparım.',
    reachLabel: 'Ulaşabileceğiniz kanallar',
    emailLabel: 'E-posta',
    phoneLabel: 'Telefon',
    linkedinLabel: 'LinkedIn',
    phone: '0542 768 7959',
    email: 'dilekcinilay@gmail.com',
    linkedin: 'linkedin.com/in/nilay-dilekçi',
    linkedinUrl: 'https://www.linkedin.com/in/nilay-dilekçi',
    cvTitle: 'CV',
    cvBody: 'Güncel özgeçmişime buradan ulaşabilirsiniz.',
    cvCta: 'CV’yi indir',
    cvHref: '/cv/Nilay-Dilekci-CV.pdf',
  },
  footer: {
    thanks: 'Teşekkür ederim',
    note: 'Yeni projelerde görüşmek üzere.',
  },
};

const en: typeof tr = {
  meta: {
    title: 'Nilay Dilekçi — Portfolio',
    description:
      'Koç University Media and Visual Arts student. Copywriting, brand voice, design, and campaigns.',
  },
  nav: {
    work: 'Work',
    about: 'About',
    skills: 'Skills',
    contact: 'Contact',
    cv: 'Download CV',
  },
  hero: {
    brand: 'Nilay Dilekçi',
    role: 'Media and Visual Arts',
    headline: 'Story, tone, and visual communication.',
    sub: 'I create memorable content, campaigns, and design for brands.',
    ctaWork: 'View work',
    ctaContact: 'Get in touch',
    year: '2026',
  },
  about: {
    eyebrow: 'About',
    title: 'I bring strategy and creativity to the same table.',
    body: [
      'I am Nilay Dilekçi, a Media and Visual Arts student at Koç University. I love creating content rooted in storytelling, audience insight, and the right tone of voice.',
      'I combine design, strategy, and visual communication to build effective, memorable brand experiences.',
      'My focus spans copywriting, brand language, social media communication, and campaign building — with strong production skills in design and digital marketing.',
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'The backbone of the work I make.',
    items: [
      {
        title: 'Content & Copywriting',
        desc: 'Brand voice, scripts, social content',
      },
      {
        title: 'Design',
        desc: 'Social visuals, posters, mockups',
      },
      {
        title: 'Strategy',
        desc: 'Audience analysis, campaign planning',
      },
      {
        title: 'Communication',
        desc: 'Creative concepting, presentations',
      },
    ],
    toolsLabel: 'Tools',
    tools: ['Canva', 'MS Office', 'CapCut'],
    educationLabel: 'Education',
    education: {
      school: 'Koç University',
      program: 'Media and Visual Arts',
      status: 'Senior Student',
    },
    experienceLabel: 'Experience',
    experience: [
      {
        org: 'TNC Group Companies',
        role: 'Sales & Marketing Intern',
      },
      {
        org: 'Koç University Folklore & Nursing Clubs',
        role: 'Social Media Manager',
      },
    ],
  },
  work: {
    eyebrow: 'Selected work',
    title: 'From posters to campaigns, copy to visuals.',
    categories: {
      posters: 'Poster Design',
      posts: 'Social Posts',
      campaigns: 'Ad Campaigns',
      writing: 'Copywriting',
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'You can reach me here.',
    body: 'For internships, freelance, or creative collaborations — I usually reply quickly.',
    reachLabel: 'Ways to get in touch',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    linkedinLabel: 'LinkedIn',
    phone: '0542 768 7959',
    email: 'dilekcinilay@gmail.com',
    linkedin: 'linkedin.com/in/nilay-dilekçi',
    linkedinUrl: 'https://www.linkedin.com/in/nilay-dilekçi',
    cvTitle: 'CV',
    cvBody: 'Download my latest résumé here.',
    cvCta: 'Download CV',
    cvHref: '/cv/Nilay-Dilekci-CV.pdf',
  },
  footer: {
    thanks: 'Thank you',
    note: 'Looking forward to the next project.',
  },
};

export const ui = { tr, en } as const;

export function t(lang: Lang) {
  return ui[lang] ?? ui.tr;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'tr' ? 'en' : 'tr';
}

/** CV and other public file paths, respecting Astro `base`. */
export function assetPath(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
