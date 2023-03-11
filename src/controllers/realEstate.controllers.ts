import { Request, Response } from "express";
import createRealEstateService from "../services/realEstate/createRealEstate.services";
import listRealEstateService from "../services/realEstate/retrieveRealEstates.services";
import { IRealEstate,IRealEstateReturn,IRealEstateList } from "../interfaces/realEstate.interfaces";

const createRealEstateControllers = async (req: Request, res: Response) => {
  const estateData:IRealEstate = req.body;

  const newEstate:IRealEstateReturn = await createRealEstateService(estateData);

  return res.status(201).json(newEstate);
};
const retrieveRealEstateControllers = async (req: Request, res: Response) => {
  const retrieveCategories:IRealEstateList = await listRealEstateService();

  return res.json(retrieveCategories);
};


export {createRealEstateControllers,retrieveRealEstateControllers}