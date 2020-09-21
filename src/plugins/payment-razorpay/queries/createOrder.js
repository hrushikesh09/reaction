import Logger from "@reactioncommerce/logger";
import razorpayCreateAuthorizedPayment from '../util/razorpayCreateAuthorizedPayment.js'

export default async function createOrder(context, { amount, accountId, fullName, billingAddress, currencyCode, email, shopId, receipt, notes }) {

  const input = {
    accountId,
    fullName,
    amount,
    billingAddress,
    currencyCode,
    email,
    shopId,
    receipt,
    notes
  }

  Logger.info("Create Order Input:", input);

  const response = await razorpayCreateAuthorizedPayment(context, input)

  
  Logger.info("Create Order Response:", response);
  return null;
}
