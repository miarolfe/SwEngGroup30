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
            {quoteData.map(quote => <Modal triggerEl={<button>{quote.medicalRecord.patientName}</button>}><UnderwriterQuoteCard quote={quote}/></Modal>)}
            <p> test the inputted text is recognised</p>
        </div>
    );
}

export default UnderwriterQuoteList;