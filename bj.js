function waitingTime(waitingTimes, serialNumber) {
  if (serialNumber > waitingTimes.length) {
    let totalTime = 0;
    for (const time of waitingTimes) {
      totalTime += time;
    }
    const averageTime = (totalTime) / waitingTime.length;
    console.log(averageTime + (serialNumber - waitingTimes.length));
  }
}
waitingTime([3, 5, 7, 11, 6], 10);