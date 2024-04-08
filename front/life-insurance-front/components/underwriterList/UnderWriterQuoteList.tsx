import React, { useState, useEffect } from 'react';
import AcceptRejectButton from '@/components/acceptRejectButton';
// import UnderwriterQuoteList from '@components/UnderwriterQuoteList';

interface Claim {
    id: number;
    description: string;
    status: 'pending' | 'accepted' | 'rejected';
}


function UnderWriterQuoteList() {
    const initialClaims = [
        { id: 1, description: "Claim 1", status: "pending" },
        { id: 2, description: "Claim 2", status: "pending" },
        { id: 3, description: "Claim 3", status: "pending" }
    ];

    const [claims, setClaims] = useState(initialClaims);


    const handleAccept = (id: number) => {
        const updatedClaims = claims.map(claim => {
            if (claim.id === id) {
                return { ...claim, status: 'accepted' };
            }
            return claim;
        });
        setClaims(updatedClaims);
    };

    const handleReject = (id: number) => {
        const updatedClaims = claims.map(claim => {
            if (claim.id === id) {
                return { ...claim, status: 'rejected' };
            }
            return claim;
        });
        setClaims(updatedClaims);
    };

    

    return (
        <div>
            <ul>
                {claims.map(claim => (
                    <li key={claim.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        {claim.description} - {claim.status}
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