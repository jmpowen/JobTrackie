/**
 * Basically just an example of what the Reducer would look like at this point. Don't judge the bullshit
 * I have written here, it's a work in progress.
 */

// import { ADD_TASK, DELETE_TASK } from './types';

// // eslint-disable-next-line import/no-anonymous-default-export
// export default (state, action) => {
//   const { payload, type } = action;

//   switch(type) {
//     case ADD_TASK:
//       // Adding task to the task array 
//       let addT = state.tasks;
//       addT.push(payload);

//       // finding the min
//       let newMin = state.min;
//       let newMax = state.max;
//       if (newMin === null || payload.minutes < newMin) {
//         newMin = payload.minutes;
//       }
//       if (newMax === null || payload.minutes > newMax) {
//         newMax = payload.minutes;
//       }

//       return {
//         ...state,
//         tasks: addT,
//         min: newMin,
//         max: newMax,
//       };
//     case DELETE_TASK:
//       let delT = state.tasks;
//       delT.filter(task => task.name === payload.name);
//       return {
//         ...state,
//         tasks: delT
//       };
//     default:
//       return state;
//   }
// }