import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

interface ComponentProps {
  img_src: string; // Path to image or image URL
  img_text: string; // Alt text for the image
  heading: string; // Component heading
  text: string; // Text content
  link_href: string; // URL for the button
}
const Component: React.FC<ComponentProps> = ({
  img_src,
  img_text,
  heading,
  text,
  link_href,
}) => {
  return (
    <Card
      className="max-w-sm"
      renderImage={() => (
        <Image width={500} height={500} src={img_src} alt={img_text} />
      )}
    >
      <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        {heading}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
      <Link
        href={link_href}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
      </Link>
    </Card>
  );
};

export default Component;
