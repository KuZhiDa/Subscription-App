import { Injectable } from "@nestjs/common";
import { IAuthService } from "./auth.service.interface.js";

@Injectable()
export class AuthService implements IAuthService{}