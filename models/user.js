module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define(
    'user', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.STRING
    }, {
      timestamps: true
    }
  );
  return user;
};
