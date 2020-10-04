import Logger from "@reactioncommerce/logger";
import getRazorpayInstanceForShop from "./getRazorpayInstanceForShop.js";

/**
 * @name razorpayListRefunds
 * @method
 * @summary List refunds
 * @param {Object} context an object containing the per-request state
 * @param {Object} paymentMethod object containing transaction ID
 * @returns {Object} list refunds result
 * @private
 */
export default async function razorpayListRefunds(context, paymentMethod) {
  const razorpay = await getRazorpayInstanceForShop(context, paymentMethod);

  let paymentResult;
  let refundListResults;

  try {
    paymentResult = await razorpay.orders.fetchPayments(paymentMethod.transactionId);
    if (paymentResult[0]) {
      refundListResults = await razorpay.refunds.all({ payment_id: paymentResult[0].id });
    }
  } catch (error) {
    Logger.info("Encountered an error when trying to list refunds", error.message);
  }

  Logger.info("PAYMENT METHOD", paymentMethod);
  Logger.info("PAYMENTS: ", paymentResult);
  Logger.info("REFUND LISTS: ", refundListResults);
  return [];
}