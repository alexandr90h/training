import React from 'react';
import styles from './BtnOnClick.module.scss';

class ButtonOnClick extends React.Component{
    state = {
        val: 0,
        chang: 'ON',
    }
    incrementVal=()=> {
        this.setState(prev => ({
           val: prev.val + 1,
        }))
    }
    onOff = () => {
        if (this.state.chang === 'ON') {
            this.setState(() => ({
            chang: 'OFF',
        }))
        }
        else {
            this.setState(() => ({
            chang: 'ON',
        }))
        }
    }
    render() {
        return (
            <div className={styles.conteinerButton}>
                <button type='button' onClick={this.incrementVal}>onClick</button>
                <button type='button' onClick= {this.onOff}>OFF</button>
                <p>{this.state.val}</p>
                <p className={styles.change} data-color={this.state.chang}>{ this.state.chang}</p>
            </div>
    )}
}
export default ButtonOnClick;