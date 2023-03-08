import Sequelize from 'sequelize';
import databaseConfig from '../config/databases';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Photo from '../models/photo';

const models = [Aluno, User, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => {
  model.init(connection);
});

models.forEach((model) => model.associate && model.associate(connection.models));
