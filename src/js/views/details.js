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
		<div className="principal bg-dark">
			<div className="d-flex ms-3 me-1">
				<div className="mt-3">
					<img className="imageDetails border-end border-danger border-2 rounded-start"
						src={noImageUrl !== "" ? noImageUrl : `https://starwars-visualguide.com/assets/img/${category}/${params.uid}.jpg`}
						alt="image"
					/>
				</div>
				<div className="w-75 mt-3 bg-secondary bg-opacity-25 me-2 text-white rounded-end">
					<h1 className="ms-3">{store.details.name?.toUpperCase()}</h1>
					<p className="ms-3">{store.details.description}</p>
				</div>
			</div>
			<div className="d-flex d-flex text-danger text-primary text-opacity-50 pb-2">
				<div className="mt-4 border-end border-secondary border-2 ps-4 pe-5">
					<h6 className="text-white"> {
						params.category == "people" ? "NAME" :
						params.category == "planets" ? "CLIMATE" :
						params.category == "vehicles" ? "CREW" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.name:
						params.category == "planets" ? store.details.climate :
						params.category == "vehicles" ? store.details.crew : ""
					}</p>
				</div>
				<div className="mt-4 border-end border-secondary border-2 ps-3 pe-5">
					<h6 className="text-white"> {
						params.category == "people" ? "BIRTH YEAR" :
						params.category == "planets" ? "DIAMETER" :
						params.category == "vehicles" ? "MODEL" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.birth_year:
						params.category == "planets" ? store.details.diameter :
						params.category == "vehicles" ? store.details.model : ""
					}</p>
				</div>
				<div className="mt-4 border-end border-secondary border-2 ps-3 pe-5">
					<h6 className="text-white"> {
						params.category == "people" ? "GENDER" :
						params.category == "planets" ? "TERRAIN" :
						params.category == "vehicles" ? "MANUFACTURER" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.gender:
						params.category == "planets" ? store.details.terrain :
						params.category == "vehicles" ? store.details.manufacturer : ""
					}</p>
				</div>
				<div className="mt-4 border-end border-secondary border-2 ps-3 pe-5">
					<h6 className="text-white"> {
						params.category == "people" ? "HEIGTH" :
						params.category == "planets" ? "ORBITAL PERIOD" :
						params.category == "vehicles" ? "LENGTH" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.height:
						params.category == "planets" ? store.details.orbital_period :
						params.category == "vehicles" ? store.details.length : ""
					}</p>
				</div>
				<div className="mt-4 border-end border-secondary border-2 ps-3 pe-5">
					<h6 className="text-white"> {
						params.category == "people" ? "SKIN COLOR" :
						params.category == "planets" ? "POPULATION" :
						params.category == "vehicles" ? "PASSENGERS" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.skin_color:
						params.category == "planets" ? store.details.population :
						params.category == "vehicles" ? store.details.passengers : ""
					}</p>
				</div>
				<div className="mt-4 border-end border-secondary border-2 ps-3 pe-5">
					<h6 className="text-white"> {
						params.category == "people" ? "EYE COLOR" :
						params.category == "planets" ? "GRAVITY" :
						params.category == "vehicles" ? "CONSUMABLES" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.eye_color:
						params.category == "planets" ? store.details.gravity :
						params.category == "vehicles" ? store.details.consumables : ""
					}</p>
				</div>
				<div className="mt-4 border-end border-secondary border-2 ps-3 pe-5">
					<h6 className="text-white"> {
						params.category == "people" ? "EDITED" :
						params.category == "planets" ? "EDITED" :
						params.category == "vehicles" ? "EDITED" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.edited:
						params.category == "planets" ? store.details.edited :
						params.category == "vehicles" ? store.details.edited : ""
					}</p>
				</div>
				<div className="mt-4 ps-3 pe-5">
					<h6 className="text-white"> {
						params.category == "people" ? "CREATED" :
						params.category == "planets" ? "CREATED" :
						params.category == "vehicles" ? "CREATED" : ""
					}</h6>
					<p> {
						params.category == "people" ? store.details.created:
						params.category == "planets" ? store.details.created :
						params.category == "vehicles" ? store.details.created : ""
					}</p>
				</div>
			</div>
		</div>
    );
};
				