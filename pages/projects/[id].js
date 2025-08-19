import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { PROJECT_DETAILS } from "./data";

const IMG_EXTS = ["png", "jpg", "jpeg", "webp"];
const VIDEO_MIME = {
  mp4: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime",
};

function LocalImage({ id, suffix, containerClass = "", imgClass = "" }) {
  const [idx, setIdx] = useState(0);
  const [hidden, setHidden] = useState(false);
  const candidates = useMemo(() => {
    const name = suffix ? `${id}-${suffix}` : id;
    return IMG_EXTS.flatMap((ext) => [
      `/images/${name}.${ext}`,
      `/image/${name}.${ext}`,
    ]);
  }, [id, suffix]);

  if (hidden) return null;
  const src = candidates[Math.min(idx, candidates.length - 1)];

  return (
    <div
      className={`overflow-hidden ring-1 ring-white/10 bg-white/5 ${containerClass}`}
    >
      <img
        src={src}
        alt={`${id}${suffix ? `-${suffix}` : ""}`}
        className={`w-full object-contain ${imgClass}`}
        onError={() => {
          if (idx < candidates.length - 1) setIdx((v) => v + 1);
          else setHidden(true);
        }}
      />
    </div>
  );
}

// Image that retries alternative paths/extensions for provided src
function ResilientImage({ src, alt, containerClass = "", imgClass = "" }) {
  const [idx, setIdx] = useState(0);
  const [hidden, setHidden] = useState(false);
  const candidates = useMemo(() => {
    // Start with the given src
    const bases = new Set([src]);
    // try singular folder too
    if (src.startsWith("/images/"))
      bases.add(src.replace("/images/", "/image/"));
    // handle missing space before parenthesis e.g. banking(1) -> banking (1)
    if (src.includes("(") && !src.includes(" (")) {
      bases.add(src.replace("(", " ("));
      if (src.startsWith("/images/")) {
        bases.add(src.replace("/images/", "/image/").replace("(", " ("));
      }
    }

    // Build full list by swapping extensions for each base
    const list = [];
    for (const b of bases) {
      const m = b.match(/\.(png|jpg|jpeg|webp)$/i);
      if (m) {
        const baseNoExt = b.slice(0, -m[0].length);
        IMG_EXTS.forEach((ext) => {
          const cand = `${baseNoExt}.${ext}`;
          if (!list.includes(cand)) list.push(cand);
        });
      } else {
        // no extension: append all
        IMG_EXTS.forEach((ext) => {
          const cand = `${b}.${ext}`;
          if (!list.includes(cand)) list.push(cand);
        });
      }
    }
    return list;
  }, [src]);

  if (hidden) return null;
  const current = candidates[Math.min(idx, candidates.length - 1)];
  return (
    <div
      className={`overflow-hidden ring-1 ring-white/10 bg-white/5 ${containerClass}`}
    >
      <img
        src={current}
        alt={alt}
        className={`w-full object-contain ${imgClass}`}
        onError={() => {
          if (idx < candidates.length - 1) setIdx((v) => v + 1);
          else setHidden(true);
        }}
      />
    </div>
  );
}

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = id ? PROJECT_DETAILS[id] : undefined;

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
      <Link href="/" className="text-sm text-white/60 hover:text-white">
        ← Back
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{project.title}</h1>
      <p className="text-white/70 mt-2 max-w-2xl">{project.description}</p>

      {/* Top video centered */}
      <div className="mt-6 max-w-4xl mx-auto">
        <div className="aspect-video overflow-hidden ring-1 ring-white/10 bg-white/5">
          <video className="w-full h-full" controls preload="metadata">
            {id && (
              <>
                <source src={`/videos/${id}.mp4`} type={VIDEO_MIME.mp4} />
                <source src={`/videos/${id}.webm`} type={VIDEO_MIME.webm} />
                <source src={`/videos/${id}.mov`} type={VIDEO_MIME.mov} />
              </>
            )}
            {/* Also accept local video paths provided in PROJECT_DETAILS.videos */}
            {project?.videos
              ?.filter((v) => typeof v === "string" && v.startsWith("/"))
              .map((v, i) => {
                const ext = v.split(".").pop()?.toLowerCase();
                const type = VIDEO_MIME[ext] || "video/mp4";
                return <source key={`local-${i}`} src={v} type={type} />;
              })}
          </video>
        </div>
      </div>

      {/* Optional embeds below */}
      {project?.videos
        ?.filter((v) => /^https?:\/\//.test(v))
        .map((v, i) => (
          <div
            key={`embed-${i}`}
            className="mt-4 max-w-4xl mx-auto aspect-video overflow-hidden ring-1 ring-white/10 bg-white/5"
          >
            <iframe
              src={v}
              title={`video ${i + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ))}

      {/* Content grid: images on the left, tech on the right */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {project?.images?.length ? (
              project.images.map((src, i) => (
                <ResilientImage
                  key={`img-${i}`}
                  src={src}
                  alt={`screenshot ${i + 1}`}
                  containerClass="aspect-[9/16]"
                  imgClass="h-full"
                />
              ))
            ) : (
              <>
                {id && (
                  <LocalImage
                    id={id}
                    containerClass="aspect-[9/16]"
                    imgClass="h-full"
                  />
                )}
                {id &&
                  [1, 2, 3].map((n) => (
                    <LocalImage
                      key={n}
                      id={id}
                      suffix={n}
                      containerClass="aspect-[9/16]"
                      imgClass="h-full"
                    />
                  ))}
              </>
            )}
          </div>
        </div>
        <div>
          <div className="p-6 ring-1 ring-white/10 bg-white/5 md:sticky md:top-6">
            <h3 className="font-medium">Tech</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack?.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 bg-white/5 ring-1 ring-white/10"
                >
                  {s}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-4 py-1 text-sm ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                View repo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
