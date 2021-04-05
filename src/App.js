import React, {Component} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ScrollButton from "./components/scroll_button/ScrollButton";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {transform: 0}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            transform: window.pageYOffset
        });
    }


    render() {
        return (
            <div>
                {this.state.transform > 660 ? <ScrollButton/> : ''}
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;





