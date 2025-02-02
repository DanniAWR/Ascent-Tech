
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
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


function classNames(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ')
}

//------------------------------------------------------------

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();  // Empêche le rechargement de la page

  const formData = {
    firstName: event.currentTarget['first-name'].value.trim(),
    lastName: event.currentTarget['last-name'].value.trim(),
    company: event.currentTarget.company.value.trim(),
    email: event.currentTarget.email.value.trim(),
    phoneNumber: event.currentTarget['phone-number'].value.trim(),
    message: event.currentTarget.message.value.trim()
  };

  // Vérifie que tous les champs sont remplis
  const isFormValid = Object.values(formData).every(x => x);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex basique pour la validation d'email
  const phoneRegex = /^[0-9]{10}$/; // Regex pour un numéro de téléphone de 10 chiffres, ajustez selon vos besoins

  if (!isFormValid) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  if (!emailRegex.test(formData.email)) {
    alert('S\'il vous plaît, mettez une adresse email valide.');
    return;
  }

  if (!phoneRegex.test(formData.phoneNumber)) {
    alert('S\'il vous plaît entrer un numéro de téléphone valide.');
    return;
  }

  // Appel API pour envoyer les données par e-mail
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  alert(result.message);  // Afficher une alerte avec la réponse de l'API
};


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
            <a href='/'>
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Home
            </button>
            </a>
            
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

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    
    <div className=" bg-custom-bg text-white min-h-screen">
        <Navbar />
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contactez-nous</h2>
        <p className="mt-2 text-white leading-8 text-gray-600">
        Nous sommes là pour répondre à toutes vos questions. Remplissez le formulaire ci-dessous, et nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
      <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-black"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Field as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Label className="text-sm leading-6 text-white">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-400">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
          <SocialIcons />
      <footer className="text-center py-4 mt-10 border-t border-gray-800">
        <p className="text-gray-500 text-sm">© 2024 Anwar ALLAL. Tous droits réservés. Reproduction interdite.</p>
      </footer>
        </div>
      </form>
    </div>
  )
}

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

