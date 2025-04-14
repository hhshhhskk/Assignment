interface Post {
  id: string;
  // 필요하다면 title, slug 등도 추가 가능
}

export async function generateStaticParams() {
  const posts = await fetch("https://api.example.com/posts").then((res) =>
    res.json()
  );

  return posts.map((post: Post) => ({
    id: post.id, // 또는 id 등
  }));
}
