"use client";

import { useState, useEffect } from "react";
import UnderWriterQuoteCard from "@/components/UnderwriterQuoteCard";
const UnderwriterPage = () => {
    const [quoteData, setQuoteData] = useState([]);

    const initSetup = async () => {
        await fetch("http://0.0.0.0:8000/api/quoteRequest/get").then((data) => data.json()).then((data) => setQuoteData(data));
    }
    
    useEffect(() => {
        initSetup();
    }, []);

    return (
        <div>
            {quoteData.map(quote => <UnderWriterQuoteCard quote={quote}>{quote.medicalRecord.patientName}</UnderWriterQuoteCard>)}
        </div>
    );
}

export default UnderwriterPage;