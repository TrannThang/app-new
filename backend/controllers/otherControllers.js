import Stripe from "stripe";
import Order from "../models/order";
import APIFilters from "../utils/APIFilter";
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

export const myOrders = async (req, res) => {
  const resPerPage = 2;
  const ordersCount = await Order.countDocuments();

  const apiFilters = new APIFilters(Order.find(), req.query).pagination(
    resPerPage
  );

  const orders = await apiFilters.query
    .find({ user: req.user._id })
    .populate("shippingInfo user");

  res.status(200).json({
    ordersCount,
    resPerPage,
    orders,
  });
};

export const checkoutSession = async (req, res) => {
  const body = req.body;
  const line_items = body?.items?.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
          metadata: {
            productId: item.product,
          },
        },
        unit_amount: item.price * 100,
      },
      tax_rate: ["txr_1NR80mK982ce3BRuDxLxC7C6"],
      quantity: item.quantity,
    };
  });

  const shippingInfo = body?.shippingInfo;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${process.env.API_URL}/me/orders?order_success=true`,
    cancel_url: `${process.env.API_URL}/`,
    customer_email: req?.user?.email,
    client_reference_id: req?.user?._id,
    mode: "payment",
    metadata: {
      shippingInfo,
    },
    shipping_options: [
      {
        shipping_rate: "shr_1NR7rwK982ce3BRuiLg6awZt",
      },
    ],
    line_items,
  });
  res.status(200).json({
    url: session.url,
  });
};
