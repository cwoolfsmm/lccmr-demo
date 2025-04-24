import Image from "next/image";
import { getAllEntries } from "../../lib/graphql";
import FeaturedStory from "./components/FeaturedStory";

export default async function Home() {
  const data = await getAllEntries();
  console.log("Data fetched successfully:", JSON.stringify(data, null, 4));

  const { header, story, home } = data;
  const { headerTitle } = header[0];
  const { logo } = header[0].logo;
  const { title, subtitle, content, mediaCollection } = home[0].featureStory;


  return (
    // flex and flex-col props to set flex direction to column
    <div className="min-h-screen flex flex-col p-8">
      <header> 
        <h1 className="sm:text-[64px] text-[40px] leading-[1.2] font-black">{headerTitle}</h1>
        <hr className="text-(--bright-blue) border-2"></hr>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 flex-auto mt-8">
        <section className="grid grid-cols-1 justify-items-start pr-6 pb-6 flex-auto gap-6">
          <FeaturedStory 
            title={title}
            subtitle={subtitle}
            content={content}
            storyMedia={mediaCollection.items[0].url}
          />
        </section>
       <section className="grid grid-cols-1 justify-items-start pr-6 pb-6 flex-auto">
        <div>
          <h2 className="text-[40px] leading-[1.2] text-(--dark-gold) font-black">Stories</h2>
          <h3 className="text-xl text-(--dark-green) font-bold mb-2">Click on a Link</h3>
          {story.map((item) => (
            <div key={item.title}> 
              <a href={item.storyLink} className="text-[20px] text-(--dark-blue) font-bold hover:underline hover:underline-offset-4">
                {item.title}
              </a>
            </div>
          ))}
        </div>
       </section>
      </main>
      <footer className="mt-auto flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
