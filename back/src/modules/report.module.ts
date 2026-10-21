import { Module } from "@nestjs/common";
import { REPORT_SERVICE_SYMBOL } from "../common/simbol.js";
import { ReportService } from "../use-cases/report/report.service.js";
import { ReportController } from "../presentation/controllers/report.controller.js";

@Module({
    controllers: [ReportController],
    providers: [{provide: REPORT_SERVICE_SYMBOL, useClass: ReportService}],
    exports: [REPORT_SERVICE_SYMBOL]
})
export class ReportModule{}