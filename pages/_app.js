import '../styles/globals.css'
import '../styles/animate.min.css'
import '../styles/bootstrap.min.css'
import '../styles/fontawesome.css'
import NextNprogress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {

  return(
      <>
        <NextNprogress
            color="#CB4D85"
            startPosition={0.3}
            stopDelayMs={200}
            height="3"
        />
        <Component {...pageProps} />
      </>
  )



}

export default MyApp
