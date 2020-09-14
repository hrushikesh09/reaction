import config from "../config.js";
import getRazorpayInstance from "./getRazorpayInstance.js";

/**
 * @summary Given a shop ID, gets an instance of the Razorpay API configured with that shop's API key.
 * @param {Object} context The context object
 * @returns {Object} The Razorpay SDK object
 */
export default async function getStripeInstanceForShop(context) {
  const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = config;

  return getRazorpayInstance(context, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET);
}
