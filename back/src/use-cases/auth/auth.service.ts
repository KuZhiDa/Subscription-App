import { ForbiddenException, Injectable } from "@nestjs/common";
import { IAuthService } from "./auth.service.interface.js";
import { db } from "../../prisma/db.js";

@Injectable()
export class AuthService implements IAuthService{
    async getUserById(id: string) {
        try{
            const user = await db.orm.public.User.firstOrThrow()
            return user
        }catch(e){
            throw new ForbiddenException("nenene")
        }
    }
}