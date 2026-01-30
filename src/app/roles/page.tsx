"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const roleCategories = [
  {
    title: "Customer Service",
    gradient: "from-blue-800/50 to-cyan-800/50",
    roles: [
      { name: "Customer Support Rep", salary: "$1,200/mo" },
      { name: "Phone Receptionist", salary: "$1,200/mo" },
      { name: "Live Chat Specialist", salary: "$1,200/mo" },
    ],
    description:
      "Pre-vetted support reps who handle calls, chats, and tickets — so your customers stay happy and your phone stops going to voicemail.",
  },
  {
    title: "Administrative",
    gradient: "from-purple-800/50 to-indigo-800/50",
    roles: [
      { name: "Executive Assistant", salary: "$1,200/mo" },
      { name: "Data Entry Specialist", salary: "$1,200/mo" },
      { name: "Appointment Scheduler", salary: "$1,200/mo" },
    ],
    description:
      "Executive assistants and schedulers who keep your operations running — from inbox management to appointment coordination.",
  },
  {
    title: "Marketing",
    gradient: "from-emerald-800/50 to-teal-800/50",
    roles: [
      { name: "Social Media Manager", salary: "$1,200/mo" },
      { name: "Email Marketing Specialist", salary: "$1,200/mo" },
      { name: "Content Creator", salary: "$1,200/mo" },
    ],
    description:
      "Social media managers, email specialists, and content creators who grow your brand without the agency price tag.",
  },
  {
    title: "Bookkeeping",
    gradient: "from-amber-800/50 to-orange-800/50",
    roles: [
      { name: "Bookkeeper", salary: "$1,200/mo" },
      { name: "Accounts Payable Specialist", salary: "$1,200/mo" },
      { name: "Payroll Administrator", salary: "$1,200/mo" },
    ],
    description:
      "Certified bookkeepers and payroll administrators who keep your books clean and your finances organized.",
  },
  {
    title: "Operations",
    gradient: "from-rose-800/50 to-pink-800/50",
    roles: [
      { name: "Inventory Coordinator", salary: "$1,200/mo" },
      { name: "Logistics Coordinator", salary: "$1,200/mo" },
      { name: "Quality Assurance", salary: "$1,200/mo" },
    ],
    description:
      "Operations coordinators who manage inventory, logistics, and quality — keeping your franchise running smoothly.",
  },
  {
    title: "Training & HR",
    gradient: "from-sky-800/50 to-blue-800/50",
    roles: [
      { name: "Training Coordinator", salary: "$1,200/mo" },
      { name: "HR Assistant", salary: "$1,200/mo" },
      { name: "Documentation Specialist", salary: "$1,200/mo" },
    ],
    description:
      "Training coordinators and HR assistants who onboard new hires, manage documentation, and maintain compliance.",
  },
];

export default function RolesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium text-zee-heading tracking-tight mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Pre-vetted talent, ready to start.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-zee-body max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Browse our talent categories. Every candidate is screened,
            English-fluent, and ready to work within one week.
          </motion.p>
        </div>
      </section>

      {/* Category Cards — AngelList grid style */}
      <section className="section-divider">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roleCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group"
              >
                {/* Title */}
                <h3 className="text-white text-base font-medium mb-4">
                  {cat.title}
                </h3>

                {/* Image card */}
                <div className="relative aspect-[4/3] rounded-card overflow-hidden mb-4 cursor-pointer">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} group-hover:scale-[1.04] transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-zee-bg/30" />

                  {/* Roles list overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    {cat.roles.map((role) => (
                      <div
                        key={role.name}
                        className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0"
                      >
                        <span className="text-white/80 text-sm">
                          {role.name}
                        </span>
                        <span className="text-white/40 text-xs font-mono">
                          {role.salary}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zee-body text-sm leading-relaxed">
                  {cat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-divider">
        <div className="container-custom section-padding">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-medium text-zee-heading tracking-tight mb-5">
              Don&apos;t see what you need?
            </h2>
            <p className="text-lg text-zee-body mb-8">
              We place talent across dozens of roles. Tell us what you&apos;re
              looking for and we&apos;ll find the right fit.
            </p>
            <Link
              href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
              target="_blank"
              className="btn-primary"
            >
              Request a Custom Role
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
