import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getDatabase, ref, onValue, set, get, update, onDisconnect, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
import { firebaseConfig, AUTO_CREATE_DRILL_DATA } from "./firebase-config.js";
import { DRILL } from "./config.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const login = (email,password) => signInWithEmailAndPassword(auth,email,password);
export const logout = () => signOut(auth);
export const watchAuth = callback => onAuthStateChanged(auth,callback);
export const watch = (path,callback) => onValue(ref(db,path),s => callback(s.val()));
export const write = (path,value) => set(ref(db,path),value);
export const toggle = async path => { const s=await get(ref(db,path)); return set(ref(db,path),s.val() !== true); };

function flattenMissing(defaults,current,prefix="",out={}) {
  for (const [key,value] of Object.entries(defaults)) {
    const path=prefix ? `${prefix}/${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) flattenMissing(value,current?.[key],path,out);
    else if (current?.[key] === undefined || current?.[key] === null) out[path]=value;
  }
  return out;
}

export async function ensureDrillData() {
  if (!AUTO_CREATE_DRILL_DATA) return;
  const rootRef=ref(db,DRILL.root); const snapshot=await get(rootRef);
  const missing=flattenMissing(DRILL.defaults,snapshot.val() || {});
  if (Object.keys(missing).length) await update(rootRef,missing); // nie nadpisuje istniejących wartości
}

export async function pulse(path,duration=DRILL.pulseMs) {
  // Impuls UI. Sterownik powinien sam zerować i potwierdzać komendy krytyczne.
  await write(path,true);
  window.setTimeout(() => write(path,false).catch(console.error),duration);
}
