import { type NextPage } from "next";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Posts from "../data/posts";
import Image from "next/image";
import Content from "../components/Content";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <LeftContent>
          {Posts.map((post) => {
            return (
              <Link href={`/post/${post.id}`} key={post.id}>
                <div className="flex items-center gap-6 ">
                  <div className="rounded-full ">
                    <Image
                      src={post.avatar}
                      alt="author"
                      width={40}
                      height={40}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-5">
                    <span className="text-base font-medium md:text-lg">
                      {post.author}
                    </span>
                    <span className="text-sm font-medium text-textBio md:text-base">
                      {post.publishedAt}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="my-4 flex flex-col gap-5">
                    <h1 className="text-xl font-semibold text-title md:text-2xl">
                      {post.title}
                    </h1>
                    <p className=" text-sm font-normal md:text-base">{`${getWordStr(
                      post.content
                    )}...`}</p>
                  </div>
                  <div>
                    <Image
                      src={post.feature}
                      width={400}
                      height={400}
                      alt="post"
                      className="hidden rounded-sm object-cover lg:block"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </LeftContent>

        <RightContent>
          <div className="flex flex-col items-center gap-10">
            <h3>Recommended Topics</h3>
            <div className="flex gap-5"></div>
          </div>
        </RightContent>
      </Content>
    </Layout>
  );
};
export default Home;

function getWordStr(str: string) {
  return str.split(/\s+/).slice(0, 50).join(" ");
}
