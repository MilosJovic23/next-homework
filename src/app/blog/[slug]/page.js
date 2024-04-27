

import blogData from "@/BlogPostsJSON/blogPosts.json"


export default function BlogPosts({ params }) {

    return(
        <>
            { blogData.map((post)=>{

                    if( post.name.toLowerCase() === params.slug ){
                       return <p>{ post.description }</p>
                    }

            })}
        </>

    )
}