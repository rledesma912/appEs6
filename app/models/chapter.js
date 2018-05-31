// Example model

module.exports = (sequelize, DataTypes) => {

  const Chapter = sequelize.define('Chapter', {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.STRING
  }
  , {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        Chapter.hasMany(models.Section, { as: 'sections', foreignKey: 'idchapter' });
      }
    }
  }
);

// Class Method
// Chapter.associate = function (models) {
//   Chapter.hasMany(models.Section, { as: 'sections', foreignKey: 'idchapter' });
// };

return Chapter;
};
