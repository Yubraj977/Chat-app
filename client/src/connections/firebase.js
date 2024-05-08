
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAoMC9V88_gSOk0NxfIUHhFAKSiiYUpfBY",
  authDomain: "chat-app-b8a64.firebaseapp.com",
  projectId: "chat-app-b8a64",
  storageBucket: "chat-app-b8a64.appspot.com",
  messagingSenderId: "50719859751",
  appId: "1:50719859751:web:52ed75b3cd2f30107f1a02",
  measurementId: "G-0Y990MD54M"
};


const app = initializeApp(firebaseConfig);
export default app