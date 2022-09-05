import Image from "next/future/image";
import { FiGithub, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex flex-col items-center h-screen pt-32">
      <Image
        src="/images/blackbeard.png"
        alt="blackbeard's avatar"
        width={165}
        height={165}
        priority
        className="rounded-full"
      />

      <h1 className="pt-4 text-3xl font-bold text-center text-transparent bold-text bg-clip-text bg-gradient-to-r from-t-pink via-t-purple to-t-orange animate-gradient-text">
        BlackBeard
      </h1>

      <p className="pt-4 text-xl text-center">
        Hi, I&apos;m BlackBeard. I&apos;m a self-taught developer and I like to
        build cool stuff.
      </p>

      <div className="flex items-center pt-8 text-xl text-t-purple">
        <a
          href="https://github.com/blackbeard173/"
          target="_blank"
          rel="noreferrer"
          className="p-3 transition-colors duration-300 rounded-full hover:bg-zinc-800"
        >
          <FiGithub />
        </a>
        <a
          href="mailto:rituraj173@outlook.com"
          target="_blank"
          rel="noreferrer"
          className="p-3 transition-colors duration-300 rounded-full hover:bg-zinc-800"
        >
          <FiMail />
        </a>
      </div>
    </div>
  );
};

export { Hero };
