import { getPost } from "$lib/posts.js";

export async function load({ params }) {
  const data = await getPost(params.name);
  //console.log(data);
  return data;
}
