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
  const result = [];

  try {
    paymentResult = await razorpay.orders.fetchPayments(paymentMethod.transactionId);
    if (paymentResult && paymentResult.items) {
      refundListResults = await razorpay.refunds.all(paymentResult.items[0].id);
      Logger.debug(refundListResults);
    }
  } catch (error) {
    Logger.info("Encountered an error when trying to list refunds", error.message);
  }

  if (refundListResults && refundListResults.items) {
    for (const item of refundListResults.items) {
      result.push({
        type: item.object,
        amount: item.amount / 100,
        currency: item.currency,
        raw: item
      });
    }
  }

  Logger.info("PAYMENT METHOD", paymentMethod);
  Logger.info("PAYMENTS: ", paymentResult);
  Logger.info("REFUND LISTS: ", refundListResults);
  return result;
}
