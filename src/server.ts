// database connection related code
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { RedisClient } from './shared/redis';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  let server: Server;
  try {
    await RedisClient.connect();
    await mongoose.connect(config.database_url as string);
    console.log('Connected to database🛢 successfully');

    // app listening
    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('Failed to connect database❌', err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  console.log('SIGTERM is Received');
  if (server) {
    server.close();
  }
});
