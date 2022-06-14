import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import initGameModel from './games.mjs';
import initUserModel from './users.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

// add your model definitions to db here
db.Game = initGameModel(sequelize, Sequelize.DataTypes);
db.User = initUserModel(sequelize, Sequelize.DataTypes);

db.User.belongsToMany(db.Game, { through: 'game_users' });
db.Game.belongsToMany(db.User, { through: 'game_users' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
