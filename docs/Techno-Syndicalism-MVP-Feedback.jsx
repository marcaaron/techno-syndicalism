class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {form: false};
        
        this.handleClickFeedback = this.handleClickFeedback.bind(this);
        this.close               = this.close.bind(this);
    }
    
    handleClickFeedback(){
        this.setState({form: true});
    }
    
    close(){
        this.setState({form: false});
    }
    
    render(){
        
        if(this.state.form){
            return(
                <div>
                     <button onClick={this.close}>x</button>
                    <p>Don't use, this doesn't work yet</p>
                    <form>
                        <input type="text" placeholder="email address"></input>
                        <input type="text" placeholder="your comments"></input>
                        <input type="submit" placeholder="send"></input>
                    </form>
                   
                </div>
            );
        }
        else{       
        
        return (
            <div> 
                <button onClick={this.handleClickFeedback}>feedback</button>
            </div>
        );}

    }
}

    ReactDOM.render(<App />,
                     document.getElementById('feedback'));