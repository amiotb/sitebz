import { readdirSync } from "fs";

/**
 * @param {string} id
 */
export async function getPost(id) {
  return (await import(`$posts/${id}.js`)).default;
}

export async function getPosts() {
  return readdirSync('src/posts').map(p => p.slice(0, -3));
}
