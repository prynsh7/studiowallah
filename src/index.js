import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { FirestoreProvider } from 'react-firestore';

const config = {
  apiKey: 'AIzaSyAu_vONu9fTQR-Ea_qLUV1w37tnh0WEKVA',
  projectId: 'studio-wallah',
};

const container = document.getElementById('root');
const root = createRoot(container);

firebase.initializeApp(config);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <FirestoreProvider firebase={firebase}>
        <App />
      </FirestoreProvider>,
    {/* </Provider> */}
  </React.StrictMode>
);
