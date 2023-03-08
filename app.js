import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/databases';

import express from 'express';
import home from './src/routes/home';
import user from './src/routes/UserRoutes';
import token from './src/routes/TokenRoutes';
import students from './src/routes/StudentsRoutes';
import photo from './src/routes/PhotosRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/tokens/', token);
    this.app.use('/students/', students);
    this.app.use('/photo/', photo);
  }
}

export default new App().app;
