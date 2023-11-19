import { Typography } from '@edwardcoughlan/designsystem/react/typography';
import { FC } from 'react';
import styles from './react-components.module.css';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface ReactComponentsProps {}

export const ReactComponents: FC<ReactComponentsProps> = (
  props: ReactComponentsProps
) => {
  return (
    <div className={cn(styles['container'])}>
      <h1>Welcome to ReactComponents!</h1>
      <Typography />
    </div>
  );
};

export default ReactComponents;
