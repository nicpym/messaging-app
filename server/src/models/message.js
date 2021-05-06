"use strict";

const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      /**
       * Belong Association, fk on this
       */

      this.belongsTo(models.User, {
        foreignKey: "fkMessage",
        targetKey: "pkMessage",
      });

      this.belongsTo(models.Conversation, {
        foreignKey: "fkMessage",
        targetKey: "pkMessage",
      });

      /**
       * Has Association, fk on other
       */
    }
  }
  Message.init(
    {
      pkMessage: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cBody: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.fn("NOW") },
      updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.fn("NOW") },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
