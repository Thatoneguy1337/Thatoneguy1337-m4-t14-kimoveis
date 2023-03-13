import { z } from "zod";
import { createScheduleSchema } from "../schema/schedules.schema";

type ICreateSchedule = z.infer<typeof createScheduleSchema>;

export { ICreateSchedule };
