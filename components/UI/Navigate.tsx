import { ReactNode } from 'react';

interface NavigateProps {
  trigger: ReactNode;
  to?: string;
  open?: string;
}

function Navigate({ trigger, to, open }: NavigateProps) {
  const href = to || open || '#';
  const target = open ? '_blank' : undefined;
  const rel = open ? 'noopener noreferrer' : undefined;

  return (
    <a href={href} target={target} rel={rel} className="">
      {trigger}
    </a>
  );
}

export default Navigate;
