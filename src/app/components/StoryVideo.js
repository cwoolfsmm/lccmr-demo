export function extractVideoId(url) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
  return match ? match[1] : null;
}

export function StoryVideo({ storyLink }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Watch the Video</h2>
       <div className="w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${extractVideoId(storyLink)}`}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}