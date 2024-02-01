import { HTMLAttributes, ReactElement, ReactNode } from 'react';
import packageJSON from '../../../package.json';

const { version } = packageJSON;
const commitHash = import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA || '';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  icon?: ReactNode;
}

export default function Version({
  className = '',
  icon = <i className='icon-kodkafa' />,
}: Props): ReactElement {
  return (
    <div
      data-cy='Version'
      className={`z-50 fixed bottom-0 right-0 bg-gray-light text-gray-dark p-0.5 
      rounded-tl-lg text-xs flex justify-between items-center tracking-wide opacity-80
     ${className}`}
      title={commitHash}
      style={{ fontSize: '.7rem' }}
    >
      <span className='mr-0.5'>{icon}</span>v{version}
    </div>
  );
}
