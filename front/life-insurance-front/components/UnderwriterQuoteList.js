import { useState, useEffect } from "react";
import Modal from "@/components/Modal/Modal";
import UnderwriterQuoteCard from "./UnderwriterQuoteCard";
const UnderwriterQuoteList = () => {
    const [quoteData, setQuoteData] = useState([]);

    const initSetup = async () => {
        await fetch("http://0.0.0.0:8000/api/quoteRequest/get").then((data) => data.json()).then((data) => setQuoteData(data));
    }
    
    useEffect(() => {
        initSetup();
    }, []);

    return (
        <div>
            {quoteData.map(quote => <Modal triggerEl={quote.medicalRecord.patientName}><UnderwriterQuoteCard quote={quote}/></Modal>)}
        </div>
    );
}

export default UnderwriterQuoteList;