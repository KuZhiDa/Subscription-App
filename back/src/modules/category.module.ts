import { Module } from "@nestjs/common";
import { CATEGORY_SERVICE_SYMBOL } from "../common/simbol.js";
import { CategoryService } from "../use-cases/category/category.service.js";
import { CategoryController } from "../presentation/controllers/category.controller.js";

@Module({
  controllers: [CategoryController],
  providers: [{provide: CATEGORY_SERVICE_SYMBOL, useClass: CategoryService}],
  exports: [CATEGORY_SERVICE_SYMBOL]
})
export class CategoryModule{}