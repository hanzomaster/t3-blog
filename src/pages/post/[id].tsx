import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Markdown from "../../components/Markdown";
import Navbar from "../../components/Navbar";
import RightContent from "../../components/RightContent";
import Posts from "../../data/posts";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = Posts.find((post) => post.id === id);

  return (
    <Layout>
      <Navbar />
      <Content>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <Image
                src={post?.avatar as string}
                alt="author"
                width={40}
                height={40}
                className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
              />
              <div className="flex flex-col gap-1">
                <div className="flex gap-5">
                  <h1 className="text-lg font-medium md:text-2xl">
                    {post?.author}
                  </h1>
                  <button className="rounded-2xl bg-button px-2 py-1 text-sm text-white hover:bg-buttonHover md:hidden">
                    Follow
                  </button>
                </div>

                <span className="text-base font-normal text-textBio md:text-xl">
                  {post?.publishedAt}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-10 pt-5 pl-2 md:pt-0 md:pl-0">
              <button title="bookmark" className="hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-textBio hover:text-textNavbar"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </button>
              <button className="flex items-center gap-1 rounded-xl border px-2 py-1 hover:bg-slate-100 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-textBio hover:text-textNavbar"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
                <span className="text-sm font-normal text-textBio  md:text-xl">
                  Save
                </span>
              </button>
              <button title="more">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-textBio hover:text-textNavbar"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="">
            <h1 className="py-5 text-2xl font-[700] text-title md:py-10 md:text-4xl lg:text-5xl">
              {post?.title}
            </h1>
            <ReactMarkdown
              className="foo prose prose-base md:prose-lg"
              components={Markdown}
              remarkPlugins={[remarkGfm]}
            >
              {post?.content ? post.content : ""}
            </ReactMarkdown>
          </div>
        </div>
        <RightContent>
          <Image
            src={post?.avatar as string}
            alt="avatar"
            width={768}
            height={432}
            className="h-20 w-20 rounded-full object-cover"
          />
          <h1 className="text-2xl font-medium">{post?.author}</h1>
          <span className=" text-lg font-normal text-textBio">{`${
            post?.followers ? post.followers : 0
          } Followers`}</span>
          <p className=" text-lg font-normal text-textBio">{post?.bio}</p>
          <button
            title="follow"
            className="mt-10 h-10 w-28 rounded-3xl bg-button px-2 py-1 text-lg font-normal text-white hover:bg-buttonHover"
          >
            Follow
          </button>
        </RightContent>
      </Content>
    </Layout>
  );
};

export default Post;
