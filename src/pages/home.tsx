import { type GetServerSidePropsContext, type NextPage } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import Content from "../components/Content";
import Layout from "../components/Layout";
import LeftContent from "../components/LeftContent";
import Navbar from "../components/Navbar";
import RightContent from "../components/RightContent";
import { useSession } from "next-auth/react";
import Posts from "../data/posts";

const Home: NextPage = () => {
  // const { data: session } = useSession();

  return (
    <Layout>
      <Navbar />
      <Content>
        {/* {session ? <h1>Sign in</h1> : <h1>Sign out</h1>} */}
        <LeftContent>
          {Posts.map((post) => {
            return (
              <div key={post.id}>
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
              </div>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (!session) {
    return { redirect: { destination: "/auth/signin", permanent: false } };
  }
  return { props: { session } };
}
