import Link from "next/link";

export default function PrimaryButtonLarge({ href, onClick, text }) {
  return (
    <Link href={href} passHref>
      <a
        onClick={onClick ? onClick : null}
        className="flex items-center justify-center py-4 font-medium text-white duration-300 rounded-lg cursor-pointer text-md px-7 w-fit sm:text-lg bg-primary-600 hover:bg-primary-700"
      >
        {text}
      </a>
    </Link>
  );
}