import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {TeamModule} from "./team/team.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      TeamModule,
      {
        transport: Transport.TCP,
        options: {
          port: 3002
        }
      },
  );
  await app.listen();
}

bootstrap();