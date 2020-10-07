import Logger from "@reactioncommerce/logger";
import RazorpayCreateRefund from "../util/razorpayCreateRefund.js";

/**
 * @name razorpayCreateRefund
 * @method
 * @summary Capture a Razorpay Payment
 * @param {Object} context an object containing the per-request state
 * @param {Object} input object containing all input to create the order
 * @returns {Object} list refunds result
 * @private
 */
export default async function razorpayCreateRefund(context, { orderId }) {
  const input = {
    transactionId: orderId
  };

  Logger.info("Create Refund Input", input);

  const response = await RazorpayCreateRefund(context, input);

  Logger.info("Create Refund Response: ", response);
  return null;
}
