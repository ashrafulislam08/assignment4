function calculateTax(income, expenses) {
  if (
    income <= 0 ||
    expenses <= 0 ||
    income < expenses ||
    income !== "number" ||
    expenses !== "number"
  ) {
    return "Invalid Input";
  }
  const savedCost = income - expenses;
  const tax = savedCost * 0.2;
  return tax;
}

function sendNotification(email) {
  if (email.indexOf("@") < 0) {
    return "Invalid Email";
  }
  const username = email.split("@")[0];
  const domainName = email.split("@")[1];
  const message = username + " " + "sent you an email from" + " " + domainName;
  return message;
}
