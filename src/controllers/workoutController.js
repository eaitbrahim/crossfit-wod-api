const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({status: 'Ok', data: allWorkouts });
}

const getOneWorkout = (req, res) => {
  const {
    params: { workoutId }
  } =  req;

  if(!workoutId){
    return;
  }

  const workout = workoutService.getOneWorkout(workoutId);
  res.send({ status: 'Ok', data: workout });
}

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: 'Ok', data: createdWorkout });
}

const updateOneWorkout = (req, res) => {
  console.log('Updating...');
  const {
    body, params: { workoutId }
  } = req;
  if(!workoutId){
    return;
  }
  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.send({status: 'Ok', data: updatedWorkout });
}

const deleteOneWorkout = (req, res) => {
  const { 
    params: { workoutId }
  } = req;
  if(!workoutId){
    return;
  }
  workoutService.deleteOneWorkout(workoutId);
  res.status(204).send({status: 'Ok' });
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};