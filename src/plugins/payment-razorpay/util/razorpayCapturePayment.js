
import Logger from "@reactioncommerce/logger";
import getRazorpayInstanceForShop from "./getRazorpayInstanceForShop.js";

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

  return [];
}