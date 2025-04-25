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
      className={`fixed inset-0 bg-[var(--background)] shadow-lg p-2 overflow-y-auto bg-opacity-50 flex  ${
        story ? "block" : "hidden"
      }`}
   >
     <div className="mx-auto rounded-sm"
      style={{
          width: "100%",
          height: "100%"
        }}
      >
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go back
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
         <div className="pb-8">
           <StoryCard
            title={title}
            subtitle={subtitle}
            content={content}
            storyMedia={mediaCollection.items[0].url}
           />
         </div>
         <div className="pb-8">
          <StoryVideo
            title={title}
            storyLink={storyLink}
            />
         </div>
        </div>
      </div>
    </div>
  );
}