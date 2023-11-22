import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';
import { Typography } from '@edwardcoughlan/designsystem/react/typography';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles['container']}>
      <Typography />
      {children}
    </button>
  );
}

export default Button;
