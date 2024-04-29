import Image from "next/image";


export default async function About() {

    const response = await fetch("https://dummyjson.com/posts?limit=5");
    const data = await response.json();


    const post = data["posts"][0]

    console.log(post)

    return<>

        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <p>{post.tags}</p>
        <Image src="/images/f1.jpg" alt="forumula1 cover image"
               height="200"
               width="400"
        />
    </>

}