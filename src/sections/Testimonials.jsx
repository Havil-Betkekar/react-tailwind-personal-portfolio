import { Quote } from "lucide-react";
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Feedback from{" "}
            <span className="font-serif italic font-normal text-white">
              collaborators.
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass p-10 rounded-3xl text-center glow-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            <p className="text-xl font-medium mb-4">
              Testimonials coming soon.
            </p>

            <p className="text-muted-foreground">
              Currently focused on delivering high-quality work. Client and team
              feedback will be added here as projects evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
