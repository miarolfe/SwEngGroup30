"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Modal from "@/components/Modal/Modal";
import Quote from "@/components/Quote/Quote";

const UserQuoteList = () => {
    const placeholderQuote: QuoteDetails = {
        premium: -1000,
        amountInsured: 300000,
        maxYearInsured: 50,
      };
    
      const placeHolderReturn: ReturnedQuotes = {
        entryLevelRecommendation: placeholderQuote,
        highLevelRecommendation: placeholderQuote,
        premiumLevelRecommendation: placeholderQuote,
      };

    const [quotes, setQuotes] = useState([placeHolderReturn]);
    const { data: session } = useSession();

    const initDisplay = async () => {
        await fetch(`http://0.0.0.0:8000/api/user/quotelist/api/user/quotelist/${session?.user?.id}`, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "authId": `${session?.user?.id}`
            },
        })
        .then((data) => data.json())
        .then((data) => data.quoteHistory)
        .then((data) => setQuotes(data));
    }

    useEffect(() => {
        initDisplay();
    }, []);

    return (
        <div>
            {quotes.map((quote) => <Modal triggerEl={`${String(quote.entryLevelRecommendation.premium)}
                                        \n${String(quote.highLevelRecommendation.premium)}
                                        \n${String(quote.premiumLevelRecommendation.premium)}`}>
                                        <Quote {...quote} />
                                   </Modal>)}
        </div>
    );
}

export default UserQuoteList;