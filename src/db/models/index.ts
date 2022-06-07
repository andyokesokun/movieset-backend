import fs from 'fs';
import path from 'path';
import {Sequelize} from 'sequelize';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
import  config  from  '../config'
import { Character } from './character';
import { Comment } from './comment';
import { Episode } from './episode';
const db: any = {};


let sequelize: any;
// if (config.useDbURL) {
//   sequelize = new Sequelize(config.dbURL);
// } else {
  sequelize = new Sequelize(config.database, config.username, config.password, 
      config);
// }

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Character.belongsToMany(db.Episode, {through: 'character_episodes'} )
db.Episode.belongsToMany(db.Character, {through: 'character_episodes'} )
db.Episode.hasMany(db.Comment)
db.Comment.belongsTo(db.Episode)
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
