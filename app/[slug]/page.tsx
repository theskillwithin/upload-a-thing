import Image from "next/image";
import Link from "next/link";

export default function FilePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return (
    <div>
      <div className="m-4">
        <Link
          href="/"
          className="text-m inline-flex items-center font-bold hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mr-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="">Back</span>
        </Link>
      </div>
      <div className="flex justify-center m-6">
        <div>
          <img src={`https://utfs.io/f/${slug}`} alt={slug} />
        </div>
      </div>
    </div>
  );
}
