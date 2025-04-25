   
       'use client';
       
       export function StoryButton({ story }) {
         return (
          <>
            <div key={story.title}> 
              <button
                className="text-sm font-bold mb-2 bg-(--bright-blue) hover:bg-(--dark-gold) text-white py-2 px-4 rounded">
                  {story.title}
              </button>
            </div>
          </> 
         );
       }
       