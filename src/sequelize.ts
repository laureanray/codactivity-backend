// Database Connection
import {Sequelize} from "sequelize";
import {MYSQL_URI} from "./utils/secrets";

const sequelize = new Sequelize(MYSQL_URI || '',
    {
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

export default sequelize;

