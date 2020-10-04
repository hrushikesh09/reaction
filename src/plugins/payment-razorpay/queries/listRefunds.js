import Logger from "@reactioncommerce/logger";
import razorpayListRefunds from "../util/razorpayListRefunds.js";

/**
 * @name listRefunds
 * @method
 * @summary list Refunds
 * @param {Object} context an object containing the per-request state
 * @param {Object} input object containing all input to create the order
 * @returns {Object} list refunds result
 * @private
 */
export default async function listRefunds(context, { orderId }) {
  const input = {
    transactionId: orderId
  };

  Logger.info("List Refund Input", input);

  const response = await razorpayListRefunds(context, input);

  Logger.info("List Refund Response: ", response);
  return null;
}
