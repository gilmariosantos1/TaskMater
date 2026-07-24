import { Tarefa } from './components/TabelaTarefa';

const initialTasks: Tarefa[] = [
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

export default initialTasks;