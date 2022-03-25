const { Workout } = require('../models');

const workoutData = [
  {
    workout_name: 'Skullcrushers',
    muscle_group: 'Triceps',
    category_id: 1,
  },
  {
    workout_name: 'Leg press',
    muscle_group: 'Quads, calvs',
    category_id: 5,
  },
  {
    workout_name: 'Bicep curls',
    muscle_group: 'Biceps',
    category_id: 4,
  },
  {
    workout_name: 'Seated rows',
    muscle_group: 'Back',
    category_id: 3,
  },
  {
    workout_name: 'Cardio',
    muscle_group: 'Full-body',
    category_id: 2,
  },
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;