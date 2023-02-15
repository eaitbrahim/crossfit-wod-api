const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({status: 'Ok', data: allWorkouts });
}

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout();
  res.send('Get an existing workout');
}

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutService.createNewWorkout();
  res.send('Create a newworkout');
}

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.upodateOneWorkout();
  res.send('Update an existing workout');
}

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout();
  res.send('Delete an existing workout');
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};