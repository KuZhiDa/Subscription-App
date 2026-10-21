import { Module } from "@nestjs/common";
import { PAYMENT_SERVICE_SYMBOL } from "../common/simbol.js";
import { PaymentService } from "../use-cases/payment/payment.service.js";
import { PaymentController } from "../presentation/controllers/paymen.controller.js";

@Module({
    controllers: [PaymentController],
    providers: [{provide: PAYMENT_SERVICE_SYMBOL, useClass: PaymentService}],
    exports: [PAYMENT_SERVICE_SYMBOL]
})
export class PaymentModule{}