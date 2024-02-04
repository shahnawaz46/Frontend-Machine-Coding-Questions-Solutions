import Link from "next/link";

const topics = [
  {
    id: 1,
    name: "Dynamic Sidebar and Navbar",
    link: "/dynamic-sidebar-navbar/dashboard",
  },
  {
    id: 2,
    name: "Grid Light",
    link: "/grid-light",
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-center p-3">
      <h1 className="text-xl md:text-2xl font-semibold mb-2">
        Welcome To the Frontend Machine Coding Questions/Solutions.
      </h1>
      <h2 className="mb-1 md:text-lg">
        All the questions are taken from Internet and Youtube(specially
        RoadsideCoder).
      </h2>
      <h2 className="md:text-lg">
        And the solution is mine and if you want to add any good solution then
        you can make a pull request.
      </h2>

      <div className="mt-5">
        <h2 className="font-medium mb-2 md:text-xl">TOPICS</h2>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {topics.map((item) => (
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
