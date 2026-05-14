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
      'Aplikacja iOS do monitorowania codziennych nawykow ze sledzeniem serii (streak) oraz analityka postepow.',
    technologies: ['Swift', 'SwiftUI', 'iOS'],
    year: 2026,
  },
  {
    id: 'finanse-domowe-android',
    name: 'Finanse Domowe Android',
    description:
      'Aplikacja na Androida do zarzadzania domowym budzetem, kontroli wydatkow i planowania oszczednosci.',
    technologies: ['Kotlin', 'Android', 'Jetpack Compose'],
    year: 2026,
  },
  {
    id: 'fakeolx',
    name: 'fakeOLX',
    description:
      'Klon serwisu ogloszeniowego OLX - przegladanie, dodawanie i wyszukiwanie ogloszen.',
    technologies: ['Kotlin', 'Android'],
    year: 2026,
  },
  {
    id: 'task-app',
    name: 'Task App',
    description:
      'Aplikacja do zarzadzania zadaniami i organizacji pracy z podzialem na priorytety.',
    technologies: ['Java'],
    year: 2026,
  },
  {
    id: 'contact-manager',
    name: 'Contact Manager',
    description:
      'Menedzer kontaktow umozliwiajacy dodawanie, edycje i szybkie wyszukiwanie wpisow.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    year: 2026,
  },
  {
    id: 'foodpanda-analytics-system',
    name: 'Foodpanda Analytics System',
    description:
      'System analityczny do przetwarzania i wizualizacji danych zamowien z platformy dostaw.',
    technologies: ['JavaScript', 'Node.js'],
    year: 2025,
  },
];
