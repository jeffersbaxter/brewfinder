'use strict';
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('like', {
    name: DataTypes.STRING,
    apiId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.like.belongsTo(models.user);
        models.like.hasMany(models.comment);
      }
    }
  });
  return like;
};