import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="font-semibold text-2xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        Return{" "}
        <button className="bg-[#D5F5E3] py-0.5 px-4 text-lg rounded-lg">
          Home
        </button>
      </Link>
    </div>
  );
}
