import { InputHTMLAttributes } from "react";

import { cva, VariantProps } from "class-variance-authority";

const inputVariance = cva(
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
    {
        variants: {
            variant: {
                primary: "focus:ring-accent",
                secondary: "focus:ring-primary",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    },
);

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariance> {}

const Input = ({ className, variant, ...props }: InputProps) => {
    return <input className={inputVariance({ className, variant })} {...props} />;
};

export default Input;
