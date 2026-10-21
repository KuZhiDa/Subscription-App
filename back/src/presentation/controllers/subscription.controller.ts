import { Controller, Inject } from "@nestjs/common";
import { SUBSCRIPTION_SERVICE_SYMBOL } from "../../common/simbol.js";
import { ISubscriptionService } from "../../use-cases/subscription/subscription.service.interface.js";

@Controller('subscription')
export class SubscriptionController{
    constructor(@Inject(SUBSCRIPTION_SERVICE_SYMBOL) private readonly subscriptionService: ISubscriptionService){}
}