"use strict";

module.exports = function(sequelize, DataTypes){
	var LogIn = sequelize.define("LogIn", {
		LogId: DataTypes.INTEGER
	}, {
		classMethod:{
			associate:function(models){
				LogIn.belongsTo(models.User, {
					onDelete: "CASCADE",
					foreignKey: {
						allowNull:false
					}
				});
			}
		}
	});
	return LogIn;
}