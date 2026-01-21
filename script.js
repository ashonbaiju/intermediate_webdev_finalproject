const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

const calculateTotalPayableAmount = (principal, interestAmount) => {
  return principal + interestAmount;
};

const calculate = () => {
  const p = Number(document.getElementById("principal").value);
  const r = Number(document.getElementById("rate").value);
  const t = Number(document.getElementById("time").value);

  const simpleInterest = calculateSimpleInterest(p, r, t);
  const totalAmount = calculateTotalPayableAmount(p, simpleInterest);

  const result = document.getElementById("result");

  result.innerHTML = `
    <div>Principal Amount: <span>${p.toFixed(2)}</span></div>
    <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
    <div>Total Amount: <span>${totalAmount.toFixed(2)}</span></div>
  `;
};

/* Required for Jasmine testing */
if (typeof module !== "undefined") {
  module.exports = {
    calculateSimpleInterest,
    calculateTotalPayableAmount,
    calculate
  };
}
