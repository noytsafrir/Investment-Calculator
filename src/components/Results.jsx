import {calculateInvestmentResults, formatter} from '../util/investment.js'

export default function Results({input}){
    const results = calculateInvestmentResults(input);
    const initialInvestment = results[0].valueEndOfYear - results[0].annualInvestment - results[0].interest;
    console.log(results);
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Investment</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map(resultData => {
                    const totalInvestment= 
                        resultData.valueEndOfYear - 
                        resultData.annualInvestment * resultData.year - 
                        initialInvestment;
                    const totalAmountInvested = 
                        resultData.annualInvestment * resultData.year + 
                        initialInvestment;

                    return(
                        <tr key={resultData.year}>
                            <td>{resultData.year}</td>
                            <td>{formatter.format(resultData.valueEndOfYear)}</td>
                            <td>{formatter.format(resultData.interest)}</td>
                            <td>{formatter.format(totalInvestment)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}

                {/* {results.map((result, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{result.investmentValue}</td>
                            <td>{result.interest}</td>
                            <td>{result.totalInvestment}</td>
                            <td>{result.investedCapital}</td>
                        </tr>
                    );
                })} */}
            </tbody>
        </table>
    );
}