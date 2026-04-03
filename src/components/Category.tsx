import { cn } from "@/lib/utils";

interface CategoryProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Category({
  label,
  active = false,
  onClick,
  className,
}: CategoryProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "inline-flex items-start gap-[10px]",
        "text-[14px] leading-[1em] tracking-[-0.03em] font-medium font-[family-name:var(--font-inter-var)]",
        "cursor-pointer transition-colors",
        active
          ? "text-[var(--framer-black)]"
          : "text-[var(--framer-gray)] hover:text-[var(--framer-black)]",
        className
      )}
    >
      {label}
    </span>
  );
}

export default Category;
