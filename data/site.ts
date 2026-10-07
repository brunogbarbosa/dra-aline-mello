export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export const site = {
  name: 'Aline Mello', monogram: 'AM',
  headline: 'Rejuvenescimento com sofisticação e naturalidade.',
  cro: 'Biomédica Esteta · CRBM 03594',
  bio: 'Aline Mello é biomédica esteta, com atuação em harmonização facial. Seu olhar une sofisticação e naturalidade para valorizar os traços e a expressão de cada pessoa.',
  education: [] as string[], specialties: ['Harmonização facial'],
  phone: '+55 (21) 99993-3064', whatsapp: '5521999933064', whatsappUrl: '',
  address: 'Rua Santa Clara, 50 · Copacabana · Rio de Janeiro',
  locations: 'Copacabana & Vila da Penha · Rio de Janeiro', professionalPhilosophy: '',
  instagram: 'https://www.instagram.com/dra._alinemello/', instagramHandle: '@dra._alinemello',
  philosophy: ['NATURALIDADE', 'ANTES DE', 'EXCESSOS.'],
  colors: { paper: '#faf7f0', ink: '#30251f', taupe: '#735336', champagne: '#d9c5a6', dark: '#30251f' },
  images: { hero: '/images/aline-hero-estudio.webp', essence: '/images/aline-essencia-estudio.webp', about: '/images/aline-sobre-estudio.webp', beauty: '/images/aline-experiencia-detalhe.webp' },
  procedures: [] as Procedure[], office: [] as { src: string; alt: string }[], testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    {image:'/images/resultado-atual-01.webp',label:'Harmonia em cada traço',alt:'Registro comparativo frontal fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:561/1122,comparisonRatio:561/1402},
    {image:'/images/resultado-atual-02.webp',label:'Beleza em novos ângulos',alt:'Registro comparativo em ângulo de três quartos fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:610/1122,comparisonRatio:512/1402},
    {image:'/images/resultado-atual-03.webp',label:'Contornos e expressão',alt:'Registro comparativo de perfil fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:561/1122,comparisonRatio:561/1402},
    {image:'/images/resultado-atual-04.webp',label:'Um olhar para o perfil',alt:'Registro comparativo de perfil e contorno facial fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:587/1122,comparisonRatio:535/1402},
    {image:'/images/resultado-atual-05.webp',label:'Identidade em evidência',alt:'Registro comparativo frontal fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:561/1122,comparisonRatio:561/1402},
    {image:'/images/resultado-atual-06.webp',label:'A beleza de ser você',alt:'Registro comparativo de perfil fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:561/1122,comparisonRatio:561/1402},
  ]},
  seo: { title: 'Dra. Aline Mello | Harmonização Facial no Rio de Janeiro', description: 'Rejuvenescimento com sofisticação e naturalidade. Conheça a Dra. Aline Mello, biomédica esteta, com atendimentos em Copacabana e Vila da Penha.', url: '' },
};
export const appointmentUrl = site.whatsappUrl || (site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Olá, Dra. Aline! Gostaria de agendar uma avaliação de harmonização facial.')}` : site.instagram);
