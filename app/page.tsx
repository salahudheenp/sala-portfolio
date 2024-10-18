import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xlw-full">
        <h1>Hello portfolio</h1>
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
      </div>
    </main>
  );
}
