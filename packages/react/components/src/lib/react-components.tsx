import styles from './react-components.module.css';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface ReactComponentsProps {}

export function ReactComponents(props: ReactComponentsProps) {
  return (
    <div className={cn(styles['container'])}>
      <h1>Welcome to ReactComponents!</h1>
    </div>
  );
}

export default ReactComponents;
