import { useRouter } from "next/router";
import Link from "next/link";

const PROJECTS = [
  {
    id: "cyclesync",
    title: "CycleSync",
    images: [
      "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=10b5b1b9c6c6f1b4f8a6c6f1e5a8b6d1",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b4c2b4e7a6f9c5d6e7a8b9c0d1e2f3",
    ],
    stack: ["React Native", "Firebase", "TypeScript"],
    description:
      "CycleSync is a smart chore scheduler that automatically reorders tasks based on completion cycles. Offline-first, background sync and push notifications.",
  },
  {
    id: "fithome",
    title: "FitHome",
    images: [
      "https://images.unsplash.com/photo-1526403224740-5c1b6d8f1a2c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a7b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
    ],
    stack: ["Flutter", "SQLite"],
    description:
      "FitHome is a minimalist home workout tracker with daily plans, progress charts and small equipment support.",
  },
];

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project)
    return (
      <div className="container py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Project not found</h2>
          <p className="text-muted mt-4">Unknown project id.</p>
          <Link
            href="/"
            className="mt-6 inline-block px-4 py-2 bg-accent text-black rounded"
          >
            Back home
          </Link>
        </div>
      </div>
    );

  return (
    <div className="container py-16">
      <Link href="/" className="text-sm text-muted">
        ← Back
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{project.title}</h1>
      <p className="text-muted mt-2 max-w-2xl">{project.description}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {project.images.map((src, i) => (
            <div key={i} className="mb-4 card overflow-hidden">
              <img src={src} alt={`screenshot ${i + 1}`} />
            </div>
          ))}
        </div>
        <div>
          <div className="card p-6">
            <h3 className="font-medium">What I built</h3>
            <ul className="mt-3 list-disc ml-5 text-muted space-y-2">
              <li>Offline-first sync and background job scheduling</li>
              <li>Push notifications and deep links</li>
              <li>
                Optimized list rendering and memory usage for low-end devices
              </li>
            </ul>

            <h4 className="mt-6 font-medium">Tech</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs text-muted border px-2 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="mt-6 inline-block px-4 py-2 border border-[rgba(255,255,255,0.04)] rounded"
            >
              View repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
