import { Injectable } from "@nestjs/common";
import { ISubscriptionService } from "./subscription.service.interface.js";

@Injectable()
export class SubscriptionService implements ISubscriptionService{}