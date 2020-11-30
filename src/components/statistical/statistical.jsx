import styles from './statistical.module.css';
import StaticticalItem from './statisticalItem';

export default function Statistical({ stats }) {
    return (<section className={styles.statistics}>
  <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>{stats.map(obj => {
        return (<StaticticalItem key={obj.id}
          id={obj.id}
          label={obj.label}
          percentage={obj.percentage}
          />)
      })}</ul>
</section>)
} 