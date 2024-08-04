import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51Pj0SGRtzY6wMcC2x0ueyU5tkaiLFj4lvbYLPZZFTnwL3LVbpOjZMcMy9Y0q9KEVNGUzA7uAdgJE002BuHdUxZkX00QbsQUKil');

export default async (req, res) => {
  const { amount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Booking Payment',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
