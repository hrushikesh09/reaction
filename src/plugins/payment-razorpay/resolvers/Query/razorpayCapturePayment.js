
/**
 * @name Query/razorpayCapturePayment
 * @method
 * @param {Object} ParentResult - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {*} context - an object containing the per-request state
 * @returns {Promise<Object>|undefined} A Order object
 */
export default async function razorpayCapturePayment(ParentResult, args, context) {
  const { orderId, amount } = args;
  return context.queries.razorpayCapturePayment(context, {
    orderId,
    amount
  });
}
