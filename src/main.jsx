import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyA1Totc6jDPmFKy5eF1YpH1SoPtyfrEFOc",
    authDomain: "entrega-react-twof.firebaseapp.com",
    projectId: "entrega-react-twof",
    storageBucket: "entrega-react-twof.appspot.com",
    messagingSenderId: "558701223850",
    appId: "1:558701223850:web:1cb658f8d6756be67695d3",
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
