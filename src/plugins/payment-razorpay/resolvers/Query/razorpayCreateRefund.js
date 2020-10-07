
/**
 * @name Query/razorpayCreateRefund
 * @method
 * @param {Object} ParentResult - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {*} context - an object containing the per-request state
 * @returns {Promise<Object>|undefined} A Order object
 */
export default async function razorpayCreateRefund(ParentResult, args, context) {
  const { orderId, amount } = args;
  return context.queries.razorpayCreateRefund(context, {
    orderId,
    amount
  });
}
