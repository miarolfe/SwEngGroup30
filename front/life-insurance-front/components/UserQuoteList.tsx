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
    const { data: session, status } = useSession();

    const initDisplay = async () => {
      if (status ===  "authenticated") {
        await fetch(`http://18.168.50.21:8000/api/user/quotelist/api/user/quotelist/${session?.user?.id}`, {
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
    }

    useEffect(() => {
        initDisplay();
    }, [status]);

    return (
        <div className="grid grid-cols-10 gap-4 content-around">
            {quotes.map((quote) => {
              return (
                <Modal triggerEl={
                  <table className= "glass border-[1px] border-white mb-2 table-auto" style={{cursor: "pointer"}}>
                    <tbody>
                      <tr className="border-[1px] border-white">
                        <td>Premium:</td>
                        <td>€{quote.premiumLevelRecommendation.premium.toFixed(0)}</td>
                      </tr>
                      <tr className="border-[1px] border-white">
                        <td>High:</td>
                        <td>€{quote.highLevelRecommendation.premium.toFixed(0)}</td>
                      </tr>
                      <tr className="border-[1px] border-white">
                        <td>Entry:</td>
                        <td>€{quote.entryLevelRecommendation.premium.toFixed(0)}</td>
                      </tr>
                    </tbody>
                  </table>
                }>
                  <Quote {...quote} />
                </Modal>
              );
            })
          }
      </div>
    );
}

export default UserQuoteList;