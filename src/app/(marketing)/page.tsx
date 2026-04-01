"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { CoffeeCup } from "@/components/svgs";
import Image from "next/image";
import { TechSolutionsDialog } from "@/components/tech-solutions-dialog";

const whatWeDoItems = [
  {
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    path: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "Sourcing",
    description: "Partnering directly with farms and estates to source traceable, high-quality tea and coffee beans.",
  },
  {
    iconBg: "bg-neutral-100",
    iconColor: "text-neutral-700",
    path: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    title: "Retail",
    description: "Bringing exceptional beans directly to consumers and businesses who value origin and craft.",
  },
  {
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    path: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    title: "Tech Solutions",
    description: "Management tools, D2C infrastructure, and digital operations built for the tea and coffee supply chain.",
  },
];

const techCards = [
  {
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Yield & Harvest Analytics",
    description: "Track harvest volumes, predict yields by lot, and monitor per-hectare output across seasons.",
  },
  {
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    path: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "Origin & Traceability",
    description: "Lot-level records tied to farm location, processing method, and export documentation.",
  },
  {
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Quality Control & Grading",
    description: "Log cupping scores, defect rates, and moisture readings per batch across stations.",
  },
  {
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "Inventory & Stock Management",
    description: "Real-time visibility from cherry to export-ready bags across your warehouse.",
  },
  {
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    title: "Export & Compliance Docs",
    description: "Phytosanitary certs, ICO forms, and buyer contracts — organized and audit-ready.",
  },
  {
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Worker & Labour Tracking",
    description: "Picker counts, wages, and payroll simplified for seasonal labour across estates.",
  },
  {
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    path: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    title: "Infrastructure & DevOps",
    description: "Scalable cloud infrastructure, CI/CD pipelines, and automated deployments that grow with your brand.",
  },
  {
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
    path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Security & Compliance",
    description: "End-to-end security solutions, PCI compliance, and data protection for customer trust.",
  },
  {
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Analytics & Insights",
    description: "Customer behavior analytics, conversion tracking, and business intelligence dashboards.",
  },
  {
    iconBg: "bg-pink-100",
    iconColor: "text-pink-700",
    path: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    title: "E-commerce Optimization",
    description: "Performance optimization, payment integrations, and checkout experience enhancements.",
  },
  {
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Customer Experience",
    description: "Personalization engines, support systems, and loyalty program integrations.",
  },
  {
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    title: "Operations & Automation",
    description: "Inventory management, order fulfillment, and supply chain automation solutions.",
  },
];

