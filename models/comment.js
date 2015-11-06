'use strict';
module.exports = function(sequelize, DataTypes) {
  var comment = sequelize.define('comment', {
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    likeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.comment.belongsTo(models.user);
      }
    }
  });
  return comment;
};