import PropTypes from 'prop-types';

export default function TransactionItem({id,type,amount,currency}) {
    return (<tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>)
}
TransactionItem.protoTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency:PropTypes.string,
}