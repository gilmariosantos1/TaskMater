const Usuarios = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        "Usuarios",
        {
            id_usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            senha: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        {
            tableName: "usuarios",
            timestamps: false,
        }
    );

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Tarefas, {
            foreignKey: "id_usuario",
            as: "tarefas",
        });
    };

    return Usuario;
};

export default Usuarios;