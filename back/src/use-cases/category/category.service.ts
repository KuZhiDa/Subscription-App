import { Injectable } from "@nestjs/common";
import { ICategoryService } from "./category.service.interface.js";

@Injectable()
export class CategoryService implements ICategoryService{}