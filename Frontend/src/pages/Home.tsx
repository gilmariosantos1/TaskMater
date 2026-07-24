import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronDown } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import TabelaTarefa, { Tarefa } from '../components/TabelaTarefa';
import './Home.css';
import initialTasks from '../Services/initialTasks';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Tarefa[]>(initialTasks);

  const handleEdit = (taskId: string) => {
    console.log('Editar tarefa', taskId);
    // Implementar lógica de edição
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    console.log('Tarefa deletada:', taskId);
  };

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
        <p className="home-description">Gerenciador de Tarefas</p>

        <IonHeader collapse="condense">
        </IonHeader>
        <ExploreContainer />

        <div className="task-button-container">
          <IonButton className="task-button-new" href="/nova-tarefa">
            Nova tarefa
            <IonIcon icon={chevronDown} slot="end" />
          </IonButton>
        </div>

        <TabelaTarefa tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />

      </IonContent>

    </IonPage>
  );
};

export default Home;
