import { Module } from "@nestjs/common";
import { USER_SERVICE_SYMBOL } from "../common/simbol.js";
import { UserController } from "../presentation/controllers/user.controller.js";
import { UserService } from "../use-cases/user/user.service.js";

@Module({
    controllers: [UserController],
    providers: [{provide: USER_SERVICE_SYMBOL, useClass: UserService}],
    exports: [USER_SERVICE_SYMBOL]
})
export class SubscriptionModule{}