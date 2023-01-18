function createUserTrip(userId, tripId, setState) {
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
      if (resp.ok) {
        return resp.json();
      }
      throw new Error("User is already signed up for this trip.");
    })
    .then((newUsersTrip) => {
      return setState((currentDetails) => {
        return [...currentDetails, newUsersTrip];
      });
    });
}

export { createUserTrip };
