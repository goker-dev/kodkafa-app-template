import { ChangeEvent, useEffect, useRef } from 'react';

const applyTheme = (theme: string) => {
  if (theme === 'light')
    document.documentElement.classList.remove(...document.documentElement.classList);
  else document.documentElement.classList.add(theme);
};
export default function ThemeSwitch() {
  const theme = localStorage.getItem('theme');
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      const _theme =
        theme === 'dark' ||
        document.documentElement.classList.contains('dark') ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
          ? 'dark'
          : 'light';
      // setTheme(_theme);
      applyTheme(_theme);
      ref.current.checked = _theme === 'dark';
    }
  }, [ref]);

  const handleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.checked ? 'dark' : 'light';
    localStorage.setItem('theme', value);
    applyTheme(value);
  };

  return (
    <input
      ref={ref}
      defaultChecked={theme === 'dark'}
      type='checkbox'
      value='dark'
      onChange={handleTheme}
      className='flex items-center relative
           shrink-0 w-[3.2rem] h-7
           rounded-full cursor-pointer transition-all ease-in-out duration-200
           !border-none focus:border-none
           !ring-0 focus:ring-0 !ring-offset-0
           !outline-none focus:outline-none
           appearance-none
           checked:bg-none
           bg-amber-100 checked:bg-zinc-600
           dark:bg-gray-700 dark:focus:bg-gray-700 dark:hover:bg-gray-700
           before:ml-0.5
           before:inline-block before:w-6 before:h-6 before:bg-amber-50
           before:bg-[url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+Cgk8cGF0aCBmaWxsPSIjZmNkMzRkIiBkPSJNNS45IDUuMWMwIC4zLjEuNi4zLjlsMS40IDEuNC45LS44LTIuMi0yLjJjLS4zLjEtLjQuNC0uNC43em0uNSA1LjNIMy4yYzAgLjMuMS42LjQuOS4zLjMuNS40LjguNGgydi0xLjN6bTYuMi01VjIuMmMtLjMgMC0uNi4xLS45LjQtLjMuMy0uNC41LS40Ljh2MmgxLjN6TTYuMiAxNy4xYy4zIDAgLjYtLjEuOC0uM2wxLjQtMS40LS44LS44LTIuMiAyLjJjLjIuMi41LjMuOC4zek0xNy44IDQuOWMtLjMgMC0uNi4xLS44LjNsLTEuNCAxLjQuOC45IDIuMi0yLjNjLS4yLS4yLS41LS4zLS44LS4zem0tNS4yIDExLjdoLTEuMnYzLjJjLjMgMCAuNi0uMS45LS40LjMtLjMuNC0uNS40LS44bC0uMS0yem03LTYuMmgtMnYxLjJoMy4yYzAtLjMtLjEtLjYtLjQtLjktLjMtLjMtLjUtLjMtLjgtLjN6TTE3LjggMTZsLTEuNC0xLjQtLjguOCAyLjIgMi4yYy4yLS4yLjMtLjUuMy0uOCAwLS4zLS4xLS42LS4zLS44eiIvPgoJPGNpcmNsZSBmaWxsPSIjZmNkMzRkIiBjeD0iMTIiIGN5PSIxMSIgcj0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjQgMCkiLz4KPC9zdmc+Cg==")]
           checked:before:bg-[url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+DQogIDxwYXRoIGZpbGw9IiNmZWYzYzciIGQ9Ik0xNy4zOSAxNS4xNEE3LjMzIDcuMzMgMCAwIDEgMTEuNzUgMS42Yy4yMy0uMTEuNTYtLjIzLjc5LS4zNGE4LjE5IDguMTkgMCAwIDAtNS40MS40NSA5IDkgMCAxIDAgNyAxNi41OCA4LjQyIDguNDIgMCAwIDAgNC4yOS0zLjg0IDUuMyA1LjMgMCAwIDEtMS4wMy42OXoiLz4NCjwvc3ZnPg0K")]
           before:bg-center before:bg-no-repeat
           checked:before:bg-zinc-900 before:translate-x-0
           checked:before:translate-x-full before:shadow before:rounded-full
           before:transform before:ring-0 before:transition before:ease-in-out
           before:duration-200'
    />
  );
}
