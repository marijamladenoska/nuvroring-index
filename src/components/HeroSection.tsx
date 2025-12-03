import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/ring-hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="NuvroRing Smart Ring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Gold Glow Effect */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] animate-pulse" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary tracking-wide">
              Now Available for Pre-Order
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6"
          >
            Luxury
            <br />
            <span className="text-gradient-gold font-medium">Meets</span>
            <br />
            Technology
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Experience the future of wearable intelligence. NuvroRing combines
            exquisite craftsmanship with cutting-edge health monitoring
            technology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="luxury" size="xl">
              Pre-Order Now
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2" size={18} />
              Watch Film
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-12 mt-16 pt-8 border-t border-border/30"
          >
            {[
              { value: "7", label: "Day Battery" },
              { value: "24/7", label: "Health Tracking" },
              { value: "3ATM", label: "Water Resistant" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-display text-3xl md:text-4xl text-primary font-medium">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
