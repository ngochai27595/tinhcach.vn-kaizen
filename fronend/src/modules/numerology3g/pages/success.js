import { useRouter } from "next/router";

const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

// export async function getServerSideProps(params){
//     const order = await stripe.checkout.sessions.retrieve(
//         params.query.session_id,
//         {
//             expand: ['line_items'],
//         }
//     );
//     return {props: {order}}
// }

export default function Success({order}) {

    
    // sendDatatoBackend = async () => {
    //     const data = {};
    //     const request = await fetch('http://localhost:1337/api/report-tsh', {
    //         method: 'POST',
    //         authorization: `Bearer ${token}`,
    //         body: data
    //     })
    //     const response = await request.json();
    // }

    const router = useRouter();
    console.log(order);

    return(
        <div>
            <div>
                <h1>Thank you for your order!</h1>
                <h2>A report has been sent to</h2>
                <h2>email</h2>

                <button onClick={()=> router.push('/')}>Continue Testing</button>
            </div>
        </div>
    );
}