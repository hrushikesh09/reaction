import Random from "@reactioncommerce/random";
import { RAZORPAY_PACKAGE_NAME } from "./constants.js";
import getRazorpayInstanceForShop from "./getRazorpayInstanceForShop.js";

const METHOD = "card";
const PAYMENT_METHOD_NAME = "razorpay";

const PROCESSOR = "razorpay";

/**
 * Creates a Razorpay order for a single fulfillment group
 * @param {Object} context The request context
 * @param {Object} input Input necessary to create a payment
 * @returns {Object} The payment object in schema expected by the orders plugin
 */
export default async function razorpayCreateAuthorizedPayment(context, input) {
  const {
    fullName,
    accountId,
    amount,
    billingAddress,
    currencyCode,
    email,
    shopId,
    receipt,
    notes
  } = input;

  const razorpay = await getRazorpayInstanceForShop(context);

  const razorpayCustomer = await razorpay.customer.create({ email, contact: accountId }); // TODO: change accountId to contact
  const razorpayCustomerId = razorpayCustomer.id;

  // create orderId
  const order = await razorpay.orders.create({ amount, currencyCode, receipt, notes });


  return {
    _id: Random.id(),
    address: billingAddress,
    amount,
    createdAt: new Date(),
    data: {
      orderId: order.id,
      order,
      customerId: razorpayCustomerId,
      gqlType: "RazorpayMethodPaymentData"
    },
    receipt,
    notes,
    displayName: `razorpay from ${fullName}`,
    method: METHOD,
    mode: "authorize",
    name: PAYMENT_METHOD_NAME,
    paymentPluginName: RAZORPAY_PACKAGE_NAME,
    processor: PROCESSOR,
    riskLevel: "normal",
    shopId,
    status: "created",
    transactionId: order.id,
    transaction: [order]
  };

}
