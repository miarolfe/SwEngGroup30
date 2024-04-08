const UnderwriterQuoteCard = (props) => {
    const {userId, medicalRecord} = props.quote;
    return (
        <div>
            <h1>{medicalRecord.patientName}</h1>
            <p>age: {medicalRecord.age} </p>
            <p>sex: {medicalRecord.sex} </p>
            <p>hereditaryConditions: {medicalRecord.hereditaryConditions}</p>
            <p>healthConditions: {medicalRecord.healthConditions}</p>
            <p>Weekly alcohol consumption: {medicalRecord.drinkingHistroy}</p>
            <p>: {medicalRecord.smokingHistory}</p>
            <p>: {medicalRecord.excerciseHourPerWeek}</p>
            <p>: {medicalRecord.occupation}</p>
            <p>: {medicalRecord.yearlyIncomeInEuro}</p>
            <p>Country of reisidence: {medicalRecord.residenceCountry}</p>
            <p>Weight: {medicalRecord.weightInKG}kg</p>
            <p>Height: {medicalRecord.heightInCM}cm</p>
        </div>
    );
}

export default UnderwriterQuoteCard;