import PropTypes from 'prop-types';
import styles from './friendList.module.css';

export default function FriendItem({id,isOnline,avatar,name}) {
    return (
            <li className={styles.item} key={id}>
                <span className={styles.status} data-status={isOnline}></span>
                <img className={styles.avatar} src={avatar} alt="" width="48" />
                <p className={styles.name}>{name}</p>
            </li>)
}
FriendItem.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
}