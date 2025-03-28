import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

const inputVariants = cva(
  'file:text-foreground duration-300 ease-out aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      variant: {
        default: 'bg-background',
        ghost: 'border-none shadow-none',
        destructive:
          'border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive dark:focus-visible:ring-destructive/40',
      },
      sizes: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      sizes: 'default',
    },
  }
);

type InputProps = React.ComponentProps<'input'> & VariantProps<typeof inputVariants>;

function Input({ className, variant, sizes, type, ...props }: InputProps) {
  return (
    <input type={type} className={cn(inputVariants({ variant, sizes, className }))} {...props} />
  );
}

export { Input, inputVariants };
