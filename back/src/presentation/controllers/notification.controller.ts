import { Controller, Inject } from "@nestjs/common";
import { NOTIFICATION_SERVICE_SYMBOL } from "../../common/simbol.js";
import { INotificationService } from "../../use-cases/notification/notification.service.interface.js";

@Controller('notification')
export class NotificationController{
    constructor(@Inject(NOTIFICATION_SERVICE_SYMBOL) private readonly notificationService: INotificationService){}
}