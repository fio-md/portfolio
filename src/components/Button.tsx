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
      className="px-4 py-2 border-2 text-center border-green-500 hover:bg-green-500 transition-all"
    >
      {title}
    </a>
  );
}
