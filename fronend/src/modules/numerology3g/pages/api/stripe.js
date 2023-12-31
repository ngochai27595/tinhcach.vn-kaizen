import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
    if(req.method === "POST"){
        try {
            const session = await stripe.checkout.sessions.create({
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                shipping_address_collection: {
                    allowed_countries: ['US','CA']
                },
                allow_promotion_codes: true,
                line_items: req.body.map(item => {
                    return{
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: item.title,
                                images: item.image,
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: item.quantity,
                    }
                }),
                success_url: `${req.headers.origin}/success?&session_id={{CHECKOUT_SESSION_ID}}`,
                cancel_url: `${req.headers.origin}/canceled`,
            }) 
            res.status(200).json(session);
        } catch (error) {
            res.status(error.statusCode || 500).json(error.message);
        }
    }
}