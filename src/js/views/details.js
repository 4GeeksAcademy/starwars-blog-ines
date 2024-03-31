import React, {useEffect, useContext} from "react";
import {useParams } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import "../../styles/details.css";

export const Details = () => {
    const {store, actions} = useContext(Context);
	const  params  = useParams();
	const category = params.category === "people" ? "characters" :
					 params.category === "planets" ? "planets" :
					 params.category === "vehicles" ? "vehicles" : "";
	let noImageUrl = "";

	if (params.category === "planets" && params.uid === "1") {
		noImageUrl = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
	}
		
	useEffect (() => {
		actions.getDetails(params.category, params.uid)
	}, []);

    return (
		<div>
			<div className="d-flex rounded-2 ms-5">
				<div className="mt-1 mb-5">
					<img className="imageDetails"
						src={noImageUrl !== "" ? noImageUrl : `https://starwars-visualguide.com/assets/img/${category}/${params.uid}.jpg`}
						alt="image"
					/>
				</div>
				<div className="text-center w-100 mt-3">
					<h1 className="ms-3">{store.details.name}</h1>
					<p className="ms-3">{store.details.description}</p>
				</div>
			</div>
			<div className="d-flex justify-content-between text-danger ms-5 border-top border-danger border-2">
				<div className="mt-4 ms-5">
					<h6> {
						params.category == "people" ? "Name" :
						params.category == "planets" ? "Climate" :
						params.category == "vehicles" ? "Crew" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.name:
						params.category == "planets" ? store.details.climate :
						params.category == "vehicles" ? store.details.crew : ""
					}</p>
				</div>
				<div className="mt-4 ms-3">
					<h6> {
						params.category == "people" ? "Birth Year" :
						params.category == "planets" ? "Diameter" :
						params.category == "vehicles" ? "Model" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.birth_year:
						params.category == "planets" ? store.details.diameter :
						params.category == "vehicles" ? store.details.model : ""
					}</p>
				</div>
				<div className="mt-4 ms-3">
					<h6> {
						params.category == "people" ? "Gender" :
						params.category == "planets" ? "Terrain" :
						params.category == "vehicles" ? "Manufacturer" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.gender:
						params.category == "planets" ? store.details.terrain :
						params.category == "vehicles" ? store.details.manufacturer : ""
					}</p>
				</div>
				<div className="mt-4 ms-3">
					<h6> {
						params.category == "people" ? "Height" :
						params.category == "planets" ? "Climate" :
						params.category == "vehicles" ? "Lenght" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.height:
						params.category == "planets" ? store.details.climate :
						params.category == "vehicles" ? store.details.lenght : ""
					}</p>
				</div>
				<div className="mt-4 ms-3">
					<h6> {
						params.category == "people" ? "Skin Color" :
						params.category == "planets" ? "Population" :
						params.category == "vehicles" ? "Passengers" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.skin_color:
						params.category == "planets" ? store.details.population :
						params.category == "vehicles" ? store.details.passengers : ""
					}</p>
				</div>
				<div className="mt-4 ms-3 me-2 me-5">
					<h6> {
						params.category == "people" ? "Eyer Color" :
						params.category == "planets" ? "Gravity" :
						params.category == "vehicles" ? "Consumables" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.eye_color:
						params.category == "planets" ? store.details.gravity :
						params.category == "vehicles" ? store.details.consumables : ""
					}</p>
				</div>
			</div>
		</div>
    );
};
				