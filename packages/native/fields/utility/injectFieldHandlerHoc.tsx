import React from 'react';
import { useFormikContext, useField } from 'formik';
import { IFieldProps } from '../types';

interface NewProps extends Pick<IFieldProps, 'name'> {
  onChange?: IFieldProps['onChangeValue'];
  onBlur?: () => void;
}

interface OmittedProps extends Omit<IFieldProps, 'name'> {}

export function injectFieldHandlerHoc<TProps>(
  WrappedComponent: React.ComponentType<TProps>,
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const Injected: React.FC<
    Omit<TProps, keyof OmittedProps> & NewProps
  > = props => {
    const {
      setFieldValue,
      setFieldTouched,
      isSubmitting,
      submitCount,
    } = useFormikContext();
    const { name, onChange } = props;
    const [{ value }, { touched, error }, { setTouched }] = useField(
      props.name,
    );
    const shouldDisplayError = touched || submitCount > 0;
    const errorMessage = shouldDisplayError ? error : '';
    return (
      <WrappedComponent
        {...((props as unknown) as TProps)}
        onChangeValue={(newValue: any) => {
          setFieldValue(name, newValue);
          props?.onChange?.(newValue);
        }}
        onBlur={() => {
          setFieldTouched(name, true, !isSubmitting);
          props?.onBlur?.();
        }}
        value={value}
        name={name}
        errorMessage={errorMessage}
      />
    );
  };

  Injected.displayName = `injectFieldHandlerHoc(${displayName})`;

  return Injected;
}
