import styles from './transactionHistory.module.scss';
import TransactionItem from './transactionItem';
export default function TransactionHistory({ items }) {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(obj => {
                    return (<TransactionItem key={obj.id}
                        id={obj.id}
                        type={obj.type}
                        amount={obj.amount}
                        currency={obj.currency}
                    />
                    );
                })}
            </tbody>
        </table>
    );
}
