import { useState } from "react";
import Layout from '../components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps  }) {
  const [type,setType] = useState("")
  const [total,setTotal] = useState(0)
  return (
    <Layout>
      <Component {...pageProps}
      type={type}
      setType={setType}
      total={total}
      setTotal={setTotal}
      />
    </Layout>
  )
}

export default MyApp
