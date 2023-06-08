import Head from "next/head";

export default function Meta({title, keywords, description}) {
  return (
    <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: "Dev Newz",
    keywords: 'web development, programming',
    description: "Get the latest new in web dev"

}