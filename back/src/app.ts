import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class App {
  private readonly app: INestApplication;
  private readonly port: number;
  private readonly prefixApplication: string;
  private readonly prefixSwagger: string;
  private readonly configService: ConfigService;

  constructor(app: INestApplication) {
    this.app = app;
    this.configService = app.get(ConfigService);
    this.port = this.configService.getOrThrow<number>('PORT');
    this.prefixApplication =
      this.configService.getOrThrow<string>('PREFIX_APPLICATION');
    this.prefixSwagger =
      this.configService.getOrThrow<string>('PREFIX_SWAGGER');
  }

  private swaggerConfig() {
    const config = new DocumentBuilder()
      .setTitle('Subly')
      .setDescription('Backend application for Subly')
      .setVersion('1.0')
      .build();

    const documentFactory = () =>
      SwaggerModule.createDocument(this.app, config);
    SwaggerModule.setup('doc', this.app, documentFactory);

    console.log(`swagger: http://localhost:${this.port}/${this.prefixSwagger}`);
    return this;
  }

  private appConfig() {
    this.app.setGlobalPrefix(this.prefixApplication);
    this.app.useGlobalPipes(
      new ValidationPipe({
        whitelist: false,
        transform: true,
        errorFormat: 'grouped',
      }),
    );

    return this;
  }

  private async runApp() {
    this.app.listen(this.port, () => {
      console.log(
        `server: http://localhost:${this.port}/${this.prefixApplication}`,
      );
    });
    return this;
  }

  public static async run() {
    const app = await NestFactory.create(AppModule);
    await new App(app).swaggerConfig().appConfig().runApp();
  }
}
