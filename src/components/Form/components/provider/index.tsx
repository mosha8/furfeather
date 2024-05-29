'use client';
import type { FormProviderProps } from '@components/Form/@types';
import dynamic from 'next/dynamic';
import { type ElementType } from 'react';
import type { FieldValues } from 'react-hook-form';

import { FormProvider as ReactHookFormProvider } from 'react-hook-form';

const activateRHFDevTool = process.env.NEXT_PUBLIC_RHF_DEVTOOL === 'true';
const DevT: ElementType = dynamic(
  () => import('@hookform/devtools').then(({ DevTool }) => DevTool),
  {
    ssr: false,
  }
);
const FormProvider = <T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
}: FormProviderProps<T>) => {
  return (
    <ReactHookFormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
      {activateRHFDevTool && (
        <DevT control={methods.control} placement="top-right" />
      )}
    </ReactHookFormProvider>
  );
};

export default FormProvider;
