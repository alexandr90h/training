import styles from './statistical.module.css';
import PropTypes from 'prop-types';

export default function StaticticalItem({ id, label, percentage }) {
    return(<li className={styles.item} key={id}>
                <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>)
}
StaticticalItem.protoTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    percentage:PropTypes.number,
}