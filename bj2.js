function waitingTime(waitingTimes, serialNumber) {
  const queue = serialNumber - 1; 
  const completedInterview = 9 - waitingTimes.length
  let totalTime = 0;
  for(const wTime of waitingTimes) {
    totalTime += wTime;
  }
  console.log(Math.round((totalTime * 4) / waitingTimes.length))
}
waitingTime([3, 5, 7, 11, 6], 10);