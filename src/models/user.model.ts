import sequelize from "../sequelize";
import { Sequelize, Model, DataTypes } from 'sequelize';

export default class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public username!: string;
    public firstName!: string;
    public lastName!: string;
    public email!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
}, { sequelize: sequelize, modelName: 'user' });


