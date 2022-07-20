import Link from "next/link";

export async function getStaticPaths() {
  const postsRes = await fetch(
    "https://my-wordpress.edmundkja.dev/wp-json/wp/v2/posts"
  );

  const posts = await postsRes.json();

  const paths = posts.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const postsRes = await fetch(
    "https://my-wordpress.edmundkja.dev/wp-json/wp/v2/posts"
  );

  const slug = params.slug;

  let posts = [];

  posts = await postsRes.json();

  const postArray = posts.filter((post) => post.slug == slug);

  const post = postArray.length > 0 ? postArray[0] : null;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function Postpage({ post }) {
  return (
    <div className="blog-post">
      <h1 className="blog-post__header">{post.title.rendered}</h1>
      <div
        className="blog-post__content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
      <Link href="/blog">back to blog index</Link>
    </div>
  );
}
