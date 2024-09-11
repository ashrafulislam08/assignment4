// Problem 1

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

// Problem 2

function sendNotification(email) {
  if (email.indexOf("@") < 0) {
    return "Invalid Email";
  }
  const username = email.split("@")[0];
  const domainName = email.split("@")[1];
  const message = username + " " + "sent you an email from" + " " + domainName;
  return message;
}

// Problem 3

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

// Problem 4

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  let familyScore = 0;
  if (obj.isFFamily === true) {
    familyScore = 30;
  }

  const totalScore = obj.testScore + obj.schoolGrade + familyScore;
  return totalScore >= 80 ? true : false;
}

// Problem 5

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
