import Logger from "@reactioncommerce/logger";
import axios from "axios";
import { getAuthToken } from "./getAuthToken.js";
import { SHIPROCKET_CREATE_ORDER_API_URL } from "./constants.js";

/**
 * @summary Create a Ship rocket Order.
 */
export default async function createOrder (order, payment) {

  try {
    // get auth token
    const token = await getAuthToken();

    // create order
    const response = await axios.post(SHIPROCKET_CREATE_ORDER_API_URL, {
      order_id: order.id,
      // conver to yyyy-mm-dd
      order_date: new Date(),
      pickup_location: "Jaipur",
      billing_customer_name: order.billingAddress.fullName,
      billing_city: order.billingAddress.city,
      billing_pincode: order.billingAddress.postal,
      billing_state: order.billingAddress.region,
      billing_country: order.billingAddress.country,
      billing_email: ,
      billing_phone: ,
      shipping_is_billing: , // Whether the shipping address is the same as billing address. 1 or 'true' for yes and 0 or 'false' for no.
      order_items: , //Array containing further fields
      name: , // Name of the product
      sku: ,
      units: , // No of units that are to be shipped.
      selling_price: , //The selling price per unit in Rupee. Inclusive of GST.
      payment_method: "Prepaid", // The method of payment. Can be either COD (Cash on delivery) Or Prepaid.
      sub_total: , // Calculated sub total amount in Rupee after deductions.
      length: , // The length of the item in cms. Must be more than 0.5.
      breadth: , // The breadth of the item in cms. Must be more than 0.5.
      height: , // The height of the item in cms. Must be more than 0.5.
      weight: , // The weight of the item in kgs. Must be more than 0.      
    });

    return response;
  } catch (error) {
    Logger.error("Failed To Create Shiprocket Order", error);
  }
}