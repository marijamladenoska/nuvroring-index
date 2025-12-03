import { motion } from "framer-motion";
import { UserPlus, UserMinus, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface FollowerCardProps {
  platform: string;
  icon: React.ReactNode;
  followers: number;
  newFollowers: number;
  unfollowers: number;
  color: string;
  delay?: number;
}

const FollowerCard = ({
  platform,
  icon,
  followers,
  newFollowers,
  unfollowers,
  color,
  delay = 0,
}: FollowerCardProps) => {
  const netChange = newFollowers - unfollowers;
  const isPositive = netChange >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <span style={{ color }}>{icon}</span>
          </div>
          <span className="font-semibold text-foreground">{platform}</span>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.3, type: "spring" }}
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            isPositive
              ? "bg-emerald/10 text-emerald"
              : "bg-rose/10 text-rose"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}
          {isPositive ? "+" : ""}
          {netChange}
        </motion.div>
      </div>

      {/* Followers Count */}
      <div className="mb-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
          className="text-3xl font-bold text-foreground"
        >
          {followers.toLocaleString()}
        </motion.p>
        <p className="text-sm text-muted-foreground">Total followers</p>
      </div>

      {/* Stats Row */}
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center">
            <UserPlus size={16} className="text-emerald" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">+{newFollowers}</p>
            <p className="text-xs text-muted-foreground">New</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-rose/10 flex items-center justify-center">
            <UserMinus size={16} className="text-rose" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">-{unfollowers}</p>
            <p className="text-xs text-muted-foreground">Lost</p>
          </div>
        </div>
      </div>

      {/* Hover Indicator */}
      <div className="h-1 w-full bg-muted rounded-full mt-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(newFollowers / (newFollowers + unfollowers)) * 100}%` }}
          transition={{ duration: 1, delay: delay + 0.4 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

export default FollowerCard;
