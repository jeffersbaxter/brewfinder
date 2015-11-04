'use strict';
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('like', {
    apiId: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return like;
};