const Workout = require('../database/Workout');

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = () => {
  return;
};


const createNewWorkout = () => {
  return;
};


const upodateOneWorkout = () => {
  return;
};


const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  upodateOneWorkout,
  deleteOneWorkout
};