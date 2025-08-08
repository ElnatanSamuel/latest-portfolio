import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project, type }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="card overflow-hidden relative"
    >
      <div className="card-accent" />
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium text-lg">{project.title}</h3>
        <p className="text-sm text-muted mt-2">{project.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs text-muted border px-2 py-1 rounded"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {type === "Mobile Apps" ? (
              <Link
                href={`/projects/${project.id}`}
                className="px-3 py-2 border rounded text-sm"
              >
                Details
              </Link>
            ) : (
              <a
                href={project.live || "#"}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 border rounded text-sm"
              >
                Live
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                className="px-3 py-2 border rounded text-sm"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
