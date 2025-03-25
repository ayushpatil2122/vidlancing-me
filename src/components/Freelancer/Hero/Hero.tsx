"use client"
import { useState } from "react";
import { Search, Upload, Play, Star, Trophy, Film, Clock } from "lucide-react";
import Link from "next/link";

const SearchBar = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="flex max-w-md flex-col gap-4">
      <div
        className={`relative transition-all duration-300 ${
          searchFocused ? "scale-105 shadow-lg" : ""
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg blur opacity-25" />
        <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-2 hover:bg-black/50 transition-colors duration-200">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for video editing expertise..."
              className={`w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none ${
                searchFocused ? 'placeholder:text-transparent' : ''
              }`}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2 px-2">
            {["Motion Graphics", "Color Grading", "VFX", "Sound Design"].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 text-white text-xs px-2 py-1 rounded-full cursor-pointer transition-colors duration-200 hover:bg-gray-300/80 hover:text-slate-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CTAButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg flex items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Link href={"/Freelancer/explore-jobs"}>
          Explore Jobs
        </Link>
      </button>
      <button className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-lg flex items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Play className="mr-2 h-5 w-5" />
        Watch How It Works
      </button>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(95)-4k7f8IpwLz0mWF4VdXlqR7ZXhig2Nd.png",
      alt: "Video editing workspace",
      className: ""
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(94)-rETASEr7Bnb4rC7BsCuLh5RryoS0Gj.png",
      alt: "Video editor at work",
      className: "translate-y-12"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(96)-ogRRfm7Tir4LgvSjrYqBiTTbI3FwzV.png",
      alt: "Video editing software",
      className: ""
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(95)-4k7f8IpwLz0mWF4VdXlqR7ZXhig2Nd.png",
      alt: "Completed video project",
      className: "translate-y-12"
    }
  ];

  return (
    <div className="relative hidden lg:block">
      <div className="absolute inset-0 grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            className={`rounded-lg object-cover ${image.className}`}
          />
        ))}
      </div>
    </div>
  );
};

// Platform Stats Component
const PlatformStats = () => {
  const stats = [
    { icon: Film, value: "50K+", label: "Projects" },
    { icon: Star, value: "10K+", label: "Editors" },
    { icon: Trophy, value: "98%", label: "Success" },
    { icon: Clock, value: "24/7", label: "Support" }
  ];

  return (
    <section className="relative py-12 bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-center space-x-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <stat.icon className="h-6 w-6 text-purple-400 mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <section className="relative px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Where Creative
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Video Editors
                  </span>
                  Come to Shine
                </h1>
                <p className="text-xl text-gray-300 md:text-2xl">
                  Connect with top-tier video editors and bring your vision to
                  life with cutting-edge talent.
                </p>
              </div>

              <SearchBar />
              <CTAButtons />
            </div>

            <ImageGallery />
          </div>
        </div>
      </section>

      <PlatformStats />
    </div>
  );
}