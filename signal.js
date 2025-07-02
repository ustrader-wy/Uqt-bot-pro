// Simulate "accurate" trading signal (BUY or SELL)
function getAccurateSignal() {
  // Simulate historical market prices
  const prices = [];
  for (let i = 0; i < 20; i++) {
    prices.push(100 + Math.random() * 2 - 1); // Random walk prices
  }

  // Calculate simple moving averages
  const smaShort = prices.slice(-5).reduce((a, b) => a + b) / 5;
  const smaLong = prices.slice(-10).reduce((a, b) => a + b) / 10;

  // Signal logic: SMA crossover
  let signal = "";
  if (smaShort > smaLong) {
    signal = "BUY";
  } else if (smaShort < smaLong) {
    signal = "SELL";
  } else {
    // If equal, randomly pick
    signal = Math.random() > 0.5 ? "BUY" : "SELL";
  }

  return {
    signal: signal,
    smaShort: smaShort.toFixed(3),
    smaLong: smaLong.toFixed(3),
    prices: prices.map(p => p.toFixed(3))
  };
}

// Example usage
const result = getAccurateSignal();
console.log("Signal:", result.signal);
console.log("Short SMA:", result.smaShort);
console.log("Long SMA:", result.smaLong);
console.log("Prices:", result.prices);
