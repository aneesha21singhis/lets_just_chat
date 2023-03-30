function addUser(){
    username = document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="Kwitter_room.html";
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7a4-BdfawM_RfWM-W7lppLDJMamOlVPw",
    authDomain: "lets-chat-project-36866.firebaseapp.com",
    projectId: "lets-chat-project-36866",
    storageBucket: "lets-chat-project-36866.appspot.com",
    messagingSenderId: "854008288285",
    appId: "1:854008288285:web:df46e892ea2ee621ab22f4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);