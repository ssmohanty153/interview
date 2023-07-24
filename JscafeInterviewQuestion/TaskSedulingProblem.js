// task scheduling

const schedules = [
  { id: "a", depedencies: ["b", "c"] },
  { id: "b", depedencies: ["d"] },
  { id: "c", depedencies: ["e"] },
  { id: "d", depedencies: [] },
  { id: "e", depedencies: ["f"] },
  { id: "f", depedencies: [] },
];

let totalTask = schedules.length;
let totalTaskExcecute = 0;
let currentTask = 0;

const removeTaskfromDeps = (id) => {
  schedules.forEach((task) => {
    const index = task.depedencies.indexOf(id);
    if (index !== -1) {
      task.depedencies.splice(index, 1);
    }
  });
};
const executeTasks = () => {
  while (totalTaskExcecute < totalTask) {
    const task = schedules[currentTask];
    if (!task.depedencies.length && !task.executed) {
      console.log(task.id);
      removeTaskfromDeps(task.id);
      task.executed = true;
      totalTaskExcecute += 1;
    } else if (!task.visited) {
      task.visited = 1;
    } else if (task.visited > totalTask) {
      console.log("cycle formed");
      break;
    } else {
      task.visited += 1;
    }

    if (currentTask === totalTask - 1) {
      currentTask = 0;
    } else {
      currentTask += 1;
    }

    console.log(schedules);
  }
};

executeTasks();
