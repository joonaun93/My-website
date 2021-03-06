import Link from "next/link";

export default function Blog({ posts }) {
  const jsxPosts = posts.map((post) => {
    return (
      <>
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <a>{[post.slug]}</a>
          </Link>
        </li>
        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
      </>
    );
  });

  return (
    <section className="blog">
      <h1 className="blog__header">Blog Posts</h1>
      <ol> {jsxPosts}</ol>
      <Link href="/">back to homepage</Link>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const postsRes = await fetch(
    "https://my-wordpress.edmundkja.dev/wp-json/wp/v2/posts"
  );

  const posts = await postsRes.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
