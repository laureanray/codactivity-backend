import express, {NextFunction, Request, Response} from 'express';
import sequelize from "../../sequelize";
export const login = (req: Request, res: Response, next: NextFunction) => {
    console.log('login');
}
