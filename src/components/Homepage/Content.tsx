import Link from "next/link";

export default function Component() {
  return (
    <div className="my-10">
      <div className="bg-slate-900 py-16 px-4">
        <h2 className="font-bold text-3xl mb-2">The Extra Edge</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          accusantium eaque adipisci inventore molestias ullam culpa quae saepe
          quidem iusto.
        </p>
      </div>
      <div className="bg-cyan-200 py-10 text-center text-black">
        <h2 className="font-bold text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iure quasi nisi.
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <br />
        <Link
          href={"/"}
          className="text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
        >
          Get in touch with us
        </Link>
      </div>
    </div>
  );
}
