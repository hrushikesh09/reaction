
import Logger from "@reactioncommerce/logger";
import getRazorpayInstanceForShop from "./getRazorpayInstanceForShop.js";

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

  return [];
}