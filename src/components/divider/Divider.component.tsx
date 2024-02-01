import { HTMLAttributes, ReactElement } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  borderClassName?: string;
  align?: 'left' | 'center' | 'right';
}

export default function Divider({
  borderClassName = 'h-1 border-t border-gray-200',
  align = 'center',
  children,
  className = '',
}: Props): ReactElement {
  return (
    <div className={`flex items-center ${className} font-medium text-base`}>
      <hr className={`${align !== 'left' && 'grow mr-4'}  ${borderClassName}`} />
      {children}
      <hr className={`${align !== 'right' && 'grow ml-4'}  ${borderClassName}`} />
    </div>
  );
}
