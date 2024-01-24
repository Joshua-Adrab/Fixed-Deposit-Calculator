function calculateMaturityAmount(){
    // Get input values

    const principal =  parseFloat(document.getElementById('principal').value);
    const interestRate =  parseFloat(document.getElementById('interestRate').value);
    const tenure =  parseFloat(document.getElementById('tenure').value);

    // perform the calculation

    const maturityAmount = principal + (principal * interestRate * tenure)/100;

    // Display the result 

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;


}

// Attach the event listener to  the calculate button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);