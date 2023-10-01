import React from "react";
import classes from "./InvestmentTable.module.css"

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InvestmentTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.investmentReturn.map((yearlyReturn) => (
          <tr key={yearlyReturn.year}>
            <td>{yearlyReturn.year}</td>
            <td>{formatter.format(yearlyReturn.savingsEndOfYear)}</td>
            <td>{formatter.format(yearlyReturn.yearlyInterest)}</td>
            <td>
              {formatter.format(
                yearlyReturn.savingsEndOfYear -
                  props.initialInvestment -
                  yearlyReturn.yearlyContribution * yearlyReturn.year
              )}
            </td>
            <td>{formatter.format(yearlyReturn.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
