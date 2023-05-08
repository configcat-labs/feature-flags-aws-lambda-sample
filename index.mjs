import * as configcat from "configcat-node";
import fetch from "node-fetch";

let configCatClient = configcat.getClient(
  "bzTbCEPv_E6GL6COig1QRQ/uZTJPJvsgUuyI8kCvbmXjg"
);


export const handler = async(event) => {
  const isSearchByArtisteEnabled = await configCatClient.getValueAsync(
    "searchbyartiste",
    false
  );

  let response_message = "";

  if (isSearchByArtisteEnabled) {
    const myData = await fetch(`https://api.deezer.com/search?q=eminem`);
    const myDataAsJson = await myData.json();
    response_message = myDataAsJson;
  } else {
    response_message = "Sorry, this feature is not available";
  }

  const response = {
      statusCode: 200,
      body: JSON.stringify(response_message),
  };
  return response;
};