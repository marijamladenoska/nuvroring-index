import { motion } from "framer-motion";
import FollowerCard from "./FollowerCard";
import { Instagram, Twitter, Youtube } from "lucide-react";

const platforms = [
  {
    platform: "Instagram",
    icon: <Instagram size={20} />,
    followers: 24589,
    newFollowers: 156,
    unfollowers: 23,
    color: "#E4405F",
  },
  {
    platform: "Twitter",
    icon: <Twitter size={20} />,
    followers: 12847,
    newFollowers: 89,
    unfollowers: 12,
    color: "#1DA1F2",
  },
  {
    platform: "YouTube",
    icon: <Youtube size={20} />,
    followers: 45231,
    newFollowers: 234,
    unfollowers: 45,
    color: "#FF0000",
  },
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Platforms
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            All your <span className="text-gradient">socials</span> in one place
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect your accounts and start tracking followers across all major
            platforms instantly.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <FollowerCard key={index} {...platform} delay={index * 0.15} />
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">Coming soon:</span>{" "}
            TikTok, LinkedIn, Twitch, and more
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsSection;
