export default async function createOrder(ParentResult, args, context) {
  const { amount, accountId, fullName, billingAddress, currencyCode, email, shopId, receipt, notes} = args
  
  return context.queries.createOrder(context, {
    amount,
    accountId,
    fullName,
    billingAddress,
    currencyCode,
    email,
    shopId: shopId,
    receipt,
    notes
  });
}
