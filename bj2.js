function waitingTime(waitingTimes, serialNumber) {
  console.log(waitingTimes, serialNumber);
  if (!Array.isArray(waitingTimes) || isNaN(serialNumber) == true) {
    console.log("Invalid Input");
  }
  const queue = serialNumber - 1;
  const completedInterview = queue - waitingTimes.length;

  let totalTime = 0;
  for (const time of waitingTimes) {
    totalTime = totalTime + time;
  }
  const averageTime = Math.round(totalTime / waitingTimes.length);
  const result = averageTime * completedInterview;
  return result;
}
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
// console.log(waitingTime("[6,2]", 9));
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));
