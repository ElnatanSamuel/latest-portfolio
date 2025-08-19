import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Demo data: split into Mobile and Web groups
const MOBILE_DATA = [
  {
    id: "bobo-food",
    title: "Bobo Food: Food Ordering & Delivery App",
    desc: "Bobo Food is a React Native food ordering and delivery app where users can browse menus, place orders, and track deliveries in real time. It includes secure authentication, OTP verification, and push notifications for order updates from confirmation to arrival.",
    stack: ["React Native", "Tailwind CSS", "Firebase", "zustand"],
    image: "/bobofood.png",
  },
  {
    id: "finex",
    title: "Finex – Mobile Banking & Finance App",
    desc: "Finex is a React Native mobile banking app designed for secure and convenient financial management. Users can transfer funds, withdraw money, manage beneficiaries, send messages to support, and receive instant notifications. The app also supports mobile top-ups, currency exchange, and transaction history tracking, all within a clean and intuitive interface.",
    stack: ["React Native", "Tailwind CSS", "Firebase", "zustand"],
    image: "/finex.png",
  },
  {
    id: "easy-rider",
    title: "EasyRider – Ride-Hailing & Vehicle Booking App",
    desc: "EasyRider is a React Native app that allows users to book taxis, cars, bicycles, or self-drive vehicles. It includes secure authentication, integrated payment processing, and real-time GPS tracking, real-time chat and call feature. Users receive instant notifications for booking confirmation, driver arrival, and trip completion.",
    stack: ["React Native", "Tailwind CSS", "zustand"],
    image: "/easyride.png",
  },
  {
    id: "conify",
    title: "Conify - Construction Project Management App ",
    desc: "Conify is a mobile application designed to streamline construction project management and documentation. The app allows construction teams to track daily progress, manage resources, and generate reports efficiently. Key features include daily reporting, photo documentation, resource tracking, and phase management.",
    stack: [
      "React Native",
      "Tailwind CSS",
      "TypeScript",
      "Firebase",
      "React-Redux",
      "GraphQL",
    ],
    image: "/conify.png",
  },
];

