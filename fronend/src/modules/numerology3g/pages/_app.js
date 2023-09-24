import '@/styles/globals.css';
import { Provider, createClient, cacheExchange, fetchExchange } from 'urql';
import { StateContext } from '@/lib/context';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Nav } from '@/components/Nav';
// import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_API,
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  )
}
