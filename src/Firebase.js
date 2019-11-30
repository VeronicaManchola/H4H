import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDY95PSBPO4iSox1ZeXiMs-SKeyWMHGH0g",
    authDomain: "h4humanity-cefb3.firebaseapp.com",
    databaseURL: "https://h4humanity-cefb3.firebaseio.com",
    projectId: "h4humanity-cefb3",
    storageBucket: "h4humanity-cefb3.appspot.com",
    messagingSenderId: "114930822865",
    appId: "1:114930822865:web:8c758798bd0ca2e9619ff0"
};

firebase.initializeApp(config);

export default firebase;