import { FC } from "react";

const ProjectCard: FC<{
  url: string;
  repo: string;
  description: string;
  language: string;
  languageColor: string;
}> = ({ url, repo, description, language, languageColor }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="flex flex-col p-4 transition-transform duration-300 border-2 rounded-lg h-40 border-t-pink bg-[#1c1c1c] place-content-evenly transform hover:scale-[104%]">
        <div className="flex flex-col gap-1">
          <p className="text-xl text-t-pink">{repo}</p>
          <p className="text-sm">{description}</p>
        </div>

        <div className="flex flex-col pt-4 text-sm gap-0.5">
          <span className="flex items-center gap-1.5">
            <span style={{ color: languageColor }}>⬤</span>
            {language}
          </span>
        </div>
      </div>
    </a>
  );
};

export { ProjectCard };
