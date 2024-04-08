import React, { useState, useEffect } from 'react';
import AcceptRejectButton from '@/components/acceptRejectButton';
// import UnderwriterQuoteList from '@components/UnderwriterQuoteList';

interface Claim {
    patientName: string;
    age: number;
    sex: string;
    hereditaryConditions: string[];
    healthConditions: string[];
    drinkingHistory: number;
    smokingHistory: number;
    weeklyExcerciseHours: number;
    occupation: string;
    yearlyIncomeInEuro: number;
    countryOfResidence: string;
    weightInKG: number;
    heightInCM: number;

    id: number;
    status: string;
}

    interface Props {
        claims: Claim[];
    }
    
    const UnderWriterQuoteList: React.FC<Props> = ({ claims }) => {
        const [localClaims, setLocalClaims] = useState<Claim[]>([]);
    
        useEffect(() => {
            setLocalClaims(claims);
        }, [claims]);



    const handleAccept = (id: number) => {
        const updatedClaims = claims.map(claim => {
            if (claim.id === id) {
                return { ...claim, status: 'accepted' };
            }
            return claim;
        });
        setLocalClaims(updatedClaims);
    };

    const handleReject = (id: number) => {
        const updatedClaims = claims.map(claim => {
            if (claim.id === id) {
                return { ...claim, status: 'rejected' };
            }
            return claim;
        });
        setLocalClaims(updatedClaims);
    };

    const displayData = (id: number) => {

    }

    

    return (
        <div>
            <ul>
                {claims.map(claim => (
                    <li key={claim.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        {claim.status}
                        <AcceptRejectButton
                        text='{claim.patientName}'
                        imageUrl=""
                        backgroundColor="#189BCC"
                        onClick={() => displayData(claim.id)}
                        />
                        <AcceptRejectButton
                        text="Accept"
                        imageUrl="" // if check is to be implemented
                        backgroundColor="#4CAF50"
                        onClick={() => handleAccept(claim.id)}
                    />
                    <AcceptRejectButton
                        text="Reject"
                        imageUrl="" // if cross is to be implemented
                        backgroundColor="#D32F2F" 
                        onClick={() => handleReject(claim.id)}
                    />
                    <br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UnderWriterQuoteList;