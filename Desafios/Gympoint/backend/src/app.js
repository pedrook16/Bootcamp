import 'dotenv/config'

import express from 'express';
import * as Sentry from '@sentry/node'
import Youch from 'youch'
import 'express-async-errors'
import routes from './routes';

import sentryConfig from './config/sentry'

import './database';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig)

    this.middlewares();
    this.routes();
    this.exceptionHandle()
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandle() {
    this.server.use(async (err, req, res, next) => {
      if(process.env.NODE_ENV === 'development') {
      const errors = await new Youch(err, req).toJSON()

      return res.status(500).json(errors)
      }

      return res.status(500).json({error: 'Internal server error.'})
    })
   }
}

export default new App().server;
