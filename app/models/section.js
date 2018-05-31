// Example model
const Chapter = require('./chapter');

module.exports = (sequelize, DataTypes) => {

  const Section = sequelize.define('Section', {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    idchapter: { type: DataTypes.INTEGER, allowNull: false, field: 'idchapter',
       references: { model: Chapter, key: 'id' } }
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        Section.belongsTo(models.Chapter, { as: 'chapter', foreignKey: 'idchapter' });
      }
    }
  }
);

// Class Method
// Section.associate = function (models) {
//   console.log(models.Chapter);
//   Section.belongsTo(models.Chapter, { as: 'chapter', foreignKey: 'idchapter' });
// };

  return Section;
};
