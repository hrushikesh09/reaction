import Logger from "@reactioncommerce/logger";
import axios from "axios";
import { SHIPROCKET_AUTH_API_URL } from "./constants.js";

/**
 * @summary Get the auth token for Ship rocket.
 * @returns {String} ship rocket auth token.
 */
export default async function getAuthToken () {

  const email = "anirudhs23@iimklive.com";
  const password = "Anirudh@1992";

  try {
    const response = await axios.post(SHIPROCKET_AUTH_API_URL, { email, password });
    Logger.debug(response);

    // return a token
    return response.token;
  } catch (error) {
    Logger.error("Failed to Authenticate With Shiprocket", error);
  }
}

