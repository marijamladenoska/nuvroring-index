import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Limited Edition
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light mb-6">
            Be Among the
            <span className="text-gradient-gold block mt-2">First</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Pre-order now and receive exclusive early-bird pricing, priority
            shipping, and a complimentary premium charging case.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl">
              Pre-Order for $399
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-border/30"
          >
            {[
              "Free Shipping",
              "30-Day Returns",
              "2-Year Warranty",
              "Secure Checkout",
            ].map((badge, index) => (
              <span
                key={index}
                className="text-sm text-muted-foreground tracking-wide"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
