import React from 'react';
import styles from './Input.module.css';

import type { HTMLProps } from 'react';

interface IInput extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
  name: string;
  isValid?: boolean;
  isInvalid?: boolean;
}

export const Input: React.FC<IInput> = ({ className, isValid, isInvalid, ...rest }) => {
  return (
    <label className={styles.Label}>
      <input
        type="text"
        {...rest}
      />
      <p>{rest.placeholder}</p>
    </label>
  );
};
