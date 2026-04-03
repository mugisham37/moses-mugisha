interface FormButtonProps {
  state?: "default" | "loading" | "disabled" | "success" | "error";
  onClick?: () => void;
  className?: string;
}

const stateText: Record<NonNullable<FormButtonProps["state"]>, string> = {
  default: "Send Message",
  loading: "Sending...",
  disabled: "Send Message",
  success: "Message sent!",
  error: "Try again",
};

export function FormButton({
  state = "default",
  onClick,
  className,
}: FormButtonProps) {
  const isDisabled = state === "disabled";

  const baseClasses =
    "inline-flex items-center gap-[4px] py-[8px] text-[16px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)]";

  const stateClasses = isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      type="submit"
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      className={[baseClasses, stateClasses, className]
        .filter(Boolean)
        .join(" ")}
    >
      {stateText[state]}
    </button>
  );
}

export default FormButton;
