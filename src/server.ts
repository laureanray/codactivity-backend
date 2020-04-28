import app from './app';
import sequelize from './sequelize'
import User from './models/user.model';
const server = app.listen(app.get("port"), () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('DB Connected');
        })
        .catch((e: any) => console.log(e))

    sequelize.sync();

    User.create({
        firstName: 'Laurean Ray',
        lastName: 'Bahala',
        email: 'test@example.com',
        password: 'P@$$w0rd',
        username: 'username'
    }).then((r) => {
        console.log(r)
    }).catch(error => {
        console.log(error);
    });

    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
})



export default server;
