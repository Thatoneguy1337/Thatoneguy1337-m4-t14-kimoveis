import { Request, Response } from "express";
import { RealEstate } from "../entities/index";
import { ICreateSchedule } from "../interfaces/schedules.interfaces";
import createScheduleServices from "../services/schedules/createSchedule.services";
import  listSchedulesService  from "../services/schedules/retrieveSchedules.services";


const createScheduleController = async ( request: Request, response: Response): Promise<Response> => {
  const data: ICreateSchedule = request.body;

  const idUSer: number = request.user.id;

  const newDateSchedule: { message: string } = await createScheduleServices(data, idUSer);
   
    return response.status(201).json({
      message: "Schedule created"
    });
  };
  
  
  const listSchedulesController = async (request: Request, response: Response): Promise<Response> => {
  
    console.log(request.baseUrl)
    const realEstateId: number = Number(request.params.id)
  
    const schedulesList = await listSchedulesService(realEstateId)
  
    return response.json(schedulesList)
  }

export {createScheduleController, listSchedulesController}