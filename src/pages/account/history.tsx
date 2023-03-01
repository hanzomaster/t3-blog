import { type NextPage } from "next";
import Link from "next/link";
import MainAccount from "../../components/account/MainAccount";
import Posts from "../../data/posts";

const History: NextPage = () => {
  return (
    <MainAccount>
      <h1 className="text-3xl font-medium text-textNavbar md:mt-5 md:text-5xl">
        History
      </h1>
      <div className="flex h-[calc(100vh-400px)] w-full flex-col gap-5 overflow-y-auto">
        {Posts.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-col gap-5 rounded-lg bg-slate-100 py-5 px-2"
            >
              <Link
                href={`/post/${post.id}`}
                className="text-xl font-medium text-textNavbar hover:underline md:text-2xl"
              >
                {post.title}
              </Link>
              <div className="flex justify-between">
                <span className="font-base text-sm text-textBio md:text-base">
                  {`Visited at ${post.publishedAt}`}
                </span>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </MainAccount>
  );
};
export default History;
