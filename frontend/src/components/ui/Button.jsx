import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva('button', {
  variants: {
    variant: {
      primary: 'button-primary',
      secondary: 'button-secondary',
      outline: 'button-secondary',
    },
    size: {
      default: '',
      sm: 'button-sm',
      compact: 'button-compact',
    },
  },
  defaultVariants: { variant: 'primary', size: 'default' },
});

export default function Button({ className, variant, size, asChild = false, type, ...props }) {
  const Component = asChild ? Slot : 'button';
  return <Component className={cn(buttonVariants({ variant, size, className }))} {...(!asChild ? { type: type ?? 'button' } : {})} {...props} />;
}
