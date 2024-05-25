import { getPost, getPosts } from "$lib/posts.js";

export async function load() {
  const postsId = await getPosts();
  const data = await Promise.all(postsId.map(async (id) => {
      const post = await getPost(id);
      return {
          id: id,
          position: post.position ?? 5,
          title: post.title,
          image: post.images[0],
      };
  }));
  //console.log(data);
  return { posts: data.sort((a, b) => a.position - b.position) };
}
