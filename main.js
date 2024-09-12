function calculateTax(income, expenses) {
  if (
    income <= 0 ||
    expenses <= 0 ||
    income < expenses ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }
  const savedCost = income - expenses;
  const tax = savedCost * 0.2;
  return tax;
}

function sendNotification(email) {
  if (email.indexOf("@") < 0 || typeof email !== "string") {
    return "Invalid Email";
  }
  const username = email.split("@")[0];
  const domainName = email.split("@")[1];
  const message = username + " " + "sent you an email from" + " " + domainName;
  return message;
}

function checkDigitsInName(name) {
  if (typeof name !== "string" || name === undefined) {
    return "Invalid Input";
  }
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const num of numbers) {
    for (const nameVal of name) {
      if (num == nameVal) {
        return true;
      }
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  let familyScore = 0;
  if (obj.isFFamily === true) {
    familyScore = 20;
  }

  const totalScore = obj.testScore + obj.schoolGrade + familyScore;
  return totalScore >= 80 ? true : false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
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
