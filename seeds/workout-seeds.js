
const { Workout } = require('../models');

const workoutData = [
  {
    workout_name: 'Skull Crushers',
    category_id: 1,
  },
  {
    workout_name: 'Preacher Curls',
    category_id: 1,
  },
  {
    workout_name: 'Tricep Pull Down',
    category_id: 1,
  },
  {
    workout_name: 'Dumbbell Overheads',
    category_id: 1,
  },
  {
    workout_name: 'Bicep Curls',
    category_id: 1,
  },
  {
    workout_name: 'Barbell Bicep Curls',
    category_id: 1,
  },
  {
    workout_name: 'Leg press',
    category_id: 2,
  },
  {
    workout_name: 'Barbell Squats',
    category_id: 2,
  },
  {
    workout_name: 'Bulgarian Split Squats',
    category_id: 2,
  },
  {
    workout_name: 'Goblet Squat',
    category_id: 2,
  },
  {
    workout_name: 'Dumbbell Step-Ups',
    category_id: 2,
  },
  {
    workout_name: 'Deadlift',
    category_id: 2,
  },
  {
    workout_name: 'Dumbbell Squeeze Press',
    category_id: 3,
  },
  {
    workout_name: 'Incline Barbell Bench Press',
    category_id: 3,
  },
  {
    workout_name: 'Cable Fly',
    category_id: 3,
  },
  {
    workout_name: 'Decline Barbell Bench Press',
    category_id: 3,
  },
  {
    workout_name: 'Chest Dips',
    category_id: 3,
  },
  {
    workout_name: 'Decline Bench Press',
    category_id: 3,
  },
  {
    workout_name: 'Kettlebell Swings',
    category_id: 4,
  },
  {
    workout_name: 'Dumbbell Rows',
    category_id: 4,
  },
  {
    workout_name: 'Wide Grip Pull Ups',
    category_id: 4,
  },
  {
    workout_name: 'Lat Pulldowns',
    category_id: 4,
  },
  {
    workout_name: 'Single Arm T-Bar Rows',
    category_id: 4,
  },
  {
    workout_name: 'Barbell Bent-Over Row',
    category_id: 4,
  },
  {
    workout_name: 'Treadmill',
    category_id: 5,
  },
  {
    workout_name: 'Jumping Jacks',
    category_id: 5,
  },
  {
    workout_name: 'Rowing Machine',
    category_id: 5,
  },
  {
    workout_name: 'Burpees',
    category_id: 5,
  },
  {
    workout_name: 'Squat Jumps',
    category_id: 5,
  },
  {
    workout_name: 'Stair Climber',
    category_id: 5,
  },
  {
    workout_name: 'Weighted Plank',
    category_id: 6,
  },
  {
    workout_name: 'Hollow Hold',
    category_id: 6,
  },
  {
    workout_name: 'Sit-Up',
    category_id: 6,
  },
  {
    workout_name: 'Hanging Knee Raise',
    category_id: 6,
  },
  {
    workout_name: 'Hollow Hold',
    category_id: 6,
  },
  {
    workout_name: 'Ab Rollout',
    category_id: 6,
  }
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;