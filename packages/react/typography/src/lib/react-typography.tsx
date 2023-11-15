import styles from './react-typography.module.css';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface ReactTypographyProps {}

export function ReactTypography(props: ReactTypographyProps) {
  return (
    <div className={cn(styles['container'])}>
      <h1>Welcome to ReactTypography!</h1>
    </div>
  );
}

export default ReactTypography;
