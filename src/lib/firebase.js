import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4tJDRu4WBzNKhzI69GHtpy638QUCXB2A",
  authDomain: "video-test-99eed.firebaseapp.com",
  projectId: "video-test-99eed",
  storageBucket: "video-test-99eed.appspot.com",
  messagingSenderId: "719370176333",
  appId: "1:719370176333:web:b8605629f2b716bf869904"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };