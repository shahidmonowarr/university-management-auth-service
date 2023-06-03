// database connection related code
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import logger from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Connected to database🛢 successfully')

    // app listening
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    logger.error('Failed to connect database❌', err)
  }
}

bootstrap()
