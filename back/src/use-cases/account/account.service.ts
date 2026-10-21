import { Injectable } from "@nestjs/common";
import { IAccountService } from "./account.service.interface.js";

@Injectable()
export class AccountService implements IAccountService{

}
