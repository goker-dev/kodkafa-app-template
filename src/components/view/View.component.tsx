import { PropsWithChildren } from 'react';
import { Loader } from '@/components';
import Error from '@/layout/components/Error.component';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import CustomError from '@/types/CustomError.model';

interface Props extends PropsWithChildren {
  isLoading?: boolean;
  isError?: boolean;
  error?: { status: number; message: string | string[]; error: string } | undefined;
}

export function View({ isLoading, isError, error, children }: Props) {
  if (isLoading)
    return (
      <div className='h-full w-full flex flex-col items-center justify-center'>
        <Loader />
      </div>
    );
  if (isError) {
    const customError = new CustomError(error).toObject();
    return (
      <div className='h-full w-full flex flex-col items-center justify-center'>
        <p>Data loading error!</p>
        <Error expended={true} {...customError} />
      </div>
    );
  }

  return <>{children}</>;
}

export function ErrorBoundary() {
  const error = useRouteError() as any;
  console.log({ error });
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      {isRouteErrorResponse(error) ? (
        <h1>
          {error?.status} {error?.statusText}
        </h1>
      ) : (
        <Error
          expended={true}
          status={0}
          message={error?.message || error}
          name={error.name}
          stack={error.stack}
        />
      )}
    </div>
  );
}

// If you want to customize the component display name in React dev tools:
ErrorBoundary.displayName = 'ViewErrorBoundary';
