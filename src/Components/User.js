import React from 'react';


class User extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    render() {

        const users = this.state.user.map((item, index) => {
            return (
                <User
                    key={index}
                    name={item.name}
                    surname={item.surname}
                    num={index + 1}
                    showMessage={this.showMessage.bind(this)}
                />
            );
            
        });
        return <div>
            {users}
            <p>имя: { this.props.name }</p> 
            <p>фамилия: {this.props.surname}</p>
            
            <button onClick={this.props.showMessage(null, this.props.num)}>
               Нажми на меня
            </button>
            
          
        </div>

    }
}


export default User;