const WEB_DATA = [
  {
    id: "nest-noir",
    title: "Nest & Noir: Furniture Store",
    desc: "A luxury furniture e-commerce platform built with React.js, featuring a responsive design with dark mode support, product filtering, and Redux-powered shopping cart. Includes an admin dashboard with real-time sales analytics and inventory management. Built using React, Redux Toolkit, Tailwind CSS, and Chart.js",
    stack: ["React", "Redux Toolkit", "TailwindCSS"],
    image: "/nestnoir.png",
    live: "https://ecom-app-drab.vercel.app/",
    github: "https://github.com/ElnatanSamuel/ecom-app",
  },
  {
    id: "nest-noir-dash",
    title: "Nest & Noir: Admin Dashboard",
    desc: "A React-based admin dashboard featuring real-time analytics and comprehensive product management. Built with Chart.js for data visualization, the dashboard displays key metrics including sales trends, inventory levels, and category distribution. Features include dark/light mode toggle, collapsible sidebar navigation, and a responsive design using Tailwind CSS. The interface allows admins to manage featured products, track top-selling items, and monitor monthly revenue through an intuitive, data-driven interface.",
    stack: ["React", "ExpressJS", "MongoDB", "Chart.js", "TailwindCSS"],
    image: "/nestnoirdash.png",
    live: "https://ecom-app-drab.vercel.app/",
    github: "https://github.com/ElnatanSamuel/ecom-app",
  },
  {
    id: "sync",
    title: "Sync: AI resume and cover-letter generator ",
    desc: "AI-powered resume & cover letter generator built with Next.js and Gemini API. Simply input your info and job description to get tailored, ATS-friendly documents instantly. Edit on the spot and export clean PDFs with one click. Fully server-less with Next.js API routes handling AI requests, no database needed. Fast, scalable, and perfect for job seekers looking to simplify applications.",
    stack: ["Next.js", "Gemini API", "Tailwind"],
    image: "/sync.png",
    live: "https://syncairesume.vercel.app/",
    github: "https://github.com/ElnatanSamuel/airesume",
  },
  {
    id: "ikim-tech",
    title: "Ikim Tech Landing Page",
    desc: "I designed and developed a sleek, modern website for IKIM Techs using React. The site features smooth animations, responsive layouts, and a clean UI to reflect their cutting-edge digital services. Fully optimized for performance and user experience.",
    stack: ["ReactJS", "Tailwind", "Framer"],
    image: "/ikim.jpg",
    live: "https://ikimtechfront.vercel.app/",
    github: "https://github.com/ElnatanSamuel/ikimtechfront",
  },
  {
    id: "skill-sync",
    title: "SkillSync: Sync Your Goals",
    desc: "SkillSync is a full-stack web application designed to help users track, organize, and optimize their skill development journey. Built with React for the frontend, Node.js and Express for the backend, and PostgreSQL for persistent storage, SkillSync provides an intuitive dashboard where users can set learning goals, log sessions, monitor progress, and gain insights into their growth patterns. SkillSync streamlines the learning process by turning scattered practice into structured growth ideal for developers, designers, students, or anyone working on personal or professional skill-building.",
    stack: ["ReactJS", "Tailwind", "PostgreSQL", "NodeJS", "Express", "JWT"],
    image: "/skillsync.png",
    live: "https://skillsync-front.vercel.app/",
    github: "https://github.com/ElnatanSamuel/skillsync",
  },
  {
    id: "ale-interior",
    title: "Ale Interior Landing Page",
    desc: "Ale Interior is a modern website showcasing high-quality interior design services. Built with React for a dynamic and responsive frontend, the site provides users with a seamless browsing experience. The content is managed through Sanity CMS, allowing for easy updates and content management. With a clean and stylish design, the website highlights Ale Interior's portfolio and services, offering an engaging and professional online presence.",
    stack: ["ReactJS", "Tailwind", "Sanity CMS"],
    image: "/aleinterior.png",
    live: "https://ale-interior.vercel.app/",
    github: "https://github.com/ElnatanSamuel/ale-interior",
  },
];

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // subtle vertical parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <div ref={ref} className="h-screen flex items-center justify-center">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="h-[80vh] w-[86vw] md:w-[60vw] object-cover  shadow-[0_10px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
      />
    </div>
  );
}

