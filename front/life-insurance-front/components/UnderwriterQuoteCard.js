import { useState } from "react";
import { useSession } from "next-auth/react";

const UnderwriterQuoteCard = (props) => {
    const {userId, medicalRecord} = props.quote;
    const [prem1, setPrem1] = useState("");
    const [prem2, setPrem2] = useState("");
    const [prem3, setPrem3] = useState("");
    const {data: session} = useSession();

    async function deleteQuote() {
        fetch("http://0.0.0.0:8000/api/quoteRequest/`{quote.userId}", {
            method: "GET",
            headers: {"authID": session?.user?.id},
            body: {
                entryLevelRecommendation: {
                    premium: prem3
                }
            }
        });
    }

    return (
        <div>
            <div>
                <h1>{medicalRecord.patientName}</h1>
                <table className="w-full">
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
            <form onSubmit={deleteQuote} className="w-full flex flex-initial gap-4 ">
                <div className="mb-4">
                    <label htmlFor="prem1" className="block mb-2">Premium Rate</label>
                    <input
                        type="text"
                        id="prem1"
                        value={prem1}
                        onChange={(e) => setPrem1(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="prem2" className="block mb-2">High Rate:</label>
                    <input
                        type="text"
                        id="prem2"
                        value={prem2}
                        onChange={(e) => setPrem2(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="prem3" className="block mb-2">Entry Rate:</label>
                    <input
                        type="text"
                        id="prem3"
                        value={prem3}
                        onChange={(e) => setPrem3(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent"
                    />
                </div>
                <button type="submit" className="w-40 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Submit</button>
            </form>
        </div>
    );
}

export default UnderwriterQuoteCard;