// Zmień nazwę tego pliku na firebase-config.js i wklej konfigurację z:
// Firebase Console -> Project settings -> Your apps -> Web app -> SDK setup and configuration.
export const firebaseConfig = {
  apiKey: "WSTAW_API_KEY",
  authDomain: "TWOJ-PROJEKT.firebaseapp.com",
  databaseURL: "https://TWOJ-PROJEKT-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "TWOJ-PROJEKT",
  storageBucket: "TWOJ-PROJEKT.appspot.com",
  messagingSenderId: "WSTAW_ID",
  appId: "WSTAW_APP_ID"
};

// true: po pierwszym poprawnym logowaniu brakujące pola wiertarki zostaną utworzone.
// false: aplikacja niczego nie inicjalizuje i oczekuje gotowej struktury w bazie.
export const AUTO_CREATE_DRILL_DATA = true;
