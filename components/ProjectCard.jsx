import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

const tags = {
  "c++": "#8de3a4",
  compiler: "#5087d4",
  windows: "#00e1ff",
  linux: "#ffc012",
  git: "#96b09a",
  python: "#fff945",
  web: "#ff6b6b",
  hacking: "#000000",
  "node.js": "#00ff66",
  "electron.js": "#2f4582",
  javascript: "#eeff00",
  "assembly-elf-64": "#000000",
  "next.js": "#ffffff",
  bootstrap: "#7952b3",
};

const getColor = (tag) => {
  return tags[tag];
};

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image src={project.image} height={300} width={600} alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{ borderColor: getColor(tag), borderStyle: "solid" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
