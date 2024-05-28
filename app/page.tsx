'use client';

import React, { useState, useRef, useEffect } from "react";
import { Vortex } from "@/components/ui/vortex";
import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'; 
import { Meteors } from '@/components/ui/meteors';
import { LayoutGrid } from "@/components/ui/layout-grid";
import { FaTwitter, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa'; 
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Spotlight } from "@/components/ui/Spotlight";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar1({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export const buttons = [
  {
    name: "Sketch",
    description: "Sketch button for your website",
 
    component: (
      <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        Sketch
      </button>
    ),
  },
  {
    name: "Simple",
    description: "Elegant button for your website",
    component: (
      <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        Simple
      </button>
    ),
  },
  {
    name: "Invert",
    description: "Simple button that inverts on hover",
    component: (
      <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        Invert it
      </button>
    ),
  },
  {
    name: "Tailwindcss Connect",
    description: "Button featured on Tailwindcss Connect website",
    showDot: false,
    component: (
      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>{`Tailwind Connect`}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    ),
  },
  {
    name: "Gradient",
    description: "Simple Gradient button with rounded corners",
    component: (
      <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
        Gradient
      </button>
    ),
  },
  {
    name: "Unapologetic",
    description: "Unapologetic button with perfect corners",
    component: (
      <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
        <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
        <span className="relative">Unapologetic</span>
      </button>
    ),
  },
  {
    name: "Lit up borders",
    description: "Gradient button with perfect corners",
    component: (
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Lit up borders
        </div>
      </button>
    ),
  },
  {
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Border Magic
        </span>
      </button>
    ),
  },
 
  {
    name: "Brutal",
    description: "Brutal button for your website",
    component: (
      <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
        Brutal
      </button>
    ),
  },
  {
    name: "Favourite",
    description: "Favourite button for your website",
    component: (
      <button className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
        Favourite
      </button>
    ),
  },
  {
    name: "Outline",
    description: "Outline button for your website",
    component: (
      <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
        Outline
      </button>
    ),
  },
  {
    name: "Shimmer",
    description: "Shimmer button for your website",
    showDot: false,
    component: (
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Shimmer
      </button>
    ),
    code: `
        // Button code
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button>
  
        // tailwind.config.js code
        {
          "animation": {
            shimmer: "shimmer 2s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          }
        }
      `,
  },
  {
    name: "Next.js Blue",
    description: "Next.js Blue button for your website",
    component: (
      <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
        Next.js Blue
      </button>
    ),
  },
  {
    name: "Next.js White",
    description: "Next.js White button for your website",
    component: (
      <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
        Next White
      </button>
    ),
  },
  {
    name: "Spotify",
    description: "Spotify button for your website",
    component: (
      <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
        Spotify
      </button>
    ),
  },
  {
    name: "Backdrop Blur",
    description: "Outline button for your website",
    showDot: false,
    component: (
      <button className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
        Backdrop blur
      </button>
    ),
  },
  {
    name: "Playlist",
    description: "Playlist button for your website",
    component: (
      <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
        Playlist
      </button>
    ),
  },
  {
    name: "Figma",
    description: "Figma button for your website",
    component: (
      <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        Figma
      </button>
    ),
  },
  {
    name: "Figma Outline",
    description: "Figma Outline button for your website",
    component: (
      <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        Figma Outline
      </button>
    ),
  },
  {
    name: "Top Gradient",
    description: "Top Gradient button for your website",
    showDot: false,
    component: (
      <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <span className="relative z-20">Top gradient</span>
      </button>
    ),
  },
];


// Ajout des composants de contenu pour les cartes
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Bot Discord Avancé en Python</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Développement d'un bot Discord en Python intégrant la gestion des rôles, la sécurité des serveurs et un système de monnaie virtuelle pour encourager l'activité communautaire.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Logiciel pour Robot Nettoyeur de Plage Autonome</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      En tant que chef d'équipe, j'ai développé un logiciel pour un robot nettoyeur de plage autonome, incluant la communication en temps réel, l'échange de données et l'intégration cartographique pour optimiser les parcours de nettoyage.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Création de Portfolio avec React et JSX</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Conception et développement de mon portfolio numérique en utilisant React et JSX pour un design responsive et interactif, avec des composants réutilisables et un code optimisé.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Jeu VR de Tir à l'Arc</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Un projet collaboratif avec mon ami Adam, consistant en un jeu en réalité virtuelle où les joueurs doivent viser des cibles avec un arc et tirer sur des cercles dans un temps limité.
      </p>
    </div>
  );
};

//-------------------------------------------------------------------------------

const Navbar = () => {
  const words = ["Back-End", "Front-End", "FullStack"];
  return (
    <nav className="bg-black text-white py-4 relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-xl font-bold">
          {/* Logo Section */}
          <img src="/images/logo.png" alt="Logo Anwar ALLAL" className="mr-3 h-28 w-28" />
          <div>
            <Link href="/">ASCENT Tech | </Link>
            <FlipWords words={words} /><br />
          </div>
        </div>
        {/* New Buttons with Figma Style */}
        <div className="flex space-x-4">
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Home
          </button>
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Histoire
          </button>
          <a href="/contact">
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Me contacter
          </button>
          </a>
          
        </div>
      </div>
    </nav>
  );
};


export const projects = [
  {
    title: "💻 Développement Web",
    description:
      "Expertise en React, Vue.js, et développement full-stack.",
    link: "",
  },
  {
    title: "🚀 Design UI/UX",
    description:
      "Création de designs intuitifs et esthétiques.",
    link: "",
  },
  {
    title: "📈 Gestion de Projet",
    description:
      "Coordination et gestion efficace des projets.",
    link: "",
  },
  {
    title: "🤖 Développement de Bots et Automatisation",
    description:
      "Création de bots pour Discord et autres plateformes, intégration de scripts automatisés.",
    link: "",
  },
  {
    title: "🔒 Sécurité des Applications et des serveurs",
    description:
      "Mise en œuvre de mesures de sécurité pour les applications et les serveurs.",
    link: "",
  },
  {
    title: "🗄️ Intégration et Gestion de Bases de Données",
    description:
      "Conception et gestion de bases de données, intégration avec des applications.",
    link: "",
  },
];

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/images/dev1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/7.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/portfolio.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/images/vr.jpg",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-4 mt-10">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white text-2xl hover:text-gray-400" />
      </a>
    </div>
  );
};
const HomePage = () => {
  const layoutGridRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    if (layoutGridRef.current) {
      layoutGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-custom-bg text-white">
      
      <Navbar />
      <div className="relative pt-40 min-h-screen">
      
        
        <Vortex
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full" 
          
        >
          
          
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Bienvenue dans Mon Univers de Codage
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Explorez mes projets et compétences en développement web, automatisation, et plus encore.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a href="/contact">
            <button className="relative p-[3px]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div>
              <div className="px-8 py-2 bg-black rounded-[6px] relative text-white hover:bg-transparent transition duration-200">
                Me contacter
              </div>
            </button>
            </a>
            
            <button className="relative p-[3px]" onClick={scrollToProjects}>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div>
              <div className="px-8 py-2 bg-black rounded-[6px] relative text-white hover:bg-transparent transition duration-200">
                Mes projets
              </div>
            </button>
            
          </div>
          
        </Vortex>
        
        
      </div>
      <Spotlight
         className="-top-1 left-0 md:left-60 md:-top-20"
          fill="white"
          />
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      <div ref={layoutGridRef} className="text-left mt-40">
        <div className="flex justify-between items-center mt-6 ml-64">
          <h2 className="text-4xl font-bold text-white">Mes Projets Récents</h2>
          <button className="flex items-center text-blue-600 hover:text-blue-700 transition duration-200 mr-72">
            Voir tout <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="text-left mt-4 ml-64">
          <h2 className="text-1xl text-white">Voici les projets les plus récents que j'ai réalisés !</h2>
        </div>
        <div className="h-screen py-10 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
      
      <SocialIcons />
      <footer className="text-center py-4 mt-10 border-t border-gray-800">
        <p className="text-gray-500 text-sm">© 2024 Anwar ALLAL. Tous droits réservés. Reproduction interdite.</p>
      </footer>
    </div>
  );
};



export default HomePage;