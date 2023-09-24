import { useRouter } from "next/router";
// import { WithPageAuthRequired, getSession, withApiAuthRequired } from "@auth0/nextjs-auth0/client";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0/client";


// export const getServerSideProps = withApiAuthRequired({
//     async getServerSideProps(ctx) {
//         const session = getSession(ctx.req, ctx.res);
//         const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
//         const paymentIntents = await stripeId.paymentIntents.list({
//             customer: stripeId,
//         })
//         return {props: {orders: paymentIntents.data}}
//     }
// });

export default function Profile({ orders}){
    const route = useRouter();
    const { user, error, isLoading } = useUser();
    return(
        user && (
            <Order>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <div>
                    {/* {orders.map(order => {
                        <div>
                            <h1>Order number: {order.id}</h1>
                            <h2>Receipt Email: {order.receipt_email}</h2>
                            <h2>Link report: </h2>
                        </div>
                    })} */}
                </div>
                <button onClick={()=>route.push("api/auth/logout")}>Logout</button>
            </Order>
        )
    );
}

const Order = styled.div`
    background: white;
    margin: 2rem 0rem;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
`;

