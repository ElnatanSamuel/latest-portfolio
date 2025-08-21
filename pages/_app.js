import "../styles/globals.css";
import ParticlesBG from "../components/ParticlesBG";

export default function App({ Component, pageProps }) {
  return (
    <div className={`relative min-h-screen bg-[#0D0F10] font-serif`}>
      {/* Global particle background */}
      <ParticlesBG />
      {/* Raise app content above background */}
      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
