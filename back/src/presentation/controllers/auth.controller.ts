import { Controller, Inject } from "@nestjs/common";
import { AUTH_SERVICE_SYMBOL } from "../../common/simbol.js";
import { IAuthService } from "../../use-cases/auth/auth.service.interface.js";

@Controller('auth')
export class AuthController{
    constructor(@Inject(AUTH_SERVICE_SYMBOL) private readonly authService: IAuthService){}
}