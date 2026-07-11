export type Project = {
  id: string;
  category: 'posters' | 'posts' | 'campaigns' | 'writing';
  image: string;
  images?: string[];
  title: { tr: string; en: string };
  description: { tr: string; en: string };
};

export const projects: Project[] = [
  {
    id: 'kufolk-poster',
    category: 'posters',
    image: '/projects/kufolk-poster.png',
    title: {
      tr: 'KuFolk Tanıtım Günleri Afişi',
      en: 'KuFolk Orientation Days Poster',
    },
    description: {
      tr: 'Koç Üniversitesi Folklör Kulübü için sıcak, illüstratif tanıtım afişi.',
      en: 'A warm, illustrative poster for Koç University Folklore Club orientation.',
    },
  },
  {
    id: 'listag-poster',
    category: 'posters',
    image: '/projects/listag-poster.png',
    title: {
      tr: 'LİSTAG × Koç Araştırma Afişi',
      en: 'LİSTAG × Koç Research Poster',
    },
    description: {
      tr: '“Sağlıkta Eşitlik Herkes İçin” araştırma projesi sunum afişi.',
      en: 'Presentation poster for the “Equality in Health for Everyone” research project.',
    },
  },
  {
    id: 'nursing-week',
    category: 'posts',
    image: '/projects/nursing-week.png',
    title: {
      tr: 'Hemşirelik Haftası Kutlaması',
      en: 'Nursing Week Celebration',
    },
    description: {
      tr: 'Koç Üniversitesi Hemşirelik Kulübü için haftalık kutlama gönderisi.',
      en: 'Celebration post for Koç University Nursing Club.',
    },
  },
  {
    id: 'kufolk-announcement',
    category: 'posts',
    image: '/projects/kufolk-announcement.png',
    title: {
      tr: 'KuFolk Tanıtım Duyurusu',
      en: 'KuFolk Orientation Announcement',
    },
    description: {
      tr: 'Henry Ford çimleri stand duyurusu — güçlü tipografi ve fotoğraf.',
      en: 'Stand announcement for Henry Ford lawn — bold type and photography.',
    },
  },
  {
    id: 'first-aid-day',
    category: 'posts',
    image: '/projects/first-aid-day.png',
    title: {
      tr: 'Dünya İlk Yardım Günü',
      en: 'World First Aid Day',
    },
    description: {
      tr: 'Hemşirelik Kulübü için net, kurumsal sosyal medya görseli.',
      en: 'Clean institutional social visual for the Nursing Club.',
    },
  },
  {
    id: 'shampoo-campaign',
    category: 'campaigns',
    image: '/projects/shampoo-campaign.png',
    title: {
      tr: 'Mutadı × MAVA206 Şampuan Reklamı',
      en: 'Mutadı × MAVA206 Shampoo Ad',
    },
    description: {
      tr: 'Senaryo yazarlığı dersi: şampuan markasının akımlara uyarlanmış reklam konsepti.',
      en: 'Screenwriting course: trend-adapted shampoo brand commercial concept.',
    },
  },
  {
    id: 'tnc-campaign',
    category: 'campaigns',
    image: '/projects/tnc-campaign.png',
    title: {
      tr: 'Stanley Kampanya Stratejisi',
      en: 'Stanley Campaign Strategy',
    },
    description: {
      tr: 'TNC Group stajı kapsamında reklam ve pazarlama kampanyası çalışması.',
      en: 'Advertising and marketing campaign work during the TNC Group internship.',
    },
  },
  {
    id: 'script-cem-karaca',
    category: 'writing',
    image: '/projects/script-page-1.png',
    images: ['/projects/script-page-1.png', '/projects/script-page-2.png'],
    title: {
      tr: 'Cem Karaca — Tamirci Çırağı Uyarlaması',
      en: 'Cem Karaca — Apprentice Mechanic Adaptation',
    },
    description: {
      tr: 'MAVA206: şarkının kısa filme uyarlanmış senaryo sayfaları.',
      en: 'MAVA206: screenplay pages adapting the song into a short film.',
    },
  },
];
