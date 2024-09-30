import { Card } from "@/components/index";

// import img1 from "/resources/content_writing.jpeg";
// import img2 from "/resources/finance.jpeg";
// import img3 from "/resources/content_creation.jpg";

export default function Component() {
  const cards_components = [
    {
      img_src: "/resources/content_writing.jpeg",
      img_text: "content writing hero image",
      heading: "Content Writing",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eligendi voluptate neque! Hic, architecto quasi accusamus dignissimos nostrum facere vitae laudantium vel dolor reprehenderit eveniet perferendis quidem repellendus aspernatur aliquam nulla cum commodi molestias deserunt doloribus. Dicta maiores doloremque accusamus?",
      link_href: "/",
    },
    {
      img_src: "/resources/finance.jpeg",
      img_text: "finance hero image",
      heading: "Finance",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eligendi voluptate neque! Hic, architecto quasi accusamus dignissimos nostrum facere vitae laudantium vel dolor reprehenderit eveniet perferendis quidem repellendus aspernatur aliquam nulla cum commodi molestias deserunt doloribus. Dicta maiores doloremque accusamus?",
      link_href: "/",
    },
    {
      img_src: "/resources/content_creation.jpg",
      img_text: "content creation hero image",
      heading: "Content creation",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eligendi voluptate neque! Hic, architecto quasi accusamus dignissimos nostrum facere vitae laudantium vel dolor reprehenderit eveniet perferendis quidem repellendus aspernatur aliquam nulla cum commodi molestias deserunt doloribus. Dicta maiores doloremque accusamus?",
      link_href: "/",
    },
  ];
  return (
    <div className="flex flex-wrap gap-2 justify-around">
      {cards_components.map((c, i) => (
        <Card
        key={i}
          img_src={c.img_src}
          img_text={c.img_text}
          heading={c.heading}
          text={c.text}
          link_href={c.link_href}
        />
      ))}
    </div>
  );
}
