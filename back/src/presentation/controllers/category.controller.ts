import { Controller, Inject } from "@nestjs/common";
import { CATEGORY_SERVICE_SYMBOL } from "../../common/simbol.js";
import { ICategoryService } from "../../use-cases/category/category.service.interface.js";

@Controller('category')
export class CategoryController{
    constructor(@Inject(CATEGORY_SERVICE_SYMBOL) private readonly categoryService: ICategoryService){}
}