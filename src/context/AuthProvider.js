import React,{Component} from 'react';
import MyContext from './Context';
import Cookies from 'js-cookie';
export default class AuthProvider extends Component {

    state = {
        isLogged:(Cookies.get('access_token')&& Cookies.get('access_token')!= undefined)?true:false,
        token:(Cookies.get('access_token')&& Cookies.get('access_token')!= undefined)?Cookies.get('access_token'):''
    };

    render() {       
        return (
            <MyContext.Provider
                value={{
                    isLogged : this.state.isLogged,    
                    login: (token) => {                      
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