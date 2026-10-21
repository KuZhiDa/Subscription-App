import { Injectable } from "@nestjs/common";
import { IUserService } from "./user.service.interface.js";

@Injectable()
export class UserService implements IUserService{}