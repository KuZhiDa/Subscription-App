import { Controller, Inject } from "@nestjs/common";
import { IReportService } from "../../use-cases/report/report.service.interface.js";
import { REPORT_SERVICE_SYMBOL } from "../../common/simbol.js";

@Controller('report')
export class ReportController{
    constructor(@Inject(REPORT_SERVICE_SYMBOL) private readonly reportService: IReportService){}
}