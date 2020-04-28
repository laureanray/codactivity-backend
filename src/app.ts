import express from 'express'
import * as user from './routes/v1/user';
const app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res, next) => {
    console.log('test');
})


app.get('/user', user.login)

export default app;
