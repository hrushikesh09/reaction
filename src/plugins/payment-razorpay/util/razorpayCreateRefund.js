
import Logger from "@reactioncommerce/logger";
import getRazorpayInstanceForShop from "./getRazorpayInstanceForShop.js";
import formatForRazorpay from "./formatForRazorpay.js";

/**
 * @name razorpayCreateRefund
 * @method
 * @summary Create refund
 * @param {Object} context an object containing the per-request state
 * @param {Object} paymentMethod object containing transaction ID
 * @returns {Object} create refund result
 * @private
 */
export default async function razorpayCreateRefund(context, paymentMethod) {
  const razorpay = await getRazorpayInstanceForShop(context, paymentMethod);

  Logger.info("Creating Refund...");

  const inputAmount = formatForRazorpay(paymentMethod.amount);
  let result;
  let paymentResults;

  try {
    paymentResults = await razorpay.orders.fetchPayments(paymentMethod.transactionId);
    if (paymentResults.items.length > 0) {
      const refundResult = await razorpay.payments.refund(paymentResults.items[0].id, inputAmount);
      Logger.debug(refundResult);

      result = {
        saved: true,
        response: refundResult
      };
    }
  } catch (error) {
    Logger.error(error);
    result = {
      saved: false,
      error: `Cannot issue refund: ${error.message}`
    };
    Logger.fatal("Razorpay call failed, refund was not issued", error.message);
  }

  return result;
}
