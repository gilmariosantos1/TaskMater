import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Tarefas = sequelize.define(
    "Tarefas",
    {
      id_tarefa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      data_criacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      data_conclusao: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "Tarefas",
      timestamps: false,
    }
  );

  Tarefas.upsertItem = async function (data) {
    const { id_usuario, id_produto, quantidade } = data;

    const item = await this.findOne({
      where: { id_usuario, id_produto },
    });

    return await this.create(data);
  };

  // LISTAR
  Tarefas.listAll = async function () {
    return await this.findAll();
  };

  // BUSCAR POR ID
  Tarefas.findById = async function (id) {
    return await this.findByPk(id);
  };

  // CRIAR (simples - depois vamos melhorar)
  Tarefas.createItem = async function (data) {
    return await this.create(data);
  };

  // UPDATE
  Tarefas.updateItem = async function (id, data) {
    const item = await this.findByPk(id);
    if (!item) return null;

    return await item.update(data);
  };

  // DELETE
  Tarefas.removeItem = async function (id) {
    const item = await this.findByPk(id);
    if (!item) return false;

    await item.destroy();
    return true;
  };

  return Tarefas;
};