export default function Projects() {
  // Which section (mobile/web) is in view
  const [section, setSection] = useState("mobile");
  // Active project index per section
  const [activeMobile, setActiveMobile] = useState(0);
  const [activeWeb, setActiveWeb] = useState(0);

  const mobileRefs = useRef([]);
  const webRefs = useRef([]);

  const mobileAll = useMemo(() => MOBILE_DATA, []);
  const webAll = useMemo(() => WEB_DATA, []);

  // Observe projects inside each section (desktop only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    mobileRefs.current = mobileRefs.current.slice(0, mobileAll.length);
    webRefs.current = webRefs.current.slice(0, webAll.length);

    const obsA = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActiveMobile(idx);
          }
        });
      },
      { threshold: [0.6] }
    );
    const obsB = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActiveWeb(idx);
          }
        });
      },
      { threshold: [0.6] }
    );

    mobileRefs.current.forEach((el) => el && obsA.observe(el));
    webRefs.current.forEach((el) => el && obsB.observe(el));

    return () => {
      obsA.disconnect();
      obsB.disconnect();
    };
  }, [mobileAll.length, webAll.length]);

  // Observe which section is in view (scrollspy)
  useEffect(() => {
    const mobileEl = document.getElementById("projects-mobile");
    const webEl = document.getElementById("projects-web");
    if (!mobileEl || !webEl) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("id");
            setSection(id === "projects-web" ? "web" : "mobile");
          }
        });
      },
      { threshold: 0.4 }
    );
    spy.observe(mobileEl);
    spy.observe(webEl);
    return () => spy.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="projects"
      className="relative w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-24">
        {/* Section-scoped vertical nav appears beside the description (added inside each subsection below) */}

        {/* Mobile Projects section */}
        <div id="projects-mobile" className="scroll-mt-24">
          <div className="mb-10 lg:sticky lg:top-0 lg:z-10 bg-[#0D0F10] pt-10">
            <div className="text-[#FF0000] uppercase tracking-wider text-xs mb-2">
              Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Mobile Projects
            </h2>
          </div>
          {/* Desktop layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: scrolling images */}
            <div className="relative">
              <div>
                {mobileAll.map((p, i) => (
                  <div
                    key={p.id}
                    ref={(el) => (mobileRefs.current[i] = el)}
                    data-index={i}
                    className="relative"
                  >
                    <ParallaxImage src={p.image} alt={p.title} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: sticky description */}
            <div className="lg:h-[100vh] lg:sticky lg:top-0 flex items-center">
              <div className="w-full max-w-md lg:max-w-none pr-10">
                <div className="text-[#FF0000] uppercase tracking-wider text-xs mb-3">
                  Selected Work
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold">
                  {mobileAll[activeMobile]?.title}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {mobileAll[activeMobile]?.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {mobileAll[activeMobile]?.stack?.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1  bg-white/5 ring-1 ring-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#FF0000] to-transparent" />
                <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
                  <Link
                    href={`/projects/${mobileAll[activeMobile]?.id || ""}`}
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span className="font-bold ">Details</span>
                    <span className="font-bold text-lg">→</span>
                  </Link>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span className="font-bold ">GitHub</span>
                    <span className="font-bold text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden space-y-14">
            {mobileAll.map((p) => (
              <div key={p.id}>
                <div className="mb-4">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-[56vh] w-full object-cover  shadow-[0_10px_30px_rgba(0,0,0,0.4)] ring-1 ring-white/5"
                  />
                </div>
                <div>
                  <div className="text-[#FF0000] uppercase tracking-wider text-xs mb-2">
                    Selected Work
                  </div>
                  <h3 className="text-2xl font-extrabold">{p.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 bg-white/5 ring-1 ring-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Projects section */}
        <div id="projects-web" className="scroll-mt-24 mt-24">
          <div className="mb-10 lg:sticky lg:top-0 lg:z-10 bg-[#0D0F10] pt-10">
            <div className="text-[#FF0000] uppercase tracking-wider text-xs mb-2">
              Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Web Projects
            </h2>
          </div>
          {/* Desktop layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: scrolling images */}
            <div className="relative">
              <div>
                {webAll.map((p, i) => (
                  <div
                    key={p.id}
                    ref={(el) => (webRefs.current[i] = el)}
                    data-index={i}
                    className="relative"
                  >
                    <ParallaxImage src={p.image} alt={p.title} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: sticky description */}
            <div className="lg:h-[100vh] lg:sticky lg:top-0 flex items-center">
              <div className="w-full max-w-md lg:max-w-none pr-10">
                <div className="text-[#FF0000] uppercase tracking-wider text-xs mb-3">
                  Selected Work
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold">
                  {webAll[activeWeb]?.title}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {webAll[activeWeb]?.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {webAll[activeWeb]?.stack?.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1  bg-white/5 ring-1 ring-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#FF0000] to-transparent" />
                <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
                  <a
                    href={webAll[activeWeb]?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span className="font-bold">Live</span>
                    <span className="font-bold text-lg">→</span>
                  </a>
                  <a
                    href={webAll[activeWeb]?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span className="font-bold">GitHub</span>
                    <span className="font-bold text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden space-y-14">
            {webAll.map((p) => (
              <div key={p.id}>
                <div className="mb-4">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-[56vh] w-full object-cover  shadow-[0_10px_30px_rgba(0,0,0,0.4)] ring-1 ring-white/5"
                  />
                </div>
                <div>
                  <div className="text-[#FF0000] uppercase tracking-wider text-xs mb-2">
                    Selected Work
                  </div>
                  <h3 className="text-2xl font-extrabold">{p.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 bg-white/5 ring-1 ring-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
