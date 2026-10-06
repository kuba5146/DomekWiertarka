# Sterowanie domem i garażem

Gotowa statyczna strona dla GitHub Pages + Firebase Authentication + Realtime Database.

## 1. Konfiguracja plików
1. Skopiuj `assets/js/firebase-config.example.js` jako `assets/js/firebase-config.js`.
2. Wklej konfigurację Web App z Firebase Console.
3. W `database.rules.json` zamień `TWOJ_EMAIL@DOMENA.PL` na konto operatora.
4. Zakres suwaka zmienisz w `assets/js/config.js`, w obiekcie `DRILL.scale`.
5. Ścieżki istniejących przekaźników są w `ROOMS`. Nie zmieniaj ich, jeśli korzystają z nich sterowniki.

## 2. Firebase
1. Utwórz projekt i zarejestruj Web App.
2. Włącz Authentication -> Sign-in method -> Email/Password.
3. Authentication -> Users: dodaj użytkownika.
4. Utwórz Realtime Database.
5. Wklej zawartość `database.rules.json` do Realtime Database -> Rules i opublikuj.
6. Authentication -> Settings -> Authorized domains: dodaj `TWOJ_LOGIN.github.io`.

## 3. Automatyczne utworzenie danych wiertarki
`AUTO_CREATE_DRILL_DATA = true` powoduje, że po pierwszym poprawnym logowaniu aplikacja odczyta `garaz/wiertarka_stolowa` i dopisze tylko brakujące pola. Nie nadpisze istniejących wartości. Operacja powiedzie się wyłącznie, gdy reguły bazy pozwalają zalogowanemu użytkownikowi pisać.

Domyślnie `status/online=false`. To sterownik wiertarki powinien ustawiać status online, running i lastSeen. Panel nie udaje, że fizyczne urządzenie jest podłączone.

## 4. Test lokalny
Nie otwieraj `index.html` jako `file://`. W katalogu projektu uruchom:

```bash
python -m http.server 8080
```

Następnie otwórz `http://localhost:8080`. Dodaj `localhost` do Authorized domains, jeżeli nie ma go na liście.

## 5. GitHub Pages
1. Utwórz repozytorium i skopiuj do niego wszystkie pliki, także `.github/workflows/pages.yml` oraz gotowy `firebase-config.js`.
2. W terminalu:

```bash
git init
git add .
git commit -m "Pierwsza wersja panelu"
git branch -M main
git remote add origin https://github.com/TWOJ_LOGIN/TWOJE_REPO.git
git push -u origin main
```

3. Repozytorium -> Settings -> Pages -> Source: GitHub Actions.
4. Po wykonaniu workflow strona będzie pod adresem `https://TWOJ_LOGIN.github.io/TWOJE_REPO/`.

## 6. Ważne
- Firebase `apiKey` w aplikacji webowej nie jest hasłem. Bezpieczeństwo zapewniają Authentication i Database Rules.
- Nigdy nie dodawaj do repozytorium hasła użytkownika ani JSON service account.
- STOP awaryjny musi być wykonany sprzętowo. Strona WWW nie może być elementem obwodu bezpieczeństwa.
- Impuls 250 ms jest generowany w przeglądarce. Dla niezawodnych komend sterownik powinien potwierdzać odebranie i sam zerować flagę.
