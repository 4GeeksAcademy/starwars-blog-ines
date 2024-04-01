const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl = "https://swapi.tech/api/"
	return {
		store: {
				characters: [],
				planets: [],
				vehicles: [],
				details: {},
				favorites: []
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
				let listFav = getStore().favorites
				let newFav = name
				let newListFav = listFav.concat(newFav) 
				setStore({favorites : newListFav})
			},
			removeFav: (name) => {
				let listFav = getStore().favorites
				let newListFav = listFav.filter((item)=> name !== item )
				setStore({favorites : newListFav})
			},
			favorites:(name) => {
				let favNames = getStore().favorites
				if (getStore().favorites.length == 0) {
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
