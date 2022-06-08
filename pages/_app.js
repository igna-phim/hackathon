import { useState } from "react";
import Layout from '../components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps  }) {
  const [type,setType] = useState("")
  const [total,setTotal] = useState(0)
  const [alerta1,setAlerata1] = useState(false)
  return (
    <Layout>
      <Component {...pageProps}
      type={type}
      setType={setType}
      total={total}
      setTotal={setTotal}
      setAlerata1={setAlerata1}
      alerta1={alerta1}
      />
    </Layout>
  )
}

export default MyApp
