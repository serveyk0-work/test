import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './Input.module.scss';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

interface Props {
  name: string,
  setValue?: (val: string | number) => void,
  type?: string,
  register: UseFormRegister<any>,
  disabled?: boolean,
  controlledValue?: string | number
}

const Input: FC<Props> = ({name, setValue, controlledValue, register, type = 'text', disabled = false}): JSX.Element => {

  const [currentValue, setCurrentValue] = useState<string | number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrentValue(e?.target?.value);
  }

  const handlePress = (e: any): void => {
    if (e.keyCode === 13 && setValue) {
      setValue(e?.target?.value);
    }
  }

  useEffect(() => {
    setCurrentValue(controlledValue || 0);
  }, [controlledValue])

  return (
    <input {...register(name)} className={styles.input} value={currentValue} name={name} type={type} onKeyUp={handlePress} onChange={handleChange} disabled={disabled}/>
  );
};

export default Input;