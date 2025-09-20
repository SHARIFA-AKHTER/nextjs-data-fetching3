/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPost } from "@/type";
import PostCard from "../components/posts/postCard";


const PostsPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=9",
    {
        // cache: "force-cache"
        cache:"no-store"

        // next: {
        //     revalidate:30
        // }
    }
  );
  const posts = await res.json();
  console.log(posts);

  return (
    <div>
      <h1 className="text-center text-xl my-5">All Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {posts?.map((post: IPost) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

