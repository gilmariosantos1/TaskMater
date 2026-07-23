import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import Splash from '../components/Splash';
import './Home.css';

const Home: React.FC = () => {
  const [carregando, setCarregando] = useState<boolean>(true);

  if (carregando) {
    return (
      <IonPage>
        <IonContent fullscreen>
          <Splash aoConcluir={() => setCarregando(false)} />
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TaskMaster</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h2>Conteúdo Principal</h2>
      </IonContent>
    </IonPage>
  );
};

export default Home;
