import Logger from "@reactioncommerce/logger";
import razorpayCreateAuthorizedPayment from "../util/razorpayCreateAuthorizedPayment.js";

/**
 * @name razorpayCreateOrder
 * @method
 * @summary Create a Razorpay Order
 * @param {Object} context an object containing the per-request state
 * @param {Object} input object containing all input to create the order
 * @returns {Object} create order result
 * @private
 */
export default async function razorpayCreateOrder(context, { amount, accountId, billingAddress, email, shopId, paymentData }) {
  const input = {
    accountId,
    amount,
    billingAddress,
    email,
    shopId,
    paymentData: {
      fullName: paymentData.fullName,
      notes: paymentData.notes,
      receipt: paymentData.receipt
    }
  };

  Logger.info("Create Order Input:", input);

  const response = await razorpayCreateAuthorizedPayment(context, input);

  Logger.info("Create Order Response:", response);
  return null;
}
