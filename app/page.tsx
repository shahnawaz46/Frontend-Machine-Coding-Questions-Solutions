import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

// components
import Topic from "@/src/assets/topic.json";
import ToolTip from "@/src/components/tooltip";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-3">
      <h1 className="text-xl md:text-2xl font-semibold mb-2">
        Welcome To the Frontend Machine Coding Questions/Solutions.
      </h1>
      <h2 className="mb-1 md:text-lg">
        All the questions are taken from Internet and Youtube.
      </h2>
      <h2 className="md:text-lg">
        And the solution is mine and if you want to add any good question or
        solution then you can make a pull request.
      </h2>

      {/* social links */}
      <div className="flex items-center justify-center gap-3 md:gap-4 mt-4">
        <Link
          href={"https://www.linkedin.com/in/mohammad-shahnawaz-8z"}
          target="_blank"
        >
          <ToolTip text="Linkedin">
            <BsLinkedin className="text-[22px] cursor-pointer text-[#3CCF91]" />
          </ToolTip>
        </Link>
        <Link href={"https://github.com/shahnawaz46"} target="_blank">
          <ToolTip text="github">
            <BsGithub className="text-[22px] cursor-pointer text-[#3CCF91]" />
          </ToolTip>
        </Link>
        <Link href={"https://shahnawaz.vercel.app/"} target="_blank">
          <ToolTip text="Portfolio">
            <CgWebsite className="text-[24px] cursor-pointer text-[#3CCF91]" />
          </ToolTip>
        </Link>
      </div>

      <div className="mt-5">
        <h2 className="font-medium mb-2 md:text-xl">TOPICS</h2>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {Topic.map((item) => (
            <Link href={item.link} key={item.id}>
              <button className="bg-green-200 px-4 py-2 rounded-xl md:text-lg">
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
