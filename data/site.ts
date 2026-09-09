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
  images: { hero: '/images/aline-retrato.webp', about: '/images/aline-clinica.webp', beauty: '/images/aline-cuidado.webp' },
  procedures: [] as Procedure[], office: [] as { src: string; alt: string }[], testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    {image:'/images/resultado-01.webp',label:'Harmonia em cada traço',alt:'Registro comparativo de harmonização facial fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:658/1284,comparisonRatio:626/1281},
    {image:'/images/resultado-02.webp',label:'Beleza em novos ângulos',alt:'Registro de resultado com imagem de referência em detalhe, fornecido para o site da Dra. Aline Mello',orientation:'single',beforeShare:.5,comparisonRatio:1},
    {image:'/images/resultado-03.webp',label:'Contornos e expressão',alt:'Registro comparativo de perfil fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:641/1284,comparisonRatio:643/1556},
    {image:'/images/resultado-04.webp',label:'Um olhar para o perfil',alt:'Registro comparativo de perfil e contorno facial fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:605/1241,comparisonRatio:636/1600},
    {image:'/images/resultado-05.webp',label:'Identidade em evidência',alt:'Registro facial com imagens de referência, fornecido para o site da Dra. Aline Mello',orientation:'single',beforeShare:.5,comparisonRatio:1},
    {image:'/images/resultado-06.webp',label:'A beleza de ser você',alt:'Registro facial com imagem de referência em detalhe, fornecido para o site da Dra. Aline Mello',orientation:'single',beforeShare:.5,comparisonRatio:1},
    {image:'/images/resultado-07.webp',label:'Sua expressão, valorizada',alt:'Registro comparativo frontal fornecido para o site da Dra. Aline Mello',orientation:'horizontal',beforeShare:609/1181,comparisonRatio:572/1600},
  ]},
  seo: { title: 'Dra. Aline Mello | Harmonização Facial no Rio de Janeiro', description: 'Rejuvenescimento com sofisticação e naturalidade. Conheça a Dra. Aline Mello, biomédica esteta, com atendimentos em Copacabana e Vila da Penha.', url: '' },
};
export const appointmentUrl = site.whatsappUrl || (site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Olá, Dra. Aline! Gostaria de agendar uma avaliação de harmonização facial.')}` : site.instagram);
