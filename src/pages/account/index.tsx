import { type NextPage } from "next";
import Link from "next/link";
import MainAccount from "../../components/account/MainAccount";

const Account: NextPage = () => {
  return (
    <MainAccount>
      <h1 className="text-3xl font-medium text-textNavbar md:mt-5 md:text-5xl">
        Lists
      </h1>
      <div className="flex h-[calc(100vh-400px)] w-full flex-col gap-5 overflow-y-auto">
        {Lists.map((list) => {
          return (
            <Link
              key={list.id}
              href={`/account/list/${list.id}`}
              className="flex flex-col gap-5 rounded-lg bg-slate-100 py-5 px-2 hover:bg-slate-200"
            >
              <h2 className="text-xl font-medium md:text-2xl">{list.name}</h2>
              <span className="text-sm font-medium text-textBio md:text-base">
                {`${list.stories} stories`}
              </span>
            </Link>
          );
        })}
      </div>
    </MainAccount>
  );
};
export default Account;

export const Lists = [
  {
    id: 1,
    name: "NextJs",
    stories: 2,
    storiesList: [
      {
        id: 1,
        title: "What is NextJs?",
      },
      {
        id: 2,
        title: "How to use NextJs?",
      },
    ],
  },
  {
    id: 2,
    name: "Learning ReactJs",
    stories: 5,
  },
  {
    id: 3,
    name: "My music",
    stories: 4,
  },
  {
    id: 4,
    name: "Learning ReactJs",
    stories: 5,
  },
];
