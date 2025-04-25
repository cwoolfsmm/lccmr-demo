'use client'
import React, { useState } from "react";
import Image from "next/image";
import { StoryCard } from "./StoryCard";
import { StoryButton } from "./StoryButton";

export function HomeClient({data}) {
  const { header, story, home } = data;
  const { headerTitle } = header[0];
  const logoUrl = header[0].logo.url;
  const { title, subtitle, content, mediaCollection } = home[0].featureStory;
  
  const [selectedStory, setSelectedStory] = useState(null);

  const handleOpenStory = (story) => {
    setSelectedStory(story);
  };

  const handleCloseStory = () => {
    setSelectedStory(null);
  };

  return (
    // flex and flex-col props to set flex direction to column
    <div className="min-h-screen flex flex-col">
      <header className="p-6"> 
        <h1 className="sm:text-[64px] text-[40px] leading-[1.2] font-black">{headerTitle}</h1>
        <hr className="text-(--bright-blue) border-2"></hr>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 flex-auto mt-8 p-6">
        <section className="grid grid-cols-1 justify-items-start pr-6 pb-6 flex-auto gap-6">
          <StoryCard
            title={title}
            subtitle={subtitle}
            content={content}
            storyMedia={mediaCollection.items[0].url}
          />
        </section>
       <section className="grid grid-cols-1 justify-items-start pr-6 pb-6 flex-auto">
        <div>
          <h2 className="text-[40px] leading-[1.2] text-(--dark-gold) font-black">Stories</h2>
          <h3 className="text-xl text-(--dark-green) font-bold mb-2">Select A Story</h3>
          {story.map((story) => (
            <StoryButton
              key={story.title}
              story={story}
              onClick={() => handleOpenStory(story)}
            />
          ))}
        </div>
       </section>
      </main>
      <footer className="mt-auto flex flex-wrap items-center justify-center bg-dark-green">
         <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://new.smm.org/"
          target="_blank"
          rel="noopener noreferrer"
        >Visit the Science Museum of Minnesota </a>
       {logoUrl && (
          <Image
            src={logoUrl}
            alt={title}
            width={150}
            height={150}
            priority
          />
        )}
      </footer>
    </div>
  );
}