export default function Home() {
  const [techDialogOpen, setTechDialogOpen] = useState(false);

  return (
    <div>
      <Script
        id="org-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gray Cup",
            url: "https://graycup.org",
            description: "Global exporter of coffee, tea and spices.",
          }),
        }}
      />
      <div className="mx-auto px-4 lg:px-6 h-auto my-10">
        <div className="md:min-h-screen pt-10 pb-20 max-w-6xl mx-auto md:pb-0 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 items-center">
            {/* Left Column */}
            <div>
              <div>
                <span className="mb-4 sm:ml-0.5 text-sm font-medium uppercase text-neutral-500">
                  We Support Sustainability
                </span>
                <h1 className="relative text-black text-3xl sm:text-4xl lg:text-5xl font-medium sm:leading-[60px] ">
                  Tea, Coffee,
                  <br />
                  and <span>Liquid</span>.
                  <br />
                  Poured into Humans.
                </h1>
              </div>

              <div className="flex relative mt-10 flex-col max:smml-4 ">
                <div className="flex flex-row gap-4">
                  <a href="/contact" target="_blank">
                    <Button variant="lightgray" size="sm" className="">
                      Contact Us
                    </Button>
                  </a>
                  <a
                    href="/shop"
                  >
                    <Button variant="default" size="sm">
                      Shop Products{" "}
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden lg:block">
              <Image
                src="/hero-side.png"
                alt="coffee beans"
                className="rotate-40 "
                draggable="false"
                width={220}
                height={220}
              />
            </div>
          </div>

          <div className="my-20 py-20 bg-neutral-100">
            <h2 className="text-5xl font-medium text-neutral-900 mb-6 flex justify-center flex-row items-center gap-4 font-instrument-sans"></h2>
          </div>

          {/* Sourcing & Retail Identity */}
          <div className="my-10 px-6 py-12">
            <span className="text-xs font-medium uppercase text-neutral-400 tracking-widest">
              What We Do
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-neutral-900 max-w-2xl leading-snug">
              Sourcing and retailing the finest tea and coffee beans — from origin to your cup.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-xl leading-relaxed">
              Gray Cup operates as both a <span className="font-medium text-neutral-700">sourcing company</span> and a <span className="font-medium text-neutral-700">retail company</span>. We work directly with growers to source premium tea and coffee beans, and we bring those products to consumers and businesses who care about quality and transparency. We also provide <span className="font-medium text-neutral-700">tech solutions</span> for farms and D2C brands built around the real challenges of the coffee supply chain.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {whatWeDoItems.map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <div className={`w-8 h-8 rounded-md ${item.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                    <svg className={`w-4 h-4 ${item.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Solutions */}
          <div className="mx-auto px-4 lg:px-6 py-10">
            <div className="mb-6">
              <span className="text-xs font-medium uppercase text-neutral-500">
                Tech Solutions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-medium text-neutral-900">
                Tools for Farms & D2C Brands
              </h2>
              <p className="mt-2 text-sm text-neutral-600 max-w-2xl leading-relaxed">
                From growing and exporting coffee to running a direct-to-consumer brand, we build technology around the real challenges of the supply chain.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-3">
              {techCards.map((card) => (
                <div key={card.title} className="bg-neutral-50 p-4 flex gap-3 items-start">
                  <div className={`w-8 h-8 rounded-md ${card.iconBg} flex items-center justify-center shrink-0`}>
                    <svg className={`w-4 h-4 ${card.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={card.path} />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-sm font-semibold text-neutral-900">{card.title}</h3>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={() => setTechDialogOpen(true)}
                className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
              >
                Request Tech Solutions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <TechSolutionsDialog open={techDialogOpen} onOpenChange={setTechDialogOpen} />

          <div className="my-20 flex flex-col md:items-center px-6 py-10 md:py-20 bg-neutral-50 md:grid md:grid-cols-[70%_30%]">
            <div>
              <div className="block md:hidden max-md:pb-5">
                <CoffeeCup />
              </div>

              <h2 className="text-2xl sm:text-4xl font-medium text-neutral-900 mb-6 font-instrument-sans">
                Gray Cup Narrative
              </h2>

              <p className="text-md sm:text-lg mb-10 text-neutral-700 my-4 max-w-2xl leading-relaxed">
                <span className="mb-4">
                  Gray Cup creates sustainable, high-quality essentials for
                  everything that belongs in your cup.
                </span>
                {" "}Built on the idea of a{" "}
                <span className="font-medium">neutral cup</span>, sustainable,
                balanced, and uncompromising in quality, Gray Cup focuses on
                what truly matters.
                <br />
                <br />
                From coffee and matcha to tea and future essentials, we do not
                chase categories or trends.
                <br />
                <br />
                <span className="font-medium text-neutral-900">
                  The best is what belongs in your cup.
                </span>
              </p>
            </div>

            <div className="hidden md:block">
              <CoffeeCup />
            </div>

            <a href="https://discord.gg/gpRxmW63JW" target="_blank">
              <Button variant="gray">Join Our Discord</Button>
            </a>
          </div>

          {/* <Image src="/beans-circle.webp" alt="coffee beans" className="pl-2" width={200} height={200} /> */}
        </div>
      </div>
      <div className="px-4 lg:px-6"></div>
      {/* <CoffeeSection /> */}

    </div>
  );
}
