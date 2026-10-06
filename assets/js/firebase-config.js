// Zmień nazwę tego pliku na firebase-config.js i wklej konfigurację z:
// Firebase Console -> Project settings -> Your apps -> Web app -> SDK setup and configuration.
export const firebaseConfig = {
  apiKey: "AIzaSyDykM2omZ68HY7EEJjPiG16jXbPGW0bYSA",
      authDomain: "domek-52b6a.firebaseapp.com",
      databaseURL: "https://domek-52b6a-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "domek-52b6a",
      storageBucket: "domek-52b6a.firebasestorage.app",
      messagingSenderId: "641050671936",
      appId: "1:641050671936:web:47d40c3fa12f39962c98a5"
};

// true: po pierwszym poprawnym logowaniu brakujące pola wiertarki zostaną utworzone.
// false: aplikacja niczego nie inicjalizuje i oczekuje gotowej struktury w bazie.
export const AUTO_CREATE_DRILL_DATA = true;
