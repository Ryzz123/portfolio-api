import {Sequelize} from "sequelize"

const db = new Sequelize('bgkfawpftrxsr23kjubs','u9ykjocywsprtkhb','nsTBURicV1usQu1HShU0', {
    host: "bgkfawpftrxsr23kjubs-mysql.services.clever-cloud.com",
    port: 3306,
    dialect: 'mysql'
})

export default db;