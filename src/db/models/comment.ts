import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, Association, ForeignKey, NonAttribute } from "sequelize";
import { Episode } from "./episode";


export class Comment extends Model<InferAttributes<Comment>, InferCreationAttributes<Comment>> {
    declare id: CreationOptional<number>;
    declare comment: string;
    declare ip_address_location: string;
    declare episode_id: ForeignKey<Episode>;
    declare created_at: Date;
    declare episode : NonAttribute<Episode>

     
}



module.exports  = (sequelize: any) => {
    Comment.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        comment: {
            type: DataTypes.STRING(1000),
            allowNull: false

        },
        ip_address_location: {
            type: DataTypes.STRING(100),
            allowNull: false

        },
        episode_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'comments',
              key: 'id'
            },
             onDelete: 'CASCADE'
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false
        }

    },
    { 
      tableName: 'comments', 
      timestamps: false,
      sequelize
    }
);
  
   return  Comment
}





