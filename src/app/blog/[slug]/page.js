

import blogData from "@/BlogPostsJSON/blogPosts.json"
import Image from "next/image";


export default async function BlogPosts({ params }) {

    const response = await fetch ('https://dummyjson.com/products/'+params.slug);
    const data = await response.json();


    return(
        <>

            <div>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <p>{data.price}</p>
                <p>{data.category}</p>
                { data.images.map((img)=>{
                    return <Image src={img} alt="ds"
                    width="200" height="200"/>
                })}

            </div>


        </>


    )
}