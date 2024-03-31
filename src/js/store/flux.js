const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl = "https://swapi.tech/api/"
	return {
		store: {
				characters: [],
				planets: [],
				vehicles: [],
				details: {},
				favoritos: []
		},
		actions: {
			getCharacters: () => {
				fetch(apiUrl + "people") 
				.then((response) => response.json())
				.then((data) => {
					setStore({characters: data.results})
				})
				.catch((error) => console.log(error))
			},
			getPlanets: () => {
				fetch(apiUrl + "planets") 
				.then((response) => response.json())
				.then((data) => {
					setStore({planets: data.results})
			   })
				.catch((error) => console.log(error))
			},
			getVehicles: () => {
				fetch(apiUrl + "vehicles") 
				.then((response) => response.json())
				.then((data) => {
					setStore({vehicles: data.results})
			   })
				.catch((error) => console.log(error))
			},
			getDetails: (category, uid) => {
				fetch(`https://swapi.tech/api/${category}/${uid}`) 
				.then((response) => response.json())
				.then((data) => setStore({
					details: {
						...data.result.properties,
						description: data.result.description
					}
				}))
				.catch((error) => console.log(error))
			},
			addFav: (name) => {
				let listadeFav = getStore().favoritos
				let nuevoFav = name
				let nuevaListaDeFav = listadeFav.concat(nuevoFav) 
				setStore({favoritos : nuevaListaDeFav})
			},
			removeFav: (name) => {
				let listadeFav = getStore().favoritos
				let nuevaListaDeFav = listadeFav.filter((item)=> name !== item )
				setStore({favoritos : nuevaListaDeFav})
			},
			favoritos:(name) => {
				let favNames = getStore().favoritos
				if (getStore().favoritos.length == 0) {
					getActions().addFav(name)
				} else {
					if (favNames.includes(name)) {
						getActions().removeFav(name)
					} else {
						getActions().addFav(name)
					}
				}
			}
		}
	};
};

export default getState;
