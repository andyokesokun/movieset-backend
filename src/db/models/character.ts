import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, Association, NonAttribute } from "sequelize";
import { Gender, Status } from "../../const";
import  { Episode } from "./episode";


export class Character extends Model<InferAttributes<Character>, InferCreationAttributes<Character>> {
    declare id: CreationOptional<number>;
    declare first_name: string;
    declare last_name: string;
    declare status: string;
    declare gender: string;
    declare location: string;
    declare created_at: Date;
    declare episodes : NonAttribute<Episode[]>
   
    declare static  associations: { Episodes: Association<Character, Episode>; };

}


module.exports  = (sequelize: any) => {
    Character.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false

        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false

        },
        status: {
            type: DataTypes.STRING(10),
            allowNull: false,
             values: [Status.ACTIVE, Status.DEAD, Status.UNKNOWN]

        },
        gender: {
            type: DataTypes.STRING(255),
            allowNull: false,
            values: [Gender.MALE, Gender.FEMALE]

        },
        location: {
            type: DataTypes.STRING(255),
            allowNull: false,
      

        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false
        }

    },
    { 
      tableName: 'characters', 
      timestamps: false,
      sequelize
    }
);


   return  Character
}






