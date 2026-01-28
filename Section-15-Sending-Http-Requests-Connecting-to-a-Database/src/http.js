export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Falhou em obter lugares");
  }

  return responseData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Falhou em obter lugares");
  }

  return responseData.places;
}


export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({places}),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Falhou em atualizar lugares do usuário");
  }

  return resData.message;
}
