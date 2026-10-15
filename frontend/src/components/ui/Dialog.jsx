import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export function DialogContent({ className, children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="media-modal-backdrop" />
      <DialogPrimitive.Content className={cn('media-modal-card dialog-content', className)} {...props}>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogCloseButton({ className, ...props }) {
  return <DialogPrimitive.Close className={cn('media-modal-close', className)} aria-label="Close preview" {...props}><X size={18} aria-hidden="true" /></DialogPrimitive.Close>;
}
