import ReactDOM from 'react-dom';
import { Prof, Stats, Friends, Transaction, Btn} from './App.jsx';

const ROOT = document.querySelector('#root');

ReactDOM.render(<div><Btn/><Prof /><Stats /><Friends /><Transaction/></div>, ROOT);
// ReactDOM.render(<Stats />, ROOT);
// ReactDOM.render(<FriendList />, ROOT);