import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronDown } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import TabelaTarefa, { Tarefa } from '../components/TabelaTarefa';
import './Home.css';

const tasks: Tarefa[] = [
  {
    id: '1',
    titulo: 'Exemplo',
    status: 'Em andamento',
    prioridade: 'Alta',
    dataEntrega: '25/07/2026',
  },
  {
    id: '2',
    titulo: 'Revisar código',
    status: 'Pendente',
    prioridade: 'Média',
    dataEntrega: '29/07/2026',
  },
  {
    id: '3',
    titulo: 'Enviar relatório',
    status: 'Concluída',
    prioridade: 'Baixa',
    dataEntrega: '20/07/2026',
  },
  {
    id: '4',
    titulo: 'Planejar sprint',
    status: 'Em revisão',
    prioridade: 'Alta',
    dataEntrega: '30/07/2026',
  },
];

const Home: React.FC = () => {
  const handleEdit = (taskId: string) => {
    console.log('Editar tarefa', taskId);
  };

  const handleDelete = (taskId: string) => {
    console.log('Excluir tarefa', taskId);
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
