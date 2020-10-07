
/**
 * @name Query/razorpayListRefunds
 * @method
 * @param {Object} ParentResult - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {*} context - an object containing the per-request state
 * @returns {Promise<Object>|undefined} A Order object
 */
export default async function razorpayListRefunds(ParentResult, args, context) {
  const { orderId } = args;
  return context.queries.razorpayListRefunds(context, {
    orderId
  });
}
