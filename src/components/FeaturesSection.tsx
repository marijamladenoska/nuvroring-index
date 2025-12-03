import { motion } from "framer-motion";
import {
  Bell,
  BarChart3,
  Shield,
  Zap,
  Globe,
  History,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "Get push notifications the moment someone follows or unfollows you. Never miss a change.",
    color: "hsl(199, 89%, 48%)",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Beautiful charts and insights showing your follower growth trends over time.",
    color: "hsl(262, 83%, 58%)",
  },
  {
    icon: Globe,
    title: "Multi-Platform Support",
    description:
      "Track followers across Instagram, Twitter, TikTok, YouTube, and more in one place.",
    color: "hsl(160, 84%, 39%)",
  },
  {
    icon: History,
    title: "Complete History",
    description:
      "Access your full follower history. See who followed and unfollowed with timestamps.",
    color: "hsl(24, 95%, 53%)",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays secure. We never share your information or post on your behalf.",
    color: "hsl(350, 89%, 60%)",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Real-time syncing ensures you see changes within seconds of them happening.",
    color: "hsl(199, 89%, 48%)",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-gradient">track growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful tools to understand your audience and grow your following
            across all platforms.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={24} style={{ color: feature.color }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
