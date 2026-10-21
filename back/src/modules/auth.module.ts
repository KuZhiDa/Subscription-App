import { Module } from "@nestjs/common";
import { AUTH_SERVICE_SYMBOL } from "../common/simbol.js";
import { AuthService } from "../use-cases/auth/auth.service.js";
import { AuthController } from "../presentation/controllers/auth.controller.js";

@Module({
  controllers: [AuthController],
  providers: [{provide: AUTH_SERVICE_SYMBOL, useClass: AuthService}],
  exports: [AUTH_SERVICE_SYMBOL],
})
export class AuthModule{}