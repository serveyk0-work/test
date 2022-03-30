import React, { FC } from 'react';
// @ts-ignore
import styles from './Error.module.scss';

interface Props {
  error: string | null
}

const CustomError: FC<Props> = ({error}): JSX.Element => {

  return (
    <div className={styles.error}>
      Error {error}
    </div>
  );
};

export default CustomError;