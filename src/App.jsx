import Profile from './components/profile/profile';
import Statistical from './components/statistical/statistical';
import FriendList from './components/friendList/friendList';
import TransactionHistory from './components/transactionHistory/transactionHistory';
import user from './components/profile/user.json';
import statisticalData from './components/statistical/statistical-data.json';
import friends from './components/friendList/friends.json';
import transactions from './components/transactionHistory/transactions.json';
import ButtonOnClick from './components/button/button';

export function Btn() {
    return (<ButtonOnClick />);
}
export function Prof() {
    return (<Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
    />);
}
export function Stats() {
    return (<Statistical stats={statisticalData} />);
}
export function Friends() {
    return (<FriendList friends={friends} />);
}
export function Transaction () {
    return (<TransactionHistory items={transactions} />)
}