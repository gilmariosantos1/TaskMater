import models from '../models/index.js';
import crypto from 'crypto';

export const cadastrarUsuario = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        const usuarioExistente = await models.Pessoa.findOne({
            where: {
                [models.Sequelize.Op.or]: [{ email }]
            }
        });

        if (usuarioExistente) {
            return res.status(400).json({ error: "E-mail já cadastrado" });
        }

        const senhaHash = crypto.createHash('sha256').update(senha).digest('hex');

        
        const novoUsuario = await models.Pessoa.create({
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