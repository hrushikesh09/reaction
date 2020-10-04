import resolvers from "./resolvers/index.js";
import schemas from "./schemas/index.js";
import queries from "./queries/index.js";
import razorpayCreateAuthorizedPayment from "./util/razorpayCreateAuthorizedPayment.js";
import razorpayListRefunds from "./util/razorpayListRefunds.js";
import razorpayCapturePayment from "./util/razorpayCapturePayment.js";
import razorpayCreateRefund from "./util/razorpayCreateRefund.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Razorpay",
    name: "razorpay",
    queries,
    graphQL: {
      resolvers,
      schemas
    },
    paymentMethods: [{
      name: "razorpay",
      displayName: "razorpay",
      canRefund: false,
      functions: {
        capturePayment: razorpayCapturePayment,
        createAuthorizedPayment: razorpayCreateAuthorizedPayment,
        createRefund: razorpayCreateRefund,
        listRefunds: razorpayListRefunds
      }
    }]
  });
}
