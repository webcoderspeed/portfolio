"use client";

import { motion } from "framer-motion";
import { Code2, Heart, Coffee } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="py-8 sm:py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2"
          >
            <Code2
              className={`h-5 w-5 sm:h-6 sm:w-6 ${
                theme === "light" ? "text-emerald-600" : "text-yellow-400"
              }`}
            />
            <span className="text-base sm:text-lg font-bold gradient-text">
              WebCoderSpeed
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-gray-400 text-sm sm:text-base text-center"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Coffee className="h-4 w-4 text-yellow-400" />
            </motion.div>
            <span>by Sanjeev Sharma</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-xs sm:text-sm text-center"
          >
            © {new Date().getFullYear()} WebCoderSpeed. All rights reserved.
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center text-gray-500 text-xs sm:text-sm"
        >
          <p>
            "Code is like humor. When you have to explain it, it's bad." - Cory
            House
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
