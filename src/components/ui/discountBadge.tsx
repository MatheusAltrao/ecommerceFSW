import { ArrowDownIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { BadgeProps } from "./badge";

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-1 rounded-3xl bg-primary  px-2 font-semibold",
        className,
      )}
      {...props}
    >
      <ArrowDownIcon size={18} />
      {children}
    </div>
  );
};

export default DiscountBadge;
