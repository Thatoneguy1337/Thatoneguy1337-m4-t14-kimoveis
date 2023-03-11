import {z} from "zod"
import { createLoginSchema } from "../schema/login.schemas"



type ILogin = z.infer<typeof createLoginSchema>

export {
    ILogin
}


