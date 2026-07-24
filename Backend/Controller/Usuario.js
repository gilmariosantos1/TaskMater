// Backend/Controller/Usuario.js
const models = require('../models/index.js');
const crypto = require('crypto');

const cadastrarUsuario = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }
        const usuarioExistente = await models.Usuario.findOne({
            where: { email }
        });

        if (usuarioExistente) {
            return res.status(400).json({ error: "E-mail já cadastrado" });
        }

        const senhaHash = crypto.createHash('sha256').update(senha).digest('hex');

        // Alterado de models.Pessoa para models.Usuario
        const novoUsuario = await models.Usuario.create({
            nome,
            email,
            senha: senhaHash
        });

        const { senha: _, ...userWithoutPassword } = novoUsuario.toJSON();

        return res.status(201).json({
            message: "Usuário cadastrado com sucesso",
            user: userWithoutPassword
        });
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        return res.status(500).json({ error: "Erro interno ao cadastrar usuário" });
    }
};

module.exports = {
    cadastrarUsuario
};