import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronDown } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="home-toolbar">
          <IonTitle className="home-title">TaskMaster</IonTitle>
          <div className="home-actions" slot="end">
            <IonButton href="/login">Login</IonButton>
            <IonButton href="/cadastro">Cadastro</IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p className="home-description">
          Gerenciador de Tarefas
        </p>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TaskMaster</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <div className="task-button-container">
          <IonButton className="task-button-new" href="/nova-tarefa">
            Nova tarefa
            <IonIcon icon={chevronDown} slot="end" />
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
