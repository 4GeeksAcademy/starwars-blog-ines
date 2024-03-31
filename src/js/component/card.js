import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Card = (props) => {
    const {store, actions}= useContext(Context)
    const isFavorite = store.favoritos.includes(props.item.name);
    const category = props.category === "people" ? "characters" :
                     props.category === "planets" ? "planets" :
                     props.category === "vehicles" ? "vehicles" : "";
    let noImageUrl = "";

if (props.category === "planets" && props.item.uid === "1") {
noImageUrl = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
}

	return (
        <div className="card m-3"style={{minWidth:"300px"}}>
            <img className="image"
				src={noImageUrl !== "" ? noImageUrl : `https://starwars-visualguide.com/assets/img/${category}/${props.item.uid}.jpg`}
				alt="image"
			/>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text mb-0"> {
                    props.category == "people" ? "Gender: " : /* + props.item.gender : */
                    props.category == "planets" ? "Population: " : /* + props.item.population : */
                    props.category == "vehicles" ? "Cargo Capacity: " : "" /* + props.item.cargo_capacity : "" */
                 }</p>
                <p className="card-text mb-0"> {
                    props.category == "people" ? "Hair color: " : /* + props.item.hair_color : */
                    props.category == "planets" ? "Terrain: " : /* + props.item.terrain : */
                    props.category == "vehicles" ? "Consumables: " : "" /* + props.item.consumables : "" */    
                }</p>
                <p className="card-text"> {
                    props.category == "people" ? "Eye-Color: " : /* + props.item.eye_color : */
                    props.category == "planets" ? "Climate: " : /* + props.item.climate : */
                    props.category == "vehicles" ? "Crew: " : "" /* + props.item.crew : "" */ 
                }</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/details/${props.category}/${props.item.uid}`}>
                        <button className="btn text-primary border-primary">Learn More!</button>
                    </Link>
                    
                    <button className={`corazon btn btn-outline-warning`} onClick={() => actions.favoritos(props.item.name)}>
                        <i className={`fa-heart ${isFavorite ? "fas text-warning" : "far"}`}></i>
                    </button>
                    
                </div>
            </div>
        </div>	
	);
};
