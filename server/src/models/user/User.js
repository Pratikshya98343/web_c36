import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";


export const User=sequelize.define("User",{
      First_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       Last_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email_ADDRESS: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password:{
        type:DataTypes.STRING
      }
})