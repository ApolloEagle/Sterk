const axios = require("axios");
require("dotenv").config();

const getAthlete = async () => {
  try {
    const { data } = await axios.get("https://www.strava.com/api/v3/athlete", {
      params: {
        access_token: process.env.ACCESS_TOKEN,
      },
    });
    console.log("Response: ", data);
  } catch (error) {
    console.log("Error: ", error.response.data);
  }
};

getAthlete();
