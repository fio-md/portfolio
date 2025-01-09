export default function Button({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="px-4 py-2 border-2 text-center border-orange-400 hover:bg-orange-400 transition-all"
    >
      {title}
    </a>
  );
}
