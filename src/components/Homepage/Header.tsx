// import header from "@/public/header.jpeg"
import Link from "next/link";

export default function Component() {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-[url('/header.jpeg')] bg-cover">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">
          In Demand Skills on your fingertips
        </h2>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, id.
        </p>
        <br />
        <Link
          href={"#"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Join Us
        </Link>
      </div>
    </div>
    
  );
}
