import { Request, Response } from "express";
import createRealEstateService from "../services/realEstate/createRealEstate.services";
import listRealEstateService from "../services/realEstate/retrieveRealEstates.services";
import { ICreateRealEstate,IRealEstate,IRealEstateReturn } from "../interfaces/realEstate.interfaces";
import { RealEstate } from "../entities";

const createRealEstateControllers = async (req: Request, res: Response) => {
  const estateData:ICreateRealEstate = req.body;

  const newEstate: RealEstate = await createRealEstateService(estateData);

  return res.status(201).json(newEstate);
};
const retrieveRealEstateControllers = async (req: Request, res: Response) => {
  const list = await listRealEstateService()
  
  return res.status(200).json(list)
};


export {createRealEstateControllers,retrieveRealEstateControllers}