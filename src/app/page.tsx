import {
  Header,
  HeroHeader,
  Resources,
  Content,
  HeaderText,
} from "@/components/Homepage";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-10">
        <HeroHeader />
        </div>
        
        <HeaderText />
        <div className="px-10">
        <Resources />

        <Content />
        </div>
    </>
  );
}
