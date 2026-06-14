# Portfolio Studenta

Aplikacja mobilna napisana w React Native (Expo). Pokazuje moje portfolio: profil,
listę projektów, szczegóły wybranego projektu oraz kontakt. Projekt zaliczeniowy
z przedmiotu Programowanie mobilne na iOS.

## Funkcjonalności

- Ekran profilu ze zdjęciem, opisem i listą umiejętności
- Edycja danych profilu (imię, opis, umiejętności)
- Lista projektów z sortowaniem po roku
- Ekran ze szczegółami pojedynczego projektu
- Dodawanie nowego projektu przez formularz z walidacją pól
- Usuwanie projektów (z potwierdzeniem)
- Ekran kontaktowy z e-mailem, GitHubem i LinkedIn oraz otwieraniem linków
- Nawigacja zakładkami (Tabs) i przejścia na szczegóły (Stack)
- Zapis danych lokalnie (AsyncStorage), dane zostają po zamknięciu aplikacji

## Technologie

- React Native + Expo (SDK 54)
- Expo Router
- TypeScript
- AsyncStorage
- Context API

## Jak uruchomić

Do uruchomienia potrzebny jest Node.js (wersja 22 lub nowsza) oraz telefon
z zainstalowaną aplikacją Expo Go.

1. Zainstaluj zależności:

```
npm install
```

2. Uruchom projekt:

```
npx expo start
```

3. Zeskanuj kod QR z terminala. Na Androidzie robisz to z poziomu Expo Go,
   na iPhonie zwykłym aparatem.

Telefon i komputer muszą być w tej samej sieci Wi-Fi.

Aplikację można też uruchomić na emulatorze Androida (klawisz "a" w terminalu)
albo w przeglądarce (`npx expo start --web`).

## Struktura projektu

- `app/` ekrany i nawigacja (Expo Router)
- `app/projects/[id].tsx` szczegóły projektu
- `app/projects/new.tsx` formularz dodawania projektu
- `context/` globalny stan (profil i projekty) z zapisem do AsyncStorage
- `utils/storage.ts` funkcje do zapisu i odczytu danych
- `data/projects.ts` startowa lista projektów
- `theme/theme.ts` kolory i wspólne style

## Autor

Łukasz Janicki
