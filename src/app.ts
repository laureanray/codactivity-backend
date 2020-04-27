import express from 'express'
import {Sequelize} from 'sequelize';
import {MYSQL_URI} from './utils/secrets';


// Database Connection
const sequelize = new Sequelize(MYSQL_URI || '',
    {
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

sequelize
    .authenticate()
    .then(r => console.log('Success'))
    .catch(e => console.log(e))

const app = express();
app.set('port', process.env.PORT || 3000);


export default app;
