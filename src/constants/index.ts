import { NavItem, Service, Testimonial } from '../types';

export const WHATSAPP_URL = "https://wa.me/5571996980948"; // Replace with your actual WhatsApp number

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Contato", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Marketing Digital",
    description: "Estratégias personalizadas para aumentar sua presença online e engajamento com seu público-alvo.",
    icon: "trending-up"
  },
  {
    id: 2,
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web modernas, responsivas e otimizadas para conversão.",
    icon: "code"
  },
  {
    id: 3,
    title: "Gestão de Redes Sociais",
    description: "Administração profissional de suas redes sociais para maximizar alcance e engajamento.",
    icon: "share-2"
  },
  {
    id: 4,
    title: "Consultoria Estratégica",
    description: "Análise e planejamento estratégico para impulsionar seu negócio para o próximo nível.",
    icon: "lightbulb"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "CEO",
    company: "TechSolutions",
    quote: "A Tractativa transformou completamente nossa presença digital. Resultados extraordinários em apenas 3 meses!",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 2,
    name: "Ana Ferreira",
    role: "Diretora de Marketing",
    company: "Inovação Inc",
    quote: "Profissionalismo e criatividade em cada projeto. A equipe vai além do esperado para entregar excelência.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 3,
    name: "Ricardo Gomes",
    role: "Proprietário",
    company: "Café Aroma",
    quote: "As estratégias de marketing digital implementadas pela Tractativa aumentaram nossas vendas em 70%.",
    image: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=500"
  }
];