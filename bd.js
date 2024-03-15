const Sequelize = require('sequelize')

const sequelize = new Sequelize("agendamento_crud", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

const agendamentos = sequelize.define("agendamentos", {
    name: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATEONLY
    },
    phone: {
        type: Sequelize.STRING
    },
    observation: {
        type: Sequelize.TEXT
    }
})

// agendamentos.sync({ force: true })
module.exports = agendamentos;