'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
    },
  });

  Post.associate = (models) => {
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments'
    })
  }
  // class Post extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //   }
  // }
  
  // Post.init({
  //   title: DataTypes.STRING,
  //   content: DataTypes.STRING,
  //   photo: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'Post',
  // });
  return Post;
};