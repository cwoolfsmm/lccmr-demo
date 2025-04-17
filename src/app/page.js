import Image from "next/image";
import { data } from "./data";

//GraphQL query will go here

export default function Home() {

  const { homePage } = data;
  const { title, cardTitle, cardSubtitle, cardContent, cardMedia } = homePage;
  return (
    // flex and flex-col props to set flex direction to column
    <div className="min-h-screen flex flex-col p-8">
      <header> 
        <h1 className="sm:text-[64px] text-[40px] leading-[1.2] font-black">{title}</h1>
        <hr className="text-(--bright-blue) border-2"></hr>
      </header>
      <main className="flex items-center justify-center mt-8">
       <section>
        <div>
          <h2 className="text-[40px] leading-[1.2] text-(--dark-gold) font-black mb-2">{cardTitle}</h2>
          <h3 className="text-xl text-(--dark-green) font-bold mb-2">{cardSubtitle}</h3>
          <p className="text-sm text-(--dark-green)">{cardContent}</p>
          {cardMedia && (
            <Image
              src={cardMedia}
              alt={cardTitle}
              width={500}
              height={300}
            />
          )}
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
