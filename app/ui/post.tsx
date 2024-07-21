import Image from "next/image";

interface PostProps {
  author: string;
  pImage: string;
  playListImage: string;
}

export default function Post({ author, pImage, playListImage }: PostProps) {
  return (
    <div className="p-5 w-full rounded-3xl hover:cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 mt-20 relative">
      <div className="flex flex-row rounded-full bg-gray-700 border-radiu p-5 h-20 relative">
        <div className="h-12 w-12 rounded-full relative">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={true}
            className="rounded-full aspect-square object-cover"
            alt="Profile picture"
            src={pImage}
          />
        </div>
        <div className="ml-5">
          <p>{author}</p>
          <p>29m</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-12 ml-auto"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"
          ></path>
        </svg>
      </div>
      <div className="h-96 w-full mt-5 relative">
        <Image
          fill={true}
          className="rounded-3xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="profileImage"
          src={playListImage}
        />
      </div>
      <div className="flex flex-row gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="blue"
          className="size-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="blue"
          className="size-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="blue"
          className="size-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="blue"
          className="size-8 ml-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-8"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="blue"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256"
          ></path>
          <path
            fill="none"
            stroke="blue"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416m0-192h-53.19a80 80 0 0 0-66.56 35.62L288 208"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-8"
          viewBox="0 0 20 20"
        >
          <path
            fill="blue"
            d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"
          ></path>
        </svg>
      </div>
      <div className="flex">
        <p>483 likes</p>
      </div>
      <div>
        <div className="h-0 w-full relative border-t-4 border-indigo-500"></div>
        <p>{author}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque lacinia pellentesque ipsum, ut porta nisl cursus et.
          Phasellus commodo viverra nunc, quis ornare velit volutpat feugiat.
          Etiam bibendum malesuada metus eget efficitur. Vestibulum maximus
          ipsum gravida neque ultrices tincidunt. Nunc ac feugiat orci. Nulla
          facilisi. Vestibulum facilisis vestibulum nisl et vulputate. Nullam
          sodales felis nec eros egestas ultrices. Aliquam condimentum interdum
          accumsan. Aenean vitae tempus ante. Curabitur ipsum quam, pellentesque
          non neque ac, volutpat semper nulla. Morbi elit erat, accumsan a
          aliquam ut, laoreet eget tortor.
        </p>
      </div>
    </div>
  );
}
