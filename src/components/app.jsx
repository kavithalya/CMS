import React, { Component } from 'react'
import Sidebar from './common/sidebar_components/sidebar';
import Right_sidebar from './common/right-sidebar';
import Footer from './common/footer';
import Header from './common/header_components/header';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

export class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            ltr:true,
            divName:'RTL',
        }
    }
    ChangeRtl(divName){
        if(divName === 'RTL') {
            document.body.classList.add('rtl');
            this.setState({divName: 'LTR'});
        }else{
            document.body.classList.remove('rtl');
            this.setState({divName: 'RTL'});
        }
    }
    render() {
        return (
            <ApolloProvider client={client}>
            <div>
                <div className="page-wrapper" >
                    <Header />
                    <div className="page-body-wrapper">
                        <Sidebar />
                        <Right_sidebar />
                        <div className="page-body">
                            {this.props.children}
                        </div>
                            <Footer />
                    </div>
                </div>
                <div className="btn-light custom-theme" onClick={ () => this.ChangeRtl(this.state.divName)}>{this.state.divName}</div>
            </div>
            </ApolloProvider>
        )
    }
}

export default App
