import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Slide } from "react-awesome-reveal";

const Newsletter = () => {
  const [state, handleSubmit] = useForm("xjkwjnjb"); // Replace with your actual Formspree form ID

  return (
    <div className="relative w-full mx-auto md:px-8 px-2 py-10 md:py-15 lin shadow-lg backdrop-blur-lg flex flex-col justify-between md:flex-row items-center gap-6 overflow-hidden" id="news">
      {/* Image Section */}
      <div className="hidden md:block w-1/3 relative">
        <div className="absolute top-0 -left-10 h-full w-1/3 bg-gradient-to-r from-black via-black/80 to-transparent blur-xl z-10 pointer-events-none" />
        <img
          src="/rex-modified.png"
          alt="Newsletter"
          className="w-[720px] rotate-6 -ml-40 opacity-20 shadow-2xl relative z-0"
        />
      </div>

      {/* Text & Form Section */}
      <div className="flex-1 text-white md:pl-0 pr-2 text-left md:text-right pl-2">
        <Slide>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-300">Stay Updated!</h2>
        </Slide>
        <Slide>
          <p className="text-gray-600 mb-5">
            Subscribe to our newsletter for the latest updates and exclusive content.
          </p>
        </Slide>

        <Slide>
          <form onSubmit={handleSubmit} className="relative flex md:justify-end flex-wrap gap-2">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 pl-5 w-full max-w-md rounded-lg bg-[#151515] text-gray-300 placeholder-gray-400 outline-none border border-white/20 focus:ring-2 focus:ring-blue-900"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <button
              type="submit"
              disabled={state.submitting}
              className="px-6 py-3 bg-gradient-to-br from-blue-900 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-all"
            >
              {state.submitting ? "Submitting..." : "Subscribe"}
            </button>
            <ValidationError errors={state.errors} />
            {state.succeeded && <p className="text-green-400 mt-2">Thanks for subscribing!</p>}
          </form>
        </Slide>
      </div>
    </div>
  );
};

export default Newsletter;
