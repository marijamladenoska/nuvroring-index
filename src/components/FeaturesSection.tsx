import { motion } from "framer-motion";
import { Heart, Moon, Activity, Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Heart Rate Monitoring",
    description:
      "Precision sensors track your heart rate 24/7, providing real-time insights into your cardiovascular health.",
  },
  {
    icon: Moon,
    title: "Sleep Analysis",
    description:
      "Advanced sleep tracking measures your sleep stages, quality, and patterns to optimize your rest.",
  },
  {
    icon: Activity,
    title: "Activity Tracking",
    description:
      "Automatically detects and records your daily activities, steps, and calories burned.",
  },
  {
    icon: Zap,
    title: "7-Day Battery",
    description:
      "Ultra-efficient power management ensures a full week of use on a single charge.",
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description:
      "Crafted from aerospace-grade titanium with a hypoallergenic inner coating for all-day comfort.",
  },
  {
    icon: Smartphone,
    title: "Seamless Sync",
    description:
      "Instantly syncs with the NuvroRing app on iOS and Android for comprehensive health insights.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Engineered for
            <span className="text-gradient-gold block">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every detail meticulously designed to deliver an unparalleled
            experience in health monitoring and style.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(43,74%,49%,0.1)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-medium mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
