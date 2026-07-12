"use client";

import { useInView } from "@/hooks/use-in-view";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedSection({ children, className = "", delay = 0 }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease-out, transform 0.7s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
