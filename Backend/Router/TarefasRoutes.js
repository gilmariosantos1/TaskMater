const express = require('express');
const router = express.Router();
// aqui eu vou Importar o caminho para o banco de dados no futuro, mas por enquanto vou deixar comentado
// Exemplo: const db = require('../caminho/para/seu/banco');

router.post('/tarefas', async (req, res) => {
    const { titulo, descricao, status } = req.body;

    try {
        const [result] = await db.query('insert into tarefas (titulo, descricao, status) values (?, ?, ?)', [titulo, descricao, status]);
        res.status(201).json({ id_tarefas: result.insertId, titulo, descricao, status });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a tarefa' });
    }
});

router.get('/tarefas', async (req, res) => {
    try {
        const [rows] = await db.query('select * from tarefas');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
});

router.get('/tarefas/:id_tarefas', async (req, res) => {
    const { id_tarefas } = req.params;
    
    try {
        const [rows] = await db.query('select * from tarefas where id_tarefas = ?', [id_tarefas]);
        
        if (rows.length === 0) {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefa' });
    }
});

router.put('/tarefas/:id_tarefas', async (req, res) => {
    const { id_tarefas } = req.params;
    const { titulo, descricao, status } = req.body;
    
    try {
        const [result] = await db.query('update tarefas set titulo = ?, descricao = ?, status = ? where id_tarefas = ?', [titulo, descricao, status, id_tarefas]);
        
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        } else {
            res.json({ id_tarefas, titulo, descricao, status });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
});

router.delete('/tarefas/:id_tarefas', async (req, res) => {
    const { id_tarefas } = req.params;
    
    try {
        const [result] = await db.query('delete from tarefas where id_tarefas = ?', [id_tarefas]);
        
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        } else {
            res.json({ message: 'Tarefa excluída com sucesso' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir tarefa' });
    }
});

module.exports = router;