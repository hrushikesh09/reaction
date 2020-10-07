import Logger from "@reactioncommerce/logger";
import RazorpayCapturePayment from "../util/razorpayCapturePayment.js";

/**
 * @name razorpayCapturePayment
 * @method
 * @summary Capture a Razorpay Payment
 * @param {Object} context an object containing the per-request state
 * @param {Object} input object containing all input to create the order
 * @returns {Object} list refunds result
 * @private
 */
export default async function razorpayCapturePayment(context, { orderId, amount }) {
  const input = {
    transactionId: orderId,
    amount
  };

  Logger.info("Capture Payment Input", input);

  const response = await RazorpayCapturePayment(context, input);

  Logger.info("Capture Payment Response: ", response);
  return null;
}
