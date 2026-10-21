import { Controller, Inject } from "@nestjs/common";
import { USER_SERVICE_SYMBOL } from "../../common/simbol.js";
import { IUserService } from "../../use-cases/user/user.service.interface.js";

@Controller('user')
export class UserController{
    constructor(@Inject(USER_SERVICE_SYMBOL) private readonly userService: IUserService){}
}