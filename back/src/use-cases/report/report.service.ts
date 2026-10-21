import { Injectable } from "@nestjs/common";
import { IReportService } from "./report.service.interface.js";

@Injectable()
export class ReportService implements IReportService{}