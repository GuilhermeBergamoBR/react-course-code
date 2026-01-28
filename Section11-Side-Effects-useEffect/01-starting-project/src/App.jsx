import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const selectedPlace = useRef(); // referencia para lugar selecionado
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces); // array de lugares escolhidos

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      const sorted = sortPlacesByDistance(
        AVAILABLE_PLACES,
        latitude,
        longitude
      );

      setAvailablePlaces(sorted);
    });
  }, []);

  function handleStartRemovePlace(id) {
    // handler quando usuário inicia remoção de um lugar
    setModalIsOpen(true); // abre modal
    selectedPlace.current = id; // ref recebe o id do lugar selecionado
  }

  function handleStopRemovePlace() {
    // handler quando para remoção de lugar
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    // handler quando seleciona-se um lugar
    setPickedPlaces((prevPickedPlaces) => {
      //atualiza estado de lugares escolhidos
      if (prevPickedPlaces.some((place) => place.id === id)) {
        // se o lugar já foi escolhido
        return prevPickedPlaces; // nada muda
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id); // encontra lugar baseado no id
      return [place, ...prevPickedPlaces]; // adiciona lugar à lista de escolhidos
    });

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces(
      (prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current) //filtra lugares que não são o selecionado
    ); // atualiza a lista
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem("selectedplaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  }, []);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText={"Sorting places by distance"}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
