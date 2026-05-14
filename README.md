# portfolio-IOS

Aplikacja portfolio w React Native (Expo Router) z nawigacja:
- Tabs: Profil, Projekty, Kontakt
- Stack zagniezdzony w zakladce Projekty (szczegoly projektu po `id`)

## Uruchomienie

```sh
npm install
npx expo start
```

## Struktura

- `app/` - ekrany i layouty Expo Router
- `app/projects/[id].tsx` - szczegoly projektu
- `data/projects.ts` - dane projektow
