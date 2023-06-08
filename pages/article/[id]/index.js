import Link from "next/link"

export default function Article({article}) {

    // const router = useRouter()
    // const {id} = router.query
    
  return (
    <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href={"/"} >Go back</Link>
    </>
  )
}

export const getServerSideProps = async (context)=>{
    const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {props: {article}}
}
