"use client";

import { useState, useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import Link from "next/link";

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

export default function PricingPage() {
  const [monthlySalary, setMonthlySalary] = useState(1000);

  const annualSalary = monthlySalary * 12;
  const annualCost = Math.round(annualSalary * 0.35);
  const discountedCost = Math.round(annualCost * 0.6);

  const sliderPercent = ((monthlySalary - 500) / (5000 - 500)) * 100;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-medium text-zee-heading tracking-tight mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Pricing that makes sense.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-zee-body max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            See exactly what you&apos;ll save. Slide to your US-equivalent
            monthly salary and watch the numbers work in your favor.
          </motion.p>
        </div>
      </section>

      {/* Slider */}
      <section className="section-divider">
        <div className="container-custom section-padding">
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

              <div className="flex justify-between text-white/30 text-sm mb-3 font-mono">
                <span>$500/mo</span>
                <span>$5,000/mo</span>
              </div>

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
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-divider">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
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
              <p className="text-white/40 text-sm mb-8">
                One-time annual payment
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
                Subscribe to our newsletter or leave a verified review
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

      {/* CTA */}
      <section className="section-divider">
        <div className="container-custom section-padding">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-medium text-zee-heading tracking-tight mb-5">
              Questions? Let&apos;s talk.
            </h2>
            <p className="text-lg text-zee-body mb-8">
              Our team is happy to walk you through pricing and find the best
              option for your needs.
            </p>
            <Link
              href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
              target="_blank"
              className="btn-primary"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
