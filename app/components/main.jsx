import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import  {Timeline}  from "react-twitter-widgets";

class Main extends React.Component{

	constructor(){
		super();
		this.show=this.show.bind(this);
	}

	show(){
		if(!this.refs.user.value){
			return;
		}
		ReactDOM.render((
  			<Timeline
    	     	dataSource={{
     		      	sourceType: 'profile',
            		screenName: this.refs.user.value
          		}}
         		options={{
            		username: this.refs.user.value,
            		height: '600',
            		width: '400'
   	 	      }}
  			/>
		), document.getElementById('tweets'))
		this.refs.user.value="";
	}

  	render(){
    	return(
          <div className="content">
    		        <div className="inputs">
    			          <input type="text" ref="user" placeholder="Twitter username"/>
     			          <button className="btn btn-primary" onClick={this.show}>Show tweets</button>
    		        </div>
              <div id="tweets"></div>
         </div>
      	)
  	}
}

export default Main;

