const { Workout } = require('../models');

const workoutData = [
  {
    workout_name: 'Skullcrushers',
    category_id: 1,
  },
  {
    workout_name: 'Leg press',
    category_id: 5,
  },
  {
    workout_name: 'Bicep curls',
    category_id: 4,
  },
  {
    workout_name: 'Seated rows',
    category_id: 3,
  },
  {
    workout_name: 'Cardio',
    category_id: 2,
  },
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;