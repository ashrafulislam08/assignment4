let totalTime = 0;
for (const wTime of waitingTimes) {
  totalTime += wTime;
}
console.log(Math.round((totalTime * 4) / waitingTimes.length));
