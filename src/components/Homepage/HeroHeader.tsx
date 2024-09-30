import Link from "next/link";
import Image from "next/image";

// import skills_illustration from "/skills_illustration.jpg";

export default function Component() {
  return (
    <div className="h-[80vh] flex items-center justify-around">
      <div className="">
        <h1 className="text-4xl font-bold">Lorem, ipsum dolor.</h1>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime porro
          placeat nobis voluptates cum voluptatem optio! Enim assumenda ratione
          eum necessitatibus deserunt odit minima nesciunt omnis aspernatur
          cumque veniam commodi quaerat exercitationem nobis rem maiores
          dignissimos, numquam reprehenderit possimus sapiente voluptatibus
          animi corporis officiis? Voluptatem a voluptates facere. Voluptate,
          quas.
        </p>
        <br />
        <Link
          href={"#"}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Explore Resources
        </Link>
        <br />
      </div>
      <div>
        <Image
          src="/skills_illustration.jpg"
          width={626}
          height={626}
          alt="skiils illustration image"
        ></Image>
      </div>
    </div>
  );
}
