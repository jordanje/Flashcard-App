import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api/index";


function Study(){
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});

    useEffect(() => {
      const abortController = new AbortController();
  
      const loadingDeck = async () => {
        try {
          const data = await readDeck(deckId, abortController.signal);
          setDeck(() => {
            return data;
          });
          
        } catch (error) {
          if (error.name === "AbortError") {
            console.log(error);
          } else {
            throw error;
          }
        }
      };
      loadingDeck()
  
      return () => {
        abortController.abort();
      };
    }, [deckId]);
  

     console.log(deck)
    
    return (
        <div>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                 </li>
                <li className="breadcrumb-item active" aria-current="page">
                     Study
                </li>
            </ol>
            </nav>
            <h1>Study: {deck.name}</h1>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Card 1 of 3</h5>
                    <p>This is some text within a card body.</p>
                    <button type="button" className="btn btn-secondary">Flip</button>
                </div>
            </div>
        </div>
    )
}

export default Study;