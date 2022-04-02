const { Category } = require('../models');

// seeded categories to be displayed on the 
// category page upon user login/signup

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

// bulkcreate will allow the above categories
// to be inserted onto the page all at once

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;