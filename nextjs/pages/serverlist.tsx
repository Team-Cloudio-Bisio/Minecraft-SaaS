import { useState } from "react"

import Server from '@/components/Server';
import '@/app/globals.css'

/*
export default function ServerList() {
    return(
        <div>
            <Servers></Servers>
        </div>
    )
}*/
export default function ServerList() {
    
    
    return(
    <div className="relative flex items-left min-h-screen overflow-hidden"
    style={{
      backgroundImage: `url('/assets/img2.png')`,
       height: "720px",
      }}>
        <Server></Server>
    </div>
    )
}

/* EXAMPLE 2
export default function ServerList() {

    const [products, setProducts] = useState([]);

    const addProduct = (product: []) => setProducts([...products, product])


    return(
        <div>
            <ProductForm addProductProp = {addProduct}></ProductForm>
        </div>
    )
}
*/