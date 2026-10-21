import { Module } from "@nestjs/common";
import { SUBSCRIPTION_SERVICE_SYMBOL } from "../common/simbol.js";
import { SubscriptionController } from "../presentation/controllers/subscription.controller.js";
import { SubscriptionService } from "../use-cases/subscription/subscription.service.js";

@Module({
    controllers: [SubscriptionController],
    providers: [{provide: SUBSCRIPTION_SERVICE_SYMBOL, useClass: SubscriptionService}],
    exports: [SUBSCRIPTION_SERVICE_SYMBOL]
})
export class SubscriptionModule{}