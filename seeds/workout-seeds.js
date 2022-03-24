const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Arms',
  },
  {
    category_name: 'Legs',
  },
  {
    category_name: 'Chest',
  },
  {
    category_name: 'Back',
  },
  {
    category_name: 'Cardio',
  },
  {
    category_name: 'Abdominals'
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;