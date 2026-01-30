"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Pricing helpers
   ───────────────────────────────────────────── */

function formatCurrency(value: number): string {
  return "$" + value.toLocaleString();
}

function AnimatedPrice({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const animatingFrom = useRef(value);

  useEffect(() => {
    const controls = animate(animatingFrom.current, value, {
      duration: 0.3,
      onUpdate: (v) => {
        setDisplayValue(Math.round(v));
        animatingFrom.current = v;
      },
    });
    return () => controls.stop();
  }, [value]);

  return <span className={className}>{formatCurrency(displayValue)}</span>;
}

/* ─────────────────────────────────────────────
   Rotating role ticker for hero
   ───────────────────────────────────────────── */

const roles = [
  "Executive Assistant",
  "Customer Support Rep",
  "Sales Development Rep",
  "Marketing Coordinator",
  "Bookkeeper",
];

function RoleTicker() {
  const [index, setIndex] = useState(0);
  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % roles.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 2400);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <>
      <motion.span
        className="inline-flex items-center border border-white/20 rounded-full overflow-hidden px-[0.35em]"
        layout
        style={{
          height: "1.2em",
          verticalAlign: "baseline",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <span
          className="relative inline-block overflow-hidden"
          style={{ height: "1.15em" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              className="inline-block text-zee-heading"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-110%", opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.span>
    </>
  );
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function HomePage() {
  const [monthlySalary, setMonthlySalary] = useState(1000);

  const annualSalary = monthlySalary * 12;
  const annualCost = Math.round(annualSalary * 0.35);
  const discountedCost = Math.round(annualCost * 0.6);

  const sliderPercent = ((monthlySalary - 500) / (5000 - 500)) * 100;

  return (
    <>
      {/* ═══════════════════════════════════════════
          Hero — AngelList style, left-aligned
          ═══════════════════════════════════════════ */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          {/* Pill tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/roles"
              className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2 text-sm text-zee-mint hover:bg-white/[0.1] transition-colors"
            >
              Now placing talent across 50+ franchise brands
              <span className="text-white/50">→</span>
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.25rem] font-medium text-zee-heading leading-[1.1] tracking-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hire Your Offshore
            <br />
            <RoleTicker />
            <br />
            Within One Week
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-lg md:text-xl text-zee-body max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We specialize in placing global talent into critical roles across
            your franchise business.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
              target="_blank"
              className="btn-primary"
            >
              Schedule Call to Hire Talent
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Pricing Preview
          ═══════════════════════════════════════════ */}
      <section className="section-divider">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-zee-heading tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Pricing that makes sense.
            </motion.h2>
            <motion.p
              className="text-zee-body text-lg mb-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Slide the monthly salary to see your total cost of hire.
            </motion.p>
          </div>

          <div className="max-w-2xl">
            <div className="relative pt-16">
              {/* Floating value */}
              <div
                className="absolute top-0 -translate-x-1/2 pointer-events-none"
                style={{
                  left: `calc(${sliderPercent}% + ${(0.5 - sliderPercent / 100) * 24}px)`,
                }}
              >
                <div className="bg-zee-bg-card border border-white/10 text-white font-mono font-medium text-lg px-4 py-2 rounded-button whitespace-nowrap">
                  <span className="text-sm font-normal text-white/40 mr-1">
                    Salary:
                  </span>
                  {formatCurrency(monthlySalary)}
                  <span className="text-sm font-normal text-white/40 ml-0.5">
                    /mo
                  </span>
                </div>
                <div className="w-2.5 h-2.5 bg-zee-bg-card border-r border-b border-white/10 transform rotate-45 mx-auto -mt-1.5" />
              </div>

              {/* Range */}
              <input
                type="range"
                min={500}
                max={5000}
                step={100}
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(Number(e.target.value))}
                className="zee-slider w-full"
                style={{
                  background: `linear-gradient(to right, #C4B5FD ${sliderPercent}%, rgba(255,255,255,0.1) ${sliderPercent}%)`,
                }}
              />
            </div>

            {/* Cost display */}
            <div className="mt-10">
              <div className="inline-flex items-center gap-3 bg-zee-bg-card border border-white/10 px-6 py-3 rounded-button">
                <span className="text-white/50 text-sm">Cost to Hire:</span>
                <AnimatedPrice
                  value={annualCost}
                  className="text-zee-heading font-mono font-semibold text-2xl"
                />
              </div>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 flex flex-col"
            >
              <h3 className="text-lg font-medium text-white mb-6">
                Pay in Full
              </h3>
              <div className="mb-3">
                <AnimatedPrice
                  value={annualCost}
                  className="text-zee-heading font-mono text-3xl font-semibold"
                />
              </div>
              <p className="text-white/40 text-sm mb-8">One-time payment</p>
              <div className="mt-auto">
                <Link
                  href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
                  target="_blank"
                  className="btn-ghost w-full justify-center !h-10"
                >
                  Schedule Call to Hire Talent
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8 flex flex-col"
            >
              <h3 className="text-lg font-medium text-white mb-1">
                Pay in Full
              </h3>
              <p className="text-sm font-medium text-zee-heading mb-6">
                + Payroll Support
              </p>
              <div className="mb-3">
                <AnimatedPrice
                  value={annualCost}
                  className="text-zee-heading font-mono text-2xl font-semibold"
                />
                <span className="text-zee-heading font-mono text-lg ml-1">
                  + $200/mo
                </span>
              </div>
              <p className="text-white/40 text-sm mb-8">
                Includes offshore payroll management
              </p>
              <div className="mt-auto">
                <Link
                  href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
                  target="_blank"
                  className="btn-ghost w-full justify-center !h-10"
                >
                  Schedule Call to Hire Talent
                </Link>
              </div>
            </motion.div>

            {/* Card 3 — Featured */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8 flex flex-col border-zee-heading/30"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-zee-heading">
                  40% OFF
                </h3>
                <span className="text-xs font-medium text-zee-mint bg-zee-mint/10 px-2.5 py-1 rounded-full border border-zee-mint/20">
                  Promo
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <AnimatedPrice
                  value={annualCost}
                  className="text-white/30 font-mono text-lg line-through"
                />
                <AnimatedPrice
                  value={discountedCost}
                  className="text-zee-heading font-mono text-3xl font-semibold"
                />
              </div>
              <p className="text-white/40 text-sm mb-8">
                Get 40% off your first hire when you leave a verified review on
                ZeeScores
              </p>
              <div className="mt-auto">
                <Link
                  href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
                  target="_blank"
                  className="btn-primary w-full justify-center !h-10"
                >
                  Claim Discount
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          How It Works
          ═══════════════════════════════════════════ */}
      <section className="section-divider">
        <div className="container-custom section-padding">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-zee-heading tracking-tight mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How it works.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                step: "01",
                title: "Tell us what you need",
                description:
                  "A CSR? A bookkeeper? Someone to stop your phone from going to voicemail? We've got you.",
              },
              {
                step: "02",
                title: "Meet pre-vetted candidates",
                description:
                  "Browse profiles with video intros. Interview your favorites. We coordinate everything.",
              },
              {
                step: "03",
                title: "Hire and go",
                description:
                  "Make an offer. We handle onboarding. You get back to running your business.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span className="font-mono text-white/20 text-sm mb-4 block">
                  {item.step}
                </span>
                <h3 className="text-xl font-medium text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zee-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Final CTA
          ═══════════════════════════════════════════ */}
      <section className="section-divider">
        <div className="container-custom section-padding">
          <div className="max-w-2xl">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-zee-heading tracking-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Your next hire is already waiting.
            </motion.h2>
            <motion.p
              className="text-lg text-zee-body mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Browse available talent or book a call.
              <br />
              No commitment, no BS.
            </motion.p>
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
                target="_blank"
                className="btn-primary"
              >
                See Available Talent
              </Link>
              <Link
                href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
                target="_blank"
                className="btn-ghost"
              >
                Book a Call
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
