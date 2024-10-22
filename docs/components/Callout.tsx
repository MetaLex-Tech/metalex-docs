import { cva, VariantProps } from "class-variance-authority";
import {
  IoInformationCircleOutline,
  IoShieldCheckmarkOutline,
  IoWarningOutline,
} from "react-icons/io5";

const calloutVariants = cva(
  "bg-gray-100 rounded-lg p-4 border-l-4 flex gap-5 items-start",
  {
    variants: {
      type: {
        info: "border-brand-blue",
        warning: "border-brand-red",
        security: "border-highlight",
      },
    },
  }
);
type CalloutTypeVariants = NonNullable<CalloutVariantProps["type"]>;
type CalloutVariantProps = VariantProps<typeof calloutVariants>;

const iconVariants = cva("mt-1.5 text-2xl ml-1", {
  variants: {
    type: {
      info: "text-brand-blue",
      warning: "text-brand-red",
      security: "",
    } satisfies Record<CalloutTypeVariants, string>,
  },
});

const defaultIconsByType: Record<CalloutTypeVariants, React.ReactNode> = {
  info: <IoInformationCircleOutline />,
  warning: <IoWarningOutline />,
  security: <IoShieldCheckmarkOutline />,
};

export function Callout({
  children,
  icon,
  type = "info",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode | null;
  type?: CalloutTypeVariants;
} & CalloutVariantProps) {
  return (
    <div className={calloutVariants({ type })}>
      {icon !== null ? (
        <div className={iconVariants({ type })}>
          {icon || defaultIconsByType[type]}
        </div>
      ) : null}
      {children}
    </div>
  );
}
