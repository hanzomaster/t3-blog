import { type NextPage } from "next";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import LeftContent from "../../components/LeftContent";
import Navbar from "../../components/Navbar";
import RightContent from "../../components/RightContent";
import Options from "../../components/account/Options";

import Profile, { SmProfile } from "../../components/account/Profile";

const Account: NextPage = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <LeftContent>
          <Options />
          <div className="flex flex-col gap-10 border-t">
            <SmProfile />
            <h1 className="text-3xl font-medium text-textNavbar md:mt-5 md:text-5xl">
              Lists
            </h1>
            <div className="flex h-[calc(100vh-400px)] w-full flex-col gap-5 overflow-y-auto">
              {Lists.map((list) => {
                return (
                  <div
                    key={list.id}
                    className="flex flex-col gap-5 rounded-lg bg-slate-100 py-5 px-2 hover:bg-slate-200"
                  >
                    <h2 className="text-xl font-medium md:text-2xl">
                      {list.name}
                    </h2>
                    <span className="text-sm font-medium text-textBio md:text-base">
                      {`${list.stories} stories`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </LeftContent>
        <RightContent>
          <Profile />
        </RightContent>
      </Content>
    </Layout>
  );
};
export default Account;

const Lists = [
  {
    id: 1,
    name: "NextJs",
    link: "/account/nextjs",
    stories: 2,
  },
  {
    id: 2,
    name: "Learning ReactJs",
    link: "/account/nextjs",
    stories: 5,
  },
  {
    id: 3,
    name: "My music",
    link: "/account/nextjs",
    stories: 4,
  },
  {
    id: 4,
    name: "Learning ReactJs",
    link: "/account/nextjs",
    stories: 5,
  },
];
