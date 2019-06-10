const apr = (loanAmount, term, annualRate, costs) => {
  const rate = annualRate / 100 / 12;
  const monthlyPayment = (loanAmount * rate) / (1 - Math.pow(1 + rate, -term));
  let testRate = rate;
  let i = 0;
  let testResult = 0;
  let testDiff = testRate;
  while (i <= 100) {
    testResult =
      (testRate * Math.pow(1 + testRate, term)) /
        (Math.pow(1 + testRate, term) - 1) -
      monthlyPayment / (loanAmount - costs);
    if (Math.abs(testResult) < 0.0000001) break;
    if (testResult < 0) testRate += testDiff;
    else {
      testRate -= testDiff;
      testDiff = testDiff / 2;
      i++;
    }
  }
  testRate = testRate * 12 * 100;
  return testRate.toFixed(3);
};

const payment = (loanAmount, annualRate, term) => {
  const monthlyRate = annualRate / 100 / 12;
  const monthly =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
  return monthly;
};
