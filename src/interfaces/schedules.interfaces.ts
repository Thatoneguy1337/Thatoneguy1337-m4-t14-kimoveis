import { z } from "zod";
import { createSchedulesSchema, schedulesSchemaReturn, schedulesList } from "../schema/schedules.schema";

type ISchedule = z.infer<typeof createSchedulesSchema>
type IScheduleReturn = z.infer<typeof schedulesSchemaReturn>
type ISchedulesList = z.infer<typeof schedulesList>


export {ISchedule, IScheduleReturn, ISchedulesList}