import Link from "next/link";

export default function SecondaryButton({ href, onClick, text }) {
  return (
    <Link href={href} passHref>
      <a
        onClick={onClick ? onClick : null}
        className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-gray-700 duration-300 border-2 border-gray-300 rounded-lg cursor-pointer w-fit sm:text-md dark:text-gray-50 dark:border-gray-500 hover:border-gray-400"
      >
        {text}
      </a>
    </Link>
  );
}