import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transaction = ({ items }) => (
  <div>
    <table className={css.transactionTable}>
      <thead className={css.hederRow}>
        <tr className={css.valuesRow}>
          <th className={css.columnHeader}>Type</th>
          <th className={css.columnHeader}>Amount</th>
          <th className={css.columnHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.valuesRow}>
            <td className={css.transactionData}>{item.type}</td>
            <td className={css.transactionData}>{item.amount}</td>
            <td className={css.transactionData}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Transaction.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};
