import { Request, Response } from "express";
import createUserServices from "../services/users/createUsers.services";
import listUsersService from "../services/users/retrieveUsers.services";
import deleteUserService from "../services/users/deleteUsers.services";
import updateUserService from "../services/users/updateUsers.services"
import { ICreateUser, IListUsers, IReturnCreateUser } from "../interfaces/user.interfaces";

const createUserController = async (req: Request, res: Response) => {
  const userData: ICreateUser = req.body;

  const newUser = await createUserServices(userData);

  return res.status(201).json(newUser);
};

const retrieveUserController = async (req: Request, res: Response) => {
  const usersList: IListUsers = await listUsersService();

  return res.json(usersList);
};

const updateUserController = async (req: Request, res: Response) => {

    const idUser = parseInt(req.params.id)

    const updatedUser = await updateUserService(req.body, idUser)

    return res.json(updatedUser)
}


const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(parseInt(req.params.id));

  return res.status(204).send();
};


export { createUserController, retrieveUserController, deleteUserController, updateUserController };
