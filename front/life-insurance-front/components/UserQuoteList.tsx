"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Modal from "@/components/Modal/Modal";
import Quote from "@/components/Quote/Quote";

const RecTable = (quote: ReturnedQuotes) => {
  return (
    <table>
      <tr>
        <td>Premium</td>
        <td>{quote.premiumLevelRecommendation.premium}</td>
      </tr>
    <tr>
      <td>High</td>
      <td>{quote.highLevelRecommendation.premium}</td>
    </tr>
    <tr>
      <td>Entry</td>
      <td>{quote.entryLevelRecommendation.premium}</td>
    </tr>
  </table>
  );
}

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
        <div className="flex-initial" style={{display: "flex", flexDirection: "row", gap: "15px"}}>
            {quotes.map((quote) => {
              return (
                <Modal triggerEl={
                  <table className= "glass border-[1px] border-white mb-2 table-auto" style={{cursor: "pointer"}}>
                    <tr className="border-[1px] border-white">
                      <td>Premium:</td>
                      <td>{quote.premiumLevelRecommendation.premium.toFixed(0)}</td>
                    </tr>
                    <tr className="border-[1px] border-white">
                      <td>High:</td>
                      <td>{quote.highLevelRecommendation.premium.toFixed(0)}</td>
                    </tr>
                    <tr className="border-[1px] border-white">
                      <td>Entry:</td>
                      <td>{quote.entryLevelRecommendation.premium.toFixed(0)}</td>
                    </tr>
                  </table>
                }>
                  <Quote {...quote} />
                </Modal>
              );
            })};
        </div>
    );
}

export default UserQuoteList;