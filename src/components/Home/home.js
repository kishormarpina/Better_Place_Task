import React from 'react';
import Popup from '../popup/popup'
class Home extends React.Component{
	constructor(props){
        super(props)
        this.state ={ 
            post:[],
            display:false,
            img:'',
            gender : '',
            nat : '',
            number : 10,
            page : 1
        }
    }
    componentDidMount(){
        fetch(`https://randomuser.me/api?&page=${this.state.page}&results=${this.state.number}`)
        .then((res)=>{
            console.log("resp came")
            return res.json()
        })
        .then((res) => {
            console.log('got this',res)
            this.setState({post:res.results})
           
        })
    }
    // componentDidUpdate(prevProps){
    //     if(this.props.number !== prevProps.number){
    //         fetch(`https://randomuser.me/api?page=1&results=${this.props.number}`)
    //         .then((res)=>{
    //             console.log("resp came")
    //             return res.json()
    //         })
    //         .then((res) => {
    //             console.log('got this',res)
    //             this.setState({post:res.results})
            
    //         })
    //     }
    // }
    toggleDisplay = () => {
        this.setState({
            display:!this.state.display
        })
    }
    enlarge = (params)=> {
        console.log("params", params)
        this.setState({img : params.large,  display:!this.state.display}, ()=>{
            console.log("after set state img", this.state.img);
        })
        // console.log("after set state img", this.state.img)
       
        // return <img src={params.large}></img>
        // return <Popup text="hi there" url={params.large} toggleDisplay={this.toggleDisplay} />
    }
    handle = () =>{
        fetch(`https://randomuser.me/api?&page=${this.state.page}&gender=${this.state.gender}&nat=${this.state.nat}&results=${this.state.number}`)
        .then((res)=>{
            console.log("resp came")
            return res.json()
        })
        .then((res) => {
            console.log('got this',res)
            this.setState({post:res.results})
           
        })
    }
    handleChange = (event) =>{
		this.setState({ [event.target.name]: event.target.value });
	}
    render() {
        let ele = '';
        console.log("================")
        console.log(this.state.post);
        if(this.state.post  && !this.state.display){
            ele = this.state.post.map((item) => {
                // console.log(item,'item');
                return <tr>
                    {/* <td><button onClick={()=>{ <img  src={item.picture.large}></img>}}> <img src={item.picture.thumbnail}></img></button></td> */}
                    <td><button onClick={()=>{
                        this.enlarge(item.picture)
                    }}> <img src={item.picture.thumbnail}></img></button></td>
                    <td>{item.name.title +' '+ item.name.first +' '+ item.name.last}</td>
                    <td>{item.gender}</td>
                    <td>{item.nat}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            })
        }else{
            ele = <Popup url={this.state.img} toggleDisplay={this.toggleDisplay} />
        }
        // console.log("*********************************")
        // console.log(ele)
        // console.log("****************************")
        return (
        <div className="biggest">
            <div className="tablehead">
                <div className="filters">
                    <tr>
                        <td><label for="gender">Gender </label>
                            <select id='gender' name="gender" value={this.state.gender} onChange={this.handleChange}>
                                <option value="">choose</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </td>
                        <td><label for="nat">Nationality </label>
                            <select id='nat' name="nat" value={this.state.nat} onChange={this.handleChange}>
                                <option value="">choose</option>
                                <option value="AU">Australia(AU)</option>
                                <option value="BR">Brazil(BR)</option>
                                <option value="CA">Canada(CA)</option>
                                <option value="FR">France (FR)</option>
                                <option value="GB">Great Britain(GB)</option>
                                <option value="US">USA(US)</option>
                            </select>
                        </td>
                        <td><label for="number">Number of results in a page </label>
                            <select id='number' name="number"  value={this.state.number} onChange={this.handleChange}>
                                <option value="">choose</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </td>
                        <td>
                            <button onClick={this.handle}>Apply</button>
                        </td>
                    </tr>
                </div>
                <table className = "table">
                    <tr>
                        <th>Thumbnail</th>
                        <th>Name of the person</th>
                        <th>Gender</th>
                        <th>Nationality</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    {ele}
                </table>
            </div>
            <div id="footer">
                <button flex="left" onClick={()=>{this.setState({page: this.state.page-1}, ()=>this.handle()); }}>Prev</button>
                <button flex="right" onClick={()=>{this.setState({page: this.state.page+1}, ()=> this.handle()); }}>Next</button>
            </div>

        </div>)
    }
}


export default Home;
