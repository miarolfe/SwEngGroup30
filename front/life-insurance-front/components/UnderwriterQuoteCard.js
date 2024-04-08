const UnderwriterQuoteCard = (props) => {
    const {userId, medicalRecord} = props.quote;
    return (
        <div>
            <h1>{medicalRecord.patientName}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Age:</td>
                        <td>{medicalRecord.age}</td>
                    </tr>
                    <tr>
                        <td>Sex:</td>
                        <td>{medicalRecord.sex}</td>
                    </tr>
                    <tr>
                        <td>Hereditary Conditions:</td>
                        <td>{medicalRecord.hereditaryConditions}</td>
                    </tr>
                    <tr>
                        <td>Health Conditions:</td>
                        <td>{medicalRecord.healthConditions}</td>
                    </tr>
                    <tr>
                        <td>Average Weekly Alcohol Consumption:</td>
                        <td>{medicalRecord.drinkingHistory}</td>
                    </tr>
                    <tr>
                        <td>Average Cigarettes Smoked Per Week:</td>
                        <td>{medicalRecord.smokingHistory}</td>
                    </tr>
                    <tr>
                        <td>Average Hours of Exercise Per Week:</td>
                        <td>{medicalRecord.excerciseHourPerWeek}</td>
                    </tr>
                    <tr>
                        <td>Occupation:</td>
                        <td>{medicalRecord.occupation}</td>
                    </tr>
                    <tr>
                        <td>Yearly Income:</td>
                        <td>€{medicalRecord.yearlyIncomeInEuro}</td>
                    </tr>
                    <tr>
                        <td>Country of Residence:</td>
                        <td>{medicalRecord.residenceCountry}</td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td>{medicalRecord.weightInKG}kg</td>
                    </tr>
                    <tr>
                        <td>Height:</td>
                        <td>{medicalRecord.heightInCM}cm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UnderwriterQuoteCard;