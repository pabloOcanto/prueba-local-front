import React,{Component} from 'react';
import MyContext from './Context';

export default class AuthProvider extends Component {

    state = {
        isLogged:false,
        token:''
    };

    render() {
        return (
            <MyContext.Provider
                value={{

                    isLogged : this.state.isLogged,    
                    login: (token) => {
                        console.log("inicio de login")
                        this.setState({
                                isLogged:true,
                                token:token
                            });
                    },
                    logout: () => {
                        this.setState({
                            isLogged:false,
                            token:''
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }

}