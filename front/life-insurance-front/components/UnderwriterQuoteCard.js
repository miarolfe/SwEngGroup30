const UnderwriterQuoteCard = (props) => {
    const {userId, medicalRecord} = props.quote;
    return (
        <div>
            <h1>{medicalRecord.patientName}</h1>
        </div>
    );
}

export default UnderwriterQuoteCard;