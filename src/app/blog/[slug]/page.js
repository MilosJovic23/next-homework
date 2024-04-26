
import blog from "../../blogPosts.json"

export default function BlogPosts({ params }) {

    return(
        <>
            { blog.map((blog)=>{
                if( params.slug===blog.name.toLowerCase() ){
                    return <p>{blog.name}</p>
                }
                <p>that blog post doesnt exist</p>
            })}
        </>

    )
}