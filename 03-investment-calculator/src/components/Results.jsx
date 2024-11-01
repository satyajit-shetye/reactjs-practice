import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
	const resultData = calculateInvestmentResults(userInput);
	const initialInvestment =
		resultData[0].valueEndOfYear -
		resultData[0].interest -
		resultData[0].annualInvestment;

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Investment Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultData.map((item) => {
					const totalInterest =
						item.valueEndOfYear -
						item.annualInvestment * item.year -
						initialInvestment;

					const totalAmountInterest = item.valueEndOfYear - totalInterest;
					return (
						<tr>
							<td>{item.year}</td>
							<td>{formatter.format(item.valueEndOfYear)}</td>
							<td>{formatter.format(item.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInterest)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
