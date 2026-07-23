import express from "express";
import mysql from "mysql2";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Usuario"
});

const port = 3000;

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err.message);
    process.exit(1);
  }
  console.log("Conectado ao MySQL com sucesso");
});

app.get("/produtos", (req, res) => {
  db.query(
    "SELECT id, nome, preco AS preco, estoque AS estoque FROM produtos",
    (err, results) => {
      if (err) {
        console.error("Erro ao listar produtos:", err);
        return res.status(500).json({ message: "Erro ao listar produtos" });
      }
      res.json(results);
    }
  );
});

app.post("/tarefa", (req, res) => {
  const { nome, descricao, status } = req.body;

  db.query(
    "INSERT INTO tarefas (nome, descricao, status) VALUES (?, ?, ?)",
    [nome, descricao, status],
    (err, result) => {
      if (err) {
        console.error("Erro ao adicionar tarefa:", err);
        return res.status(500).json({ message: "Erro ao adicionar tarefa" });
      }

      const insertedId = result.insertId;
      db.query(
        "SELECT * FROM tarefas WHERE id = ?",
        [insertedId],
        (selectErr, rows) => {
          if (selectErr) {
            console.error("Erro ao buscar tarefa criada:", selectErr);
            return res.status(500).json({ message: "Erro ao buscar tarefa criada" });
          }

          res.status(201).json(rows[0] || { id: insertedId, nome, descricao, status });
        }
      );
    }
  );
});

app.delete("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);

  db.query("DELETE FROM tarefas WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Erro ao remover tarefa:", err);
      return res.status(500).json({ message: "Erro ao remover tarefa" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    res.json({ message: "Tarefa removida" });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});