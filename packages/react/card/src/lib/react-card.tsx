import styles from './react-card.module.css';
import cn from 'classnames';
/* eslint-disable-next-line */
export interface ReactCardProps {}

export function ReactCard(props: ReactCardProps) {
  return (
    <div className={cn(styles['container'])}>
      <h1>Welcome to ReactCard!</h1>
    </div>
  );
}

export default ReactCard;
