import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";

function Decks({ deckId, name, description, count}){
    const { url } = useRouteMatch();

    return(
        <div className="card">
            <div className="card-body">
                <h5 className="title">{name}
                <span className="badge text-muted float-right">{count} cards</span></h5>
                <p>{description}</p>
                <div className="col">
                    <Link to={`${url}decks/${deckId}`}>
                        <button type="button" className="btn btn-secondary mr-2">
                        <i className="bi bi-eye"></i> View
                        </button>
                    </Link>
                    <Link to={`${url}decks/${deckId}/study`}>
                        <button type="button" className="btn btn-info mr-2">
                         <i className="bi bi-book"></i> Study
                         </button>
                    </Link>
                        <button type="button" className="btn btn-danger float-right">
                        <i className="bi bi-trash"></i> Delete
                        </button>
                    </div>
            </div>
        </div>

    )
}

export default Decks; 