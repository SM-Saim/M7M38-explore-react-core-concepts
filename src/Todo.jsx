// export default function Task({ task }) {
//   return <li>Task: {task} </li>;
// }

// Conditional Rendering Option 1
// export default function Task({ task, isDone }) {
//   if (isDone === "true") {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Working On: {task}</li>;
//   }
// }

// Conditional rendering option 2 (Shortcut )
// export default function Task({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Working On: {task}</li>;
// }

// Conditional rendering option 3 (Shortcut )
// export default function Task({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Working On"}: {task}
//     </li>
//   );
// }

// Conditional Rendering Option 4: && (shudu true er khetre kaj korbe, mane only if )
// export default function Task({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone && " : Done"}
//     </li>
//   );
// }

// Conditional Rendering Option 5: || (shudu false er khetre kaj korbe, mane only else )
// export default function Task({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone || " : Do it Now"}
//     </li>
//   );
// }

// Conditional Rendering Option 1
export default function Task({ task, isDone }) {
  let listValue;
  if (isDone) {
    listValue = <li>Finished: {task}</li>;
  } else {
    listValue = <li>Working On: {task}</li>;
  }
  return listValue;
}
