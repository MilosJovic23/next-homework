import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {

  const response = await fetch('https://dummyjson.com/products?limit=9');
  const data = await response.json();
  console.log(data)
  return (
      <>

          <div className="productWrapper">

              {data.products.map((product) => {

                  return <div key={product} className="product" >
                      <Image src={product.thumbnail} alt={product.title}
                             width="150" height="80"/>
                      <p>{product.title}</p>
                      <p>{product.description}</p>
                      <p>{product.price}</p>

                  </div>

              })}

          </div>
      </>

  );
}
