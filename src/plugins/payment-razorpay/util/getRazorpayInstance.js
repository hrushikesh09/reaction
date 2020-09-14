import Razorpay from 'razorpay';

/**
 * @name getRazorpayInstance
 * @param {Object} context App context
 * @param {String} razorpayKeyId Razorpay Key Id
 * @param {String} razorpayKeySecret Razorpay Key Secret
 * @returns {Object} The Razorpay SDK object
 */

export default function getRazorpayInstance(context, razorpayKeyId, razorpayKeySecret) {
    const razorpay = new Razorpay({
        key_id: razorpayKeyId,
        key_secret: razorpayKeySecret
    })

    return razorpay
}