import React, { useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";
import "./index.css";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let calculatedCurrentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let investedCapital = +userInput["current-savings"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = calculatedCurrentSavings * expectedReturn;
      calculatedCurrentSavings += yearlyInterest + yearlyContribution;
      investedCapital += yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: calculatedCurrentSavings,
        yearlyContribution: yearlyContribution,
        investedCapital: investedCapital,
      });
    }
  }

  return (
    <div>
      <Header />
      <InputForm onCalculate={calculateHandler} />
      {!userInput && <p style={{textAlign: 'center'}}>Calculate an Investment</p>}
      {userInput && (
        <InvestmentTable
          investmentReturn={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
