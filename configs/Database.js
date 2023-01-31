import {Sequelize} from "sequelize"

const db = new Sequelize('freedb_portfolio_db','freedb_userryzz','!SPdVy5DhgXD2qH', {
    host: "sql.freedb.tech",
    port: 3306,
    dialect: 'mysql'
})

export default db;