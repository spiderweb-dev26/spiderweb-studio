import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";

export const metadata = {
  title: "SpiderWeb Studio | We Build the Web",
  description: "Elite web design and development studio creating high-performance digital experiences.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative selection:bg-blue-500 selection:text-white">
      {/* Decorative Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <Hero />
      <BentoGrid />
    </main>
  );
}
