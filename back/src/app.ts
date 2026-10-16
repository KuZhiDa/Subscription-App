import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export class App{
    private readonly app: INestApplication
    private readonly port: number
    private readonly prefix: string
    private readonly configService: ConfigService

    constructor(app: INestApplication){
        this.app = app
        this.configService = app.get(ConfigService)
        this.port = this.configService.getOrThrow<number>('PORT')
        this.prefix = this.configService.getOrThrow<string>('PREFIX')
    }

    private appConfig(){
        this.app.setGlobalPrefix(this.prefix)
        return this
    }

    private async runApp(){
        this.app.listen(this.port, ()=>{
            console.log(`server: http://localhost:${this.port}/${this.prefix}`);
        })
        return this
    }

    public static async run(){
        const app = await NestFactory.create(AppModule)
        await new App(app).appConfig().runApp()
    }
}