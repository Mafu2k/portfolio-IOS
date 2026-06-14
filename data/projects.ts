export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  year: number;
};

export const projects: Project[] = [
  {
    id: 'streakify-ios',
    name: 'Streakify iOS',
    description:
      'Aplikacja iOS do monitorowania codziennych nawyków ze śledzeniem serii (streak) oraz analityką postępów.',
    technologies: ['Swift', 'SwiftUI', 'iOS'],
    year: 2026,
  },
  {
    id: 'finanse-domowe-android',
    name: 'Finanse Domowe Android',
    description:
      'Aplikacja na Androida do zarządzania domowym budżetem, kontroli wydatków i planowania oszczędności.',
    technologies: ['Kotlin', 'Android', 'Jetpack Compose'],
    year: 2026,
  },
  {
    id: 'fakeolx',
    name: 'fakeOLX',
    description:
      'Klon serwisu ogłoszeniowego OLX - przeglądanie, dodawanie i wyszukiwanie ogłoszeń.',
    technologies: ['Kotlin', 'Android'],
    year: 2026,
  },
  {
    id: 'task-app',
    name: 'Task App',
    description:
      'Aplikacja do zarządzania zadaniami i organizacji pracy z podziałem na priorytety.',
    technologies: ['Java'],
    year: 2026,
  },
  {
    id: 'contact-manager',
    name: 'Contact Manager',
    description:
      'Menedżer kontaktów umożliwiający dodawanie, edycję i szybkie wyszukiwanie wpisów.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    year: 2026,
  },
  {
    id: 'foodpanda-analytics-system',
    name: 'Foodpanda Analytics System',
    description:
      'System analityczny do przetwarzania i wizualizacji danych zamówień z platformy dostaw.',
    technologies: ['JavaScript', 'Node.js'],
    year: 2025,
  },
];
