import "@/styles/globals.css";
// import "../styles/globals.css";
// import {Navbar} from 'navbar'
// import "@styles/navbar.css"


export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <Navbar /> */}
    <Component {...pageProps} />

    </>
  );
}
