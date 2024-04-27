

import blogData from "../../blogPosts.json"


export default function BlogPosts({ params }) {

    return(
        <>
            { blogData.map((post)=>{

                    if( post.name.toLowerCase() === params.slug ){
                       return <p>{ post.description }</p>
                } else{
                        return(<p>Specific blog post doesn't exist</p>)
                    }



            })}
        </>

    )
}