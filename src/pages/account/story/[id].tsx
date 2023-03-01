import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MainAccount from "../../../components/account/MainAccount";
import Markdown from "../../../components/Markdown";
import Posts from "../../../data/posts";

const Story = () => {
  const router = useRouter();
  const { id } = router.query;
  const story = Posts.find((story) => story.id === id);
  return (
    <MainAccount>
      <div className="">
        <h1 className="py-5 text-2xl font-[700] text-title md:py-10 md:text-4xl lg:text-5xl">
          {story?.title}
        </h1>
        <ReactMarkdown
          className="foo prose prose-base md:prose-lg"
          components={Markdown}
          remarkPlugins={[remarkGfm]}
        >
          {story?.content}
        </ReactMarkdown>
      </div>
    </MainAccount>
  );
};
export default Story;
