
import Logger from "@reactioncommerce/logger";
import getRazorpayInstanceForShop from "./getRazorpayInstanceForShop.js";
import formatForRazorpay from "./formatForRazorpay.js";

/**
 * @name razorpayCapturePayment
 * @method
 * @summary Capture payments
 * @param {Object} context an object containing the per-request state
 * @param {Object} paymentMethod object containing transaction ID
 * @returns {Object} capture payment result
 * @private
 */
export default async function razorpayCapturePayment(context, paymentMethod) {
  const razorpay = await getRazorpayInstanceForShop(context, paymentMethod);

  Logger.info("Capturing Payments...");

  const inputAmount = formatForRazorpay(paymentMethod.amount);
  let paymentResult;
  let capturedPaymentResponse;
  const result = {};

  try {
    paymentResult = await razorpay.orders.fetchPayments(paymentMethod.transactionId);
    if (paymentResult && paymentResult.items) {
      capturedPaymentResponse = await razorpay.payments.capture(paymentResult.items[0].id, inputAmount);
      if (capturedPaymentResponse.status === "captured") {
        result.saved = true;
      }
    }
  } catch (error) {
    Logger.info("Encountered an error while trying to Capture payment", error.message);
    Logger.debug(error);
    result.error = error;
    result.errorCode = error.error_code;
    result.errorMessage = error.error_description;
  }

  Logger.info("PAYMENTS: ", paymentResult);
  Logger.info("Capture Payment Result: ", capturedPaymentResponse);

  result.response = capturedPaymentResponse;
  return result;
}
