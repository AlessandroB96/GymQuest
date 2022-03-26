
const { Workout } = require('../models');

const workoutData = [
  {
    workout_name: 'Tricep Extensions',
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/36/lying-barbell-triceps-extensions/',
    category_id: 1
  },
  {
    workout_name: 'Seated Overhead Press',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/45/seated-overhead-press/'
  },
  {
    workout_name: 'Tricep Press Down',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/3/triceps-pressdown/'
  },
  {
    workout_name: 'Chin Ups',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/190/chin-ups/'
  },
  {
    workout_name: 'Bicep Curls',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/70/bicep-curl/' 
  },
  {
    workout_name: 'Hammer Curls',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/10/hammer-curl/'
  },
  {
    workout_name: 'Calf Raises',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/51/calf-raises/'
  },
  {
    workout_name: 'Barbell Squats',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/11/back-squat/'
  },
  {
    workout_name: 'Bulgarian Split Squats',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/366/bulgarian-split-squat/'
  },
  {
    workout_name: 'Hip Thrusts',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/367/elevated-glute-bridge/'
  },
  {
    workout_name: 'Hamstring Curls',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/153/lying-hamstrings-curl/'
  },
  {
    workout_name: 'Reverse Lunge',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/319/reverse-lunge/'
  },
  {
    workout_name: 'Incline Bench Press',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/25/incline-chest-press/'
  },
  {
    workout_name: 'Bench Press',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/5/chest-press/'
  },
  {
    workout_name: 'Chest Fly',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/160/standing-chest-fly/'
  },
  {
    workout_name: 'Incline Cable Flyes',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/163/standing-incline-cable-flyes'
  },
  {
    workout_name: 'Lying Pullovers',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/37/lying-pullovers/'
  },
  {
    workout_name: 'Push Up',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/41/push-up/'
  },
  {
    workout_name: 'Seated Lat Pulldown',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/158/seated-lat-pulldown/'
  },
  {
    workout_name: 'High Rows',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/336/high-row/'
  },
  {
    workout_name: 'Seated High Back Row',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/46/seated-high-back-row/'
  },
  {
    workout_name: 'Shrugs',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/72/shrug/'
  },
  {
    workout_name: 'Incline Reverse Fly',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/34/incline-reverse-fly/'
  },
  {
    workout_name: 'Bent-Over Row',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/12/bent-over-row/'
  },
  {
    workout_name: 'Asyncronous Waves',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/376/asynchronous-waves/'
  },
  {
    workout_name: 'Forward Hurdle Run',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/221/forward-hurdle-run/'
  },
  {
    workout_name: 'Lateral Hurdle Run',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/226/lateral-hurdle-run/'
  },
  {
    workout_name: 'Burpees',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/306/burpee/'
  },
  {
    workout_name: 'Lateral Shuffle',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/170/agility-ladder-lateral-shuffle/'
  },
  {
    workout_name: 'Front Plank',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/32/front-plank/'
  },
  {
    workout_name: 'Reverse Ab Crunch',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/76/reverse-crunch/'
  },
  {
    workout_name: 'Sit-Up',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/52/crunch/'
  },
  {
    workout_name: 'Vertical Toe Touch',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/243/vertical-toe-touches/'
  },
  {
    workout_name: 'Medicine Ball Trunk Rotations',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/47/seated-medicine-ball-trunk-rotations/'
  },
  {
    workout_name: 'Ab Rollout',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/309/roll-out/'
  }
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;