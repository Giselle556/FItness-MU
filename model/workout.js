const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises:[
        {
           type:{
              type:String,
              required: " Enter a Workout Type!"
           },
           name:{
              type: String,
              required: "Enter a Exercise Name!"
           },
           duration:{
              type:Number,
           },
           weight:{
              type: Number
           },
           reps:{
              type: Number
           },
           sets: {
              type: Number
           }, 
           distance:{
              type: Number
           }
        }
     ]
  });
 const Workout = mongoose.model("workout", workoutSchema);
 
 module.exports = Workout;
