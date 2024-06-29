import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thred}>
        <tr className={styles.item}>
          <th className={styles.headerCell}>Type</th>
          <th className={styles.headerCell}>Amount</th>
          <th className={styles.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id} className={styles.row}>
            <th className={styles.cell}>{transaction.type}</th>
            <th className={styles.cell}>{transaction.amount}</th>
            <th className={styles.cell}>{transaction.currency}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
