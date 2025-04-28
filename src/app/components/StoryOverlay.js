'use client'
import React, { useEffect } from "react";
import { StoryCard } from "./StoryCard";
import { StoryVideo } from "./StoryVideo";

export function StoryOverlay({ story, onClose }) {
  const { title, subtitle, content, mediaCollection, storyLink } = story;

  useEffect(() => {
    if (story) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [story]);

  return (
    <div
      className={`fixed inset-0 bg-[var(--background)] p-2 overflow-y-auto max-h-screen bg-opacity-50 ${
        story ? "block" : "hidden"
      }`}
      >
      <div div className="p-2">
         <button
          onClick={onClose}
          className="mt-2 px-2 py-2 bg-blue-500 text-white rounded"
        >
          Go back
        </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">
         <div className="p-2 max-h-[25vh] w-full h-full">
           <StoryCard
            title={title}
            subtitle={subtitle}
            content={content}
            storyMedia={null}
           />
         </div>
         <div className="p-2 w-full aspect-ratio md:max-h-[50vh]">
          <StoryVideo
            title={title}
            storyLink={storyLink}
            />
         </div>
        </div>
    </div>
  );
}