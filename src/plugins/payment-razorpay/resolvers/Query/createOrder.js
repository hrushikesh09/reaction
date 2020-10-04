
/**
 * @name Query/createOrder
 * @method
 * @memberOf Razorpay/GraphQL
 * @param {Object} ParentResult - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {String} args.amount - amount of the order to be processed
 * @param {String} args.accountId - account of the user placing the order
 * @param {*} context - an object containing the per-request state
 * @returns {Promise<Object>|undefined} A Order object
 */
export default async function createOrder(ParentResult, args, context) {
  const { amount, accountId, billingAddress, email, shopId } = args;
  return context.queries.createOrder(context, {
    amount,
    accountId,
    billingAddress,
    email,
    shopId
  });
}
