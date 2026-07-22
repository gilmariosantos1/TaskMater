const express = require('express');
const router = express.Router();

router.post('/tarefas', (req, res) => {
    try{
        const [result]= await db.query('insert into tarefas (titulo, descricao, status) values (?, ?, ?)', [titulo, descricao,status]);
        res.status(201).json({id: result.insertId, titulo, descricao, status});
} catch (error) {
    res.status(500).json({error: 'Erro ao criar a tarefa'});
}
});

router.get('/tarefas', async (req, res) => {
    try{
        const [rows] = await db.query('select * from tarefas');
        res.json(rows);
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar tarefas'});
    }
});

router.get('/tarefas/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const [rows] = await db.query('select * from tarefas where id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({error: 'Tarefa não encontrada'});
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar tarefa'});
    }
});

router.put('/tarefas/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, status } = req.body;
    try{
        const [result] = await db.query('update tarefas set titulo = ?, descricao = ?, status = ? where id = ?', [titulo, descricao, status, id]);
        if (result.affectedRows === 0) {
            res.status(404).json({error: 'Tarefa não encontrada'});
        } else {
            res.json({id, titulo, descricao, status});
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao atualizar tarefa'});
    }
});

router.delete('/tarefas/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const [result] = await db.query('delete from tarefas where id = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).json({error: 'Tarefa não encontrada'});
        } else {
            res.json({message: 'Tarefa excluída com sucesso'});
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao excluir tarefa'});
    }
});

module.exports = routerTarefas;
