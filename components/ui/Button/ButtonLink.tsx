import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

import { buttonClassName, type ButtonVariant } from './Button';

type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    variant?: ButtonVariant;
  };

export default function ButtonLink({ variant = 'primary', className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClassName(variant, className)} {...props} />;
}
