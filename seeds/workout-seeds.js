
const { Workout } = require('../models');

const workoutData = [
  {
    workout_name: 'Tricep Extensions',
    workout_image: 'tricep_extensions',
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/36/lying-barbell-triceps-extensions/',
    category_id: 1
  },
  {
    workout_name: 'Seated Overhead Press',
    workout_image: 'seated_overhead_press',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/45/seated-overhead-press/'
  },
  {
    workout_name: 'Tricep Press Down',
    workout_image: 'tricep_press_down',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/3/triceps-pressdown/'
  },
  {
    workout_name: 'Chin Ups',
    workout_image: 'chin_ups',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/190/chin-ups/'
  },
  {
    workout_name: 'Bicep Curls',
    workout_image: 'bicep_curls',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/70/bicep-curl/' 
  },
  {
    workout_name: 'Hammer Curls',
    workout_image: 'hammer_curls',
    category_id: 1,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/10/hammer-curl/'
  },
  {
    workout_name: 'Calf Raises',
    workout_image: 'calf_raises',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/51/calf-raises/'
  },
  {
    workout_name: 'Barbell Squats',
    workout_image: 'barbell_squats',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/11/back-squat/'
  },
  {
    workout_name: 'Bulgarian Split Squats',
    workout_image: 'bulgarian_split_squats',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/366/bulgarian-split-squat/'
  },
  {
    workout_name: 'Hip Thrusts',
    workout_image: 'hip_thrusts',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/367/elevated-glute-bridge/'
  },
  {
    workout_name: 'Hamstring Curls',
    workout_image: 'hamstring_curls',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/153/lying-hamstrings-curl/'
  },
  {
    workout_name: 'Reverse Lunge',
    workout_image: 'reverse_lunge',
    category_id: 2,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/319/reverse-lunge/'
  },
  {
    workout_name: 'Incline Bench Press',
    workout_image: 'incline_bench_press',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/25/incline-chest-press/'
  },
  {
    workout_name: 'Bench Press',
    workout_image: 'bench_press',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/5/chest-press/'
  },
  {
    workout_name: 'Chest Fly',
    workout_image: 'chest_fly',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/160/standing-chest-fly/'
  },
  {
    workout_name: 'Incline Cable Flyes',
    workout_image: 'incline_cable_flyes',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/163/standing-incline-cable-flyes'
  },
  {
    workout_name: 'Lying Pullovers',
    workout_image: 'lying_pullovers',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/37/lying-pullovers/'
  },
  {
    workout_name: 'Push Up',
    workout_image: 'push_up',
    category_id: 3,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/41/push-up/'
  },
  {
    workout_name: 'Seated Lat Pulldown',
    workout_image: 'seated_lat_pulldown',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/158/seated-lat-pulldown/'
  },
  {
    workout_name: 'High Rows',
    workout_image: 'high_rows',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/336/high-row/'
  },
  {
    workout_name: 'Seated High Back Row',
    workout_image: 'seated_high_back_row',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/46/seated-high-back-row/'
  },
  {
    workout_name: 'Shrugs',
    workout_image: 'shrugs',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/72/shrug/'
  },
  {
    workout_name: 'Incline Reverse Fly',
    workout_image: 'incline_reverse_fly',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/34/incline-reverse-fly/'
  },
  {
    workout_name: 'Bent-Over Row',
    workout_image: 'bent_over_row',
    category_id: 4,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/12/bent-over-row/'
  },
  {
    workout_name: 'Asyncronous Waves',
    workout_image: 'asyncronous_waves',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/376/asynchronous-waves/'
  },
  {
    workout_name: 'Forward Hurdle Run',
    workout_image: 'forward_hurdle_run',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/221/forward-hurdle-run/'
  },
  {
    workout_name: 'Lateral Hurdle Run',
    workout_image: 'lateral_hurdle_run',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/226/lateral-hurdle-run/'
  },
  {
    workout_name: 'Burpees',
    workout_image: 'burpees',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/306/burpee/'
  },
  {
    workout_name: 'Lateral Shuffle',
    workout_image: 'lateral_shuffle',
    category_id: 5,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/170/agility-ladder-lateral-shuffle/'
  },
  {
    workout_name: 'Front Plank',
    workout_image: 'front_plank',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/32/front-plank/'
  },
  {
    workout_name: 'Reverse Ab Crunch',
    workout_image: 'reverse_ab_crunch',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/76/reverse-crunch/'
  },
  {
    workout_name: 'Sit-Up',
    workout_image: 'sit_up',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/52/crunch/'
  },
  {
    workout_name: 'Vertical Toe Touch',
    workout_image: 'vertical_toe_touch',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/243/vertical-toe-touches/'
  },
  {
    workout_name: 'Medicine Ball Trunk Rotations',
    workout_image: 'medicine_ball_trunk_rotations',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/47/seated-medicine-ball-trunk-rotations/'
  },
  {
    workout_name: 'Ab Rollout',
    workout_image: 'ab_rollout',
    category_id: 6,
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/309/roll-out/'
  }
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;