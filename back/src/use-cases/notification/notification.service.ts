import { Injectable } from "@nestjs/common";
import { INotificationService } from "./notification.service.interface.js";

@Injectable()
export class NotificationService implements INotificationService{}