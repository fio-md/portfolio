function playVideo(event: React.MouseEvent<HTMLVideoElement>): void {
  (event.target as HTMLVideoElement).play();
}
function pauseVideo(event: React.MouseEvent<HTMLVideoElement>): void {
  (event.target as HTMLVideoElement).pause();
}

export default function Video({ demo }: { demo: string }) {
  return (
    <div className="border-2 border-zinc-300 dark:border-zinc-500">
      <video
        className="w-full"
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
      >
        <source src={demo}></source>
      </video>
    </div>
  );
}
