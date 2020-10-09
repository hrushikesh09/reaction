import { Utils } from "handlebars"
import { SHIPROCKET_PACKAGE_NAME } from "./util/constants.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Shiprocket",
    name: SHIPROCKET_PACKAGE_NAME
  });
}
