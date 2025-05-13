"use client";

import { Scene } from "@/components/Scene";

export default function Home() {
  return (
    <main className="relative">
      <section
        id="hero"
        className="h-screen flex items-end justify-center relative">
        <div id="text-1" className="text-center mb-64 z-10">
          <h1 className="text-8xl font-medium mb-5">Meet the MacBook Pro M4</h1>
          <p className="text-4xl font-light text-gray-500">
            Power re-imagined.
          </p>
        </div>
      </section>
      <section
        id="section1"
        className="h-screen flex items-center justify-start relative">
        <div className="container mx-auto px-6">
          <div id="text-2" className="max-w-lg opacity-0">
            <h2 className="text-7xl font-medium mb-4">Retina Display</h2>
            <p className="text-3xl font-light text-gray-500">
              Razor-sharp text, breathtaking colors, and lifelike tones for an
              immersive visual experience.
            </p>
          </div>
        </div>
      </section>
      <section
        id="section2"
        className="h-screen flex items-center justify-end relative">
        <div id="text-3" className="container mx-auto px-6 opacity-0">
          <div className="max-w-lg ml-auto text-right">
            <h2 className="text-7xl font-medium mb-4 text-gray-800">
              Top of Class Performance
            </h2>
            <p className="text-3xl font-light text-gray-500">
              Handle the most computationally intensive tasks with ease.
            </p>
          </div>
        </div>
      </section>
      <Scene />
    </main>
  );
}
