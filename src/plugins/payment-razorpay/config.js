import envalid from "envalid";

const { str, testOnly } = envalid;

export default envalid.cleanEnv(process.env, {
  RAZORPAY_KEY_ID: str({
    desc: "A private razorpay key id",
    devDefault: testOnly("YOUR_PRIVATE_RAZORPAY_KEY_ID")
  }),
  RAZORPAY_KEY_SECRET: str({
    desc: "A private razorpay key secret",
    devDefault: testOnly("YOUR_PRIVATE_RAZORPAY_KEY_SECRET")
  })
}, {
  dotEnvPath: null
});
