import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorAlert from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
	const [places, setPlaces] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	// useEffect(() => {
	// 	fetch("http://localhost:3000/places")
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((resData) => {
	// 			setPlaces(resData.places);
	// 		});
	// }, []);

	useEffect(() => {
		async function getPlaces() {
			setIsLoaded(true);

			try {
				const places = await fetchAvailablePlaces();
				navigator.geolocation.getCurrentPosition((position) => {
					const sortedPlaces = sortPlacesByDistance(
						places,
						position.coords.latitude,
						position.coords.longitude
					);
					setPlaces(sortedPlaces);
				});

				setIsLoaded(false);
			} catch (error) {
				setError({
					message:
						error.message ||
						"Something went wrong. Please contact administrator.",
				});
				setIsLoaded(false);
			}
		}
		getPlaces();
	}, []);

	if (error) {
		return (
			<ErrorAlert
				title="Error"
				message={error.message}
				onConfirm={() => setError(null)}
			/>
		);
	}

	return (
		<Places
			title="Available Places"
			places={places}
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
			isLoaded={isLoaded}
			loadingText="Data are loading..."
		/>
	);
}
