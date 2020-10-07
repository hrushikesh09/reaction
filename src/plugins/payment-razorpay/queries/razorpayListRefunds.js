import Logger from "@reactioncommerce/logger";
import RazorpayListRefunds from "../util/razorpayListRefunds.js";

/**
 * @name razorpayListRefunds
 * @method
 * @summary list Razorpay Refunds
 * @param {Object} context an object containing the per-request state
 * @param {Object} input object containing all input to create the order
 * @returns {Object} list refunds result
 * @private
 */
export default async function razorpayListRefunds(context, { orderId }) {
  const input = {
    transactionId: orderId
  };

  Logger.info("List Refund Input", input);

  const response = await RazorpayListRefunds(context, input);

  Logger.info("List Refund Response: ", response);
  return null;
}
