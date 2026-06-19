import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "h1" | "h2" | "h3" | "p";
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({ children, delay = 0, y = 24, className, as = "div", ...rest }: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}