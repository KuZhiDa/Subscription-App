import { Module } from "@nestjs/common";
import { NOTIFICATION_SERVICE_SYMBOL } from "../common/simbol.js";
import { NotificationService } from "../use-cases/notification/notification.service.js";
import { NotificationController } from "../presentation/controllers/notification.controller.js";

@Module({
    controllers: [NotificationController],
    providers: [{provide: NOTIFICATION_SERVICE_SYMBOL, useClass: NotificationService}],
    exports: [NOTIFICATION_SERVICE_SYMBOL]
})
export class NotificationModule{}