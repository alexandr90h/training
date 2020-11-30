import styles from './friendList.module.css';
import FriendItem from './friendItem';

export default function FriendList({ friends }) {
    
    return (<ul className={styles.friendList}>{friends.map(obj => {
        return (<FriendItem key={obj.id}
            id={obj.id}
            isOnline={obj.isOnline}
            avatar={obj.avatar}
            name={obj.name}
        />)
    })}</ul>)
}
