// import { useState } from "react";
// import { Goal } from "../models/goal";
// import goalfuncs from "../utils/GoalContext";


// //GET THE CURRENTLY LOGGED IN USER
// const user = JSON.parse(localStorage.getItem("user"))

// //GET CURRENT WEEK
// const thisWeek = localStorage.getItem("Current Week");

// //CHECK IF A GOAL EXISTS FOR THE CURRENT WEEK
// function GoalExist() {


//     for(let goal in goals){
//         if(goal.accountId === user.id && goal.week === thisWeek){
//                 return true
//         }
//     }
//     return false
// }

// //CREATE A GOAL
// function CreateGoal() {

//     const newGoal = {
//         week: thisWeek,
//         achieved: false,
//         accountId: user.id
//     }

//     goalfuncs.CreateGoal(newGoal)

// }

// //GET THE ID OF THE CURRENT WEEKS GOAL
// function GetGoalId() {

    

//     for(let goal in goalfuncs.FetchGoals()){
//         if(goal.accountId === user.id){
//             if(goal.week === thisWeek){
//                 return goal.id
//             }
//         }
//     }
//     return null
// }

// const CreateGoalFuncs = {
//     GoalExist,
//     CreateGoal,
//     GetGoalId
// }

// export default CreateGoalFuncs;