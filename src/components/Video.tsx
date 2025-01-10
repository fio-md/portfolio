function playVideo(event: React.MouseEvent<HTMLVideoElement>): void {
  (event.target as HTMLVideoElement).play();
}
function pauseVideo(event: React.MouseEvent<HTMLVideoElement>): void {
  (event.target as HTMLVideoElement).pause();
}
//border-2 border-zinc-300 dark:border-zinc-500"
export default function Video({ demo }: { demo: string }) {
  return (
    <div className="w-1/2 rounded overflow-hidden">
      <video
        className="w-full h-full"
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
      >
        <source src={demo}></source>
      </video>
    </div>
  );
}
