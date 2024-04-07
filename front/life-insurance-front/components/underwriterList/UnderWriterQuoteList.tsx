import React, { useState } from 'react';

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
                    <li key={claim.id}>
                        {claim.description} - {claim.status}
                        <button onClick={() => handleAccept(claim.id)}> Accept</button>
                        <button onClick={() => handleReject(claim.id)}> Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UnderWriterQuoteList;