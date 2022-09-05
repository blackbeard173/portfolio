import { NextPage } from "next";
import Layout from "../components/Layout";
import { ProjectCard } from "../components/ProjectCard";

const Projects: NextPage = () => {
  const projectsList = [
    {
      repo: "shrt",
      url: "https://github.com/blackbeard173/shrt",
      description: "A link shortener created using Next.js.",
      language: "TypeScript",
      languageColor: "DodgerBlue",
    },
    {
      repo: "ccms",
      url: "https://github.com/blackbeard173/cyber-cafe-management-system",
      description: "A CyberCafe Management System made in C++.",
      language: "C++",
      languageColor: "Pink",
    },
    {
      repo: "yt-downloader",
      url: "https://github.com/blackbeard173/yt-downloader-pytube",
      description: "A youtube video downloader.",
      language: "Python",
      languageColor: "CornflowerBlue",
    },
    {
      repo: "cli toolbox",
      url: "https://github.com/blackbeard173/toolbox-python",
      description: "A cli toolbox consisting of multiple tools.",
      language: "Python",
      languageColor: "CornflowerBlue",
    },
  ];
  return (
    <Layout title="blackbeard • projects" description="peojects i have done">
      <div className="flex flex-col items-center justify-center pt-14">
        <h3 className="self-start pb-2 text-4xl font-bold bold-text">
          Things I&apos;ve built
        </h3>
        <div className="grid grid-cols-1 gap-4 auto-cols-max sm:grid-cols-2 sm:gap-3 pt-14">
          {projectsList.map((project) => (
            <ProjectCard
              key={project.repo}
              repo={project.repo}
              url={project.url}
              description={project.description}
              language={project.language}
              languageColor={project.languageColor}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
