import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import './EditTask.css';


interface TaskData {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: string;
  status: string;
}

const AlterarTarefas: React.FC = () => {

  const [task, setTask] = useState<TaskData>({
    id: '#001',
    title: '',
    description: '',
    assignee: '',
    priority: 'Média',
    status: 'Em Andamento'
  });


  const handleSave = () => {
    console.log('Dados salvos:', task);

  };

  const handleDelete = () => {
    console.log('Excluir tarefa ID:', task.id);

  };

  const handleCancel = () => {
    console.log('Ação cancelada');

  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Alterar Tarefas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding edit-task-content">
        <div className="task-container">
          
        
          <div className="task-header">
            <h1 className="task-title">Alterar Tarefas</h1>
            <span className="task-id">{task.id}</span>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="task-form">
            
            
            <div className="field-group">
              <label htmlFor="title">Título</label>
              <input
                id="title"
                type="text"
                className="custom-input"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
              />
            </div>

            
            <div className="field-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                rows={4}
                className="custom-textarea"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
              />
            </div>

    
            <div className="field-group">
              <label htmlFor="assignee">Responsável</label>
              <input
                id="assignee"
                type="text"
                className="custom-input"
                value={task.assignee}
                onChange={(e) => setTask({ ...task, assignee: e.target.value })}
              />
            </div>

        
            <IonGrid className="ion-no-padding grid-selects">
              <IonRow>
                <IonCol size="12" sizeSm="6">
                  <IonItem lines="none" className="custom-select-item">
                    <IonLabel position="stacked">Prioridade</IonLabel>
                    <IonSelect
                      value={task.priority}
                      onIonChange={(e) => setTask({ ...task, priority: e.detail.value })}
                    >
                      <IonSelectOption value="Baixa">Baixa</IonSelectOption>
                      <IonSelectOption value="Média">Média</IonSelectOption>
                      <IonSelectOption value="Alta">Alta</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>

                <IonCol size="12" sizeSm="6">
                  <IonItem lines="none" className="custom-select-item">
                    <IonLabel position="stacked">Status</IonLabel>
                    <IonSelect
                      value={task.status}
                      onIonChange={(e) => setTask({ ...task, status: e.detail.value })}
                    >
                      <IonSelectOption value="Pendente">Pendente</IonSelectOption>
                      <IonSelectOption value="Em Andamento">Em Andamento</IonSelectOption>
                      <IonSelectOption value="Concluído">Concluído</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>

        
            <div className="button-bar">
              <button 
                type="button" 
                className="custom-btn btn-outline" 
                onClick={handleDelete}
              >
                Excluir tarefa
              </button>

              <div className="right-action-buttons">
                <button 
                  type="button" 
                  className="custom-btn btn-outline" 
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
                <button 
                  type="button" 
                  className="custom-btn btn-outline" 
                  onClick={handleSave}
                >
                  Salvar Alterações
                </button>
              </div>
            </div>

          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AlterarTarefas;