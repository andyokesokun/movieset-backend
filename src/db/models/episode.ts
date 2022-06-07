import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, Association, ForeignKey, NonAttribute, BelongsToManyAddAssociationMixin } from "sequelize";
import { Character } from "./character";
import { Comment } from "./comment";



export class Episode extends Model<InferAttributes<Episode>, InferCreationAttributes<Episode>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare episode_code: string;
    declare release_date: Date;
    declare created_at: Date;
    declare characters : NonAttribute<Character[]> 
    declare comments : NonAttribute<Comment[]>

    declare static  associations: { Comments: Association<Episode, Comment>  
                                    Characters: Association<Episode, Character>};

   declare addCharacter: BelongsToManyAddAssociationMixin<Character, number>;                                
     
}



module.exports  =(sequelize: any) => {
    Episode.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false

        },
        episode_code: {
            type: DataTypes.STRING(255),
            allowNull: false

        },
        release_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false
        }

    },
    { 
      tableName: 'episodes', 
      timestamps: false,
      sequelize
    }
);
 
   return  Episode
}



