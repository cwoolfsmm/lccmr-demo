   
       import Image from "next/image";
       import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
       
       export function StoryCard({ title, subtitle, content, storyMedia }) {
         return (
          <>
            <div className="flex flex-col justify-center">
              <h2 className="text-[40px] leading-[1.2] text-(--dark-gold) font-black">{title}</h2>
              <h3 className="text-xl text-(--dark-green) font-bold mb-2">{subtitle}</h3>
              <div className="text-sm text-(--dark-green)"> {content && documentToReactComponents(content.json)}</div>
            </div>
            <div>
              {storyMedia && (
                <Image
                  src={storyMedia}
                  alt={title}
                  width={400}
                  height={400}
                  priority
                />
              )}
            </div>
          </> 
         );
       }
       