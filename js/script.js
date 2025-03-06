// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT AND VALIDATE VALUES FROM THE USER
// Get the investment amount from the user
let repeatInvestmentPrompt = true;
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));

    // Within investment, the number should be numeric.
    if (isNaN(investment) || investment <= 0) {
        alert('Investment amount must be a number greater than zero');
    } else {
        repeatInvestmentPrompt = false;
    }
} while (repeatInvestmentPrompt);

// Get the interest rate from the user
let repeatRatePrompt = true;
do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));

    // Within rate, the number should be numeric and between 0 and a realistic rate like 6%.
    if (isNaN(rate) || rate <= 0 || rate > 6) {
        alert('Interest rate must be a number greater than zero and less than or equal to 6');
    } else {
        repeatRatePrompt = false;
    }
} while (repeatRatePrompt);

// Get the number of years from the user
let repeatYearsPrompt = true;
do {
    years = parseInt(prompt('Enter the number of years you want to invest for'));

    // For years, the number should be numeric and between 1 and 30.
    if (isNaN(years) || years <= 0 || years > 30) {
        alert('Years must be a number greater than zero and less than or equal to 30');
    } else {
        repeatYearsPrompt = false;
    }
} while (repeatYearsPrompt);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);