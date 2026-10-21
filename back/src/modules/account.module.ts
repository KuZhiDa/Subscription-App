import { Module } from "@nestjs/common";
import { ACCOUNT_SERVICE_SYMBOL } from "../common/simbol.js";
import { AccountService } from "../use-cases/account/account.service.js";
import { AccountController } from "../presentation/controllers/account.controller.js";

@Module({
  controllers: [AccountController],
  providers: [{provide: ACCOUNT_SERVICE_SYMBOL, useClass: AccountService}],
  exports: [ACCOUNT_SERVICE_SYMBOL],
})
export class AccountModule{}