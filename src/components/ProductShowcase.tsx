import { motion } from "framer-motion";
import ringImage from "@/assets/smart-ring-hero.jpg";

const ProductShowcase = () => {
  return (
    <section id="technology" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={ringImage}
                alt="NuvroRing close-up"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-card border border-primary/30 rounded-2xl p-4 md:p-6 shadow-2xl"
            >
              <div className="text-primary text-sm tracking-wide mb-1">
                Starting at
              </div>
              <div className="font-display text-3xl md:text-4xl font-medium text-foreground">
                $399
              </div>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Craftsmanship
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Designed with
              <span className="text-gradient-gold block">Precision</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Each NuvroRing is meticulously crafted from premium aerospace-grade
              titanium, finished with a scratch-resistant diamond-like carbon
              coating. The result is a ring that's as beautiful as it is durable.
            </p>

            {/* Specs List */}
            <div className="space-y-6">
              {[
                {
                  label: "Material",
                  value: "Aerospace-Grade Titanium",
                },
                {
                  label: "Coating",
                  value: "Diamond-Like Carbon (DLC)",
                },
                {
                  label: "Weight",
                  value: "4-6g depending on size",
                },
                {
                  label: "Sizes",
                  value: "US 6-13 available",
                },
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between py-4 border-b border-border/30"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="text-foreground font-medium">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
