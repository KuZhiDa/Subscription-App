import { Controller, Inject } from "@nestjs/common";
import { PAYMENT_SERVICE_SYMBOL } from "../../common/simbol.js";
import { IPaymentService } from "../../use-cases/payment/payment.service.interface.js";

@Controller('payment')
export class PaymentController{
    constructor(@Inject(PAYMENT_SERVICE_SYMBOL) private readonly paymentService: IPaymentService){}
}