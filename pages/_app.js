import { useState } from "react";
import Layout from '../components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps  }) {
  const [type,setType] = useState("")
  return (
    <Layout>
      <Component {...pageProps}
      type={type}
      setType={setType}
      />
    </Layout>
  )
}

export default MyApp
