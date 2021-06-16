import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { createDeck } from "../utils/api/index.js";

function CreateDeck(){
    const [newDeck, setNewDeck ] = useState();
    const history = useHistory();

    function submitHandler(e) {
        e.preventDefault();
        createDeck(newDeck).then((output) => history.push(`/decks/${output.id}`));
    }

    function handleCancel(){
        history.push("/")
    }

    function changeName(e) {
        setNewDeck({ ...newDeck, name: e.target.value });
    }

    function changeDesc(e) {
        setNewDeck({ ...newDeck, description: e.target.value });
    }
    return(
    <div>
        <div>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                    Create Deck
                 </li>
            </ol>
            </nav>
        </div>

        <div>
            <h1>Create Deck</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">
                    Name</label>
                    <input
                    type="Name" 
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Deck Name"
                    onChange={changeName}/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    placeholder="Brief Description of the Deck" 
                    rows="3"
                    onChange={changeDesc}></textarea>
                </div>
                <button type="submit" className="btn btn-primary m-1">Submit</button>
                <button type="button" className="btn btn-secondary m-1" onClick={handleCancel}>Cancel</button>
            </form>
        </div> 
    </div>
    )
}

export default CreateDeck;