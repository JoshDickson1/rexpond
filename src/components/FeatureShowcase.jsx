import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Email Summarization",
    description: "Get quick summaries of long email threads instantly using AI.",
  },
  {
    title: "AI-Powered Reply Suggestions",
    description: "Craft perfect replies with just one click, tailored by context.",
  },
  {
    title: "Automated Outreach Drafts",
    description: "Generate personalized outreach emails for leads and clients.",
  },
  {
    title: "Deliverability Insights",
    description: "Know when, where, and how your emails are landing and performing.",
  },
  {
    title: "Meeting Detection & Actions",
    description: "Detect meeting invites and auto-schedule or suggest replies.",
  },
  {
    title: "Inbox Cleanup Recommendations",
    description: "Let AI recommend what to archive, delete, or prioritize.",
  },
  {
    title: "Smart Tagging & Categorization",
    description: "Automatically label and group emails for a cleaner inbox.",
  },
  {
    title: "One-click Contact Insights",
    description: "See recent activity, context, and history for any contact instantly.",
  },
  {
    title: "Scheduled Smart Follow-ups",
    description: "Never miss a follow-up with auto-generated follow-up drafts.",
  },
  {
    title: "Cross-Platform Syncing",
    description: "Use Rexpond AI across platforms and devices seamlessly.",
  },
];

const FeatureShowcase = () => {
  const scrollRef = useRef(null);
  const scrollPos = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;

    const smoothScroll = () => {
      scrollPos.current += 0.5; // Speed
      if (scrollPos.current >= container.scrollHeight - container.clientHeight) {
        scrollPos.current = 0;
      }

      container.scrollTop = scrollPos.current;
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    const preventScroll = (e) => e.preventDefault();
    container.addEventListener("wheel", preventScroll, { passive: false });
    container.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("wheel", preventScroll);
      container.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <section className="w-full bg-black text-white px-4 md:px-16 overflow-hidden py-20 -mt-15 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-gray-950 via-blue-900 to-gray-950 opacity-30 blur-3xl z-0" />

      <div className="flex flex-col items-center md:flex-row gap-10 items-start relative z-10">
        {/* Left Side Header */}
        <div className="md:w-1/2">
          <div className="mb-8 text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white via-gray-400 to-gray-200 inline-block text-transparent bg-clip-text">
              Here's What Rexpond AI Can Do For You
            </h2>
            <p className="text-gray-300 text-lg md:text-xl">
              Discover features that will revolutionize how you manage your inbox —
              smarter, faster, and tailored to your workflow.
            </p>
          </div>
        </div>

        {/* Right Side Scrollable Cards */}
        <div
          ref={scrollRef}
          className="md:w-1/2 h-[420px] overflow-hidden relative pr-2 pointer-events-none select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`
            .scroll-container::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="scroll-container space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`w-full max-w-sm py-4 px-6 bg-white/5 rounded-xl shadow-md ${
                  index % 2 === 0 ? "ml-0 md:mr-auto" : "mr-0 md:ml-auto"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
