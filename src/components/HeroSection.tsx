import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Users, TrendingUp, Bell, Sparkles } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-[80px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Track followers in real-time
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Know exactly who{" "}
              <span className="text-gradient">followed</span> and{" "}
              <span className="text-gradient">unfollowed</span> you
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Get instant notifications when someone follows or unfollows you.
              Track your growth across all social platforms in one beautiful
              dashboard.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button variant="gradient" size="xl">
                Get Started Free
                <ArrowRight size={18} />
              </Button>
              <Button variant="social" size="xl">
                See Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8"
            >
              {[
                { value: 50000, suffix: "+", label: "Active Users" },
                { value: 10, suffix: "M+", label: "Followers Tracked" },
                { value: 4.9, suffix: "", label: "App Rating" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="bg-card rounded-3xl p-6 shadow-elevated border border-border/50">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-foreground">Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Today's activity</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose" />
                  <div className="w-3 h-3 rounded-full bg-orange" />
                  <div className="w-3 h-3 rounded-full bg-emerald" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Users, label: "Followers", value: "12,847", color: "primary" },
                  { icon: TrendingUp, label: "Growth", value: "+234", color: "emerald" },
                  { icon: Bell, label: "Alerts", value: "12", color: "accent" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-muted/50 rounded-xl p-4 text-center"
                  >
                    <item.icon
                      size={20}
                      className={`mx-auto mb-2 ${
                        item.color === "primary"
                          ? "text-primary"
                          : item.color === "emerald"
                          ? "text-emerald"
                          : "text-accent"
                      }`}
                    />
                    <p className="text-lg font-bold text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground mb-3">Recent Activity</p>
                {[
                  { name: "Sarah Wilson", action: "followed you", time: "2m ago", isNew: true },
                  { name: "Mike Chen", action: "unfollowed you", time: "15m ago", isNew: false },
                  { name: "Emma Davis", action: "followed you", time: "1h ago", isNew: true },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {activity.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {activity.name}{" "}
                        <span className={activity.isNew ? "text-emerald" : "text-rose"}>
                          {activity.action}
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    {activity.isNew && (
                      <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Notification */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-elevated border border-border/50 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center">
                  <TrendingUp size={16} className="text-emerald" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">+47 today</p>
                  <p className="text-xs text-muted-foreground">New followers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
