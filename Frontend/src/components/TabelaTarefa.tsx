import "./TabelaTarefa.css";

export interface Tarefa {
  id: string;
  titulo: string;
  status: string;
  prioridade: string;
  dataEntrega: string;
}

interface TabelaTarefaProps {
  tasks: Tarefa[];
  onEdit?: (taskId: string) => void;
  onDelete?: (taskId: string) => void;
}



const TabelaTarefa: React.FC<TabelaTarefaProps> = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="tabela">
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Prioridade</th>
            <th>Data de Entrega</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.titulo}</td>
                <td>{task.status}</td>
                <td>{task.prioridade}</td>
                <td>{task.dataEntrega}</td>
                <td>
                  <div className="acoes">
                    <button
                      type="button"
                      className="acao-btn"
                      onClick={() => onEdit?.(task.id)}
                    >
                      ✏️
                    </button>
                    <button
                      type="button"
                      className="acao-btn"
                      onClick={() => onDelete?.(task.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: "24px" }}>
                Nenhuma tarefa cadastrada
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaTarefa;

