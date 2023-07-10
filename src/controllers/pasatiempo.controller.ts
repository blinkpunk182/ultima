import { Response,Request } from "express"

import {pasatiempoService} from '../services'
export const pasatiempoController = {
    getAllPasatiempo:async(_req:Request,res:Response)=>{
        try {
            const data = await pasatiempoService.getAll();
            return res.json(data);
        } catch (error:any) {
            return res.status(400).json({
                message:error.message
            })
        }
    },
    create: async(req:Request,res:Response)=>{
        try {
            const data = await pasatiempoService.create(req.body);
            return res.json(data);
        } catch (error:any) {
            return res.status(400).json({
                message:error.message
            })
        }
    }
        
}