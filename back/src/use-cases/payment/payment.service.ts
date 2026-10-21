import { Injectable } from "@nestjs/common";
import { IPaymentService } from "./payment.service.interface.js";

@Injectable()
export class PaymentService implements IPaymentService{}