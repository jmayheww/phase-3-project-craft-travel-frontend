function createUserTrip(userId, tripId) {
  fetch("http://localhost:9292/userstrips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      trip_id: tripId,
      user_id: userId,
    }),
  })
    .then((resp) => {
      console.log("resp: ", resp);
      if (resp.ok) {
        return resp.json();
      }
      throw new Error("User is already signed up for this trip.");
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

export { createUserTrip };
