import { useState, useEffect } from "react";
import Modal from "@/components/Modal/Modal";
import UnderwriterQuoteCard from "./UnderwriterQuoteCard";
import { useSession } from "next-auth/react";
const UnderwriterQuoteList = () => {
    const [quoteData, setQuoteData] = useState([]);
    const {data: session} = useSession();

    const initSetup = async () => {
        await fetch("http://18.168.50.21:80/api/quoteRequest/get", {method: "GET", headers: {"authID": session?.user?.id}})
        .then((data) => data.json())
        .then((data) => setQuoteData(data));
    }
    
    useEffect(() => {
        initSetup();
    }, []);

    return (
        <div>
            {quoteData.map(quote => <Modal triggerEl={<div className="glass border-[1px] border-white mb-2 table-auto cursor-pointer">{quote.medicalRecord.patientName}</div>}><UnderwriterQuoteCard quote={quote}/></Modal>)}
        </div>
    );
}

export default UnderwriterQuoteList;