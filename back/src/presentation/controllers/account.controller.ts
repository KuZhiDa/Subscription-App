import { Controller, Inject } from "@nestjs/common";
import { ACCOUNT_SERVICE_SYMBOL } from "../../common/simbol.js";
import { IAccountService } from "../../use-cases/account/account.service.interface.js";

@Controller('account')
export class AccountController{
    constructor(@Inject(ACCOUNT_SERVICE_SYMBOL) private readonly accountService: IAccountService){}
}