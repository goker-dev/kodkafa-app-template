import { HTMLAttributes, useEffect, useRef } from 'react';

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  timer?: number;
  onClick: () => void;
  r?: number;
  strokeWidth?: 3;
  pause?: boolean;
}

export default function TimerCloseButton({
  timer = 3000,
  children = <i className='icon-cancel' />,
  className,
  onClick,
  r = 14,
  strokeWidth = 3,
  pause = true,
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClick(e: KeyboardEvent) {
      if (e.key === 'Escape') ref.current?.click();
    }

    document.addEventListener('keyup', handleClick);
    return () => {
      document.removeEventListener('keyup', handleClick);
    };
  }, []);

  const circumference = r * 2 * Math.PI;

  return (
    <button
      ref={ref}
      className={`relative w-8 h-8 cursor-pointer flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      <svg className='absolute w-8 h-8 top-0 left-0'>
        <circle
          className='animate-circular-progress-5sec'
          strokeWidth={strokeWidth}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference - 10,
            animationDuration: Math.ceil(timer / 1000) + 's',
            animationPlayState: pause ? 'paused' : 'running',
          }}
          strokeLinecap='round'
          stroke='currentColor'
          fill='transparent'
          r={r}
          cx='16'
          cy='16'
          onAnimationEnd={onClick}
        />
      </svg>
      {children}
    </button>
  );
}
