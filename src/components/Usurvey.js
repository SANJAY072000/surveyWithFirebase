import React,{Component} from 'react';
let firebase=require('firebase'),
uuid=require('uuid');
var firebaseConfig = {
    apiKey: "AIzaSyDJh8LBHwpve0FyVfhan_hRbgWChT9HZyM",
    authDomain: "usurvey-70dda.firebaseapp.com",
    databaseURL: "https://usurvey-70dda.firebaseio.com",
    projectId: "usurvey-70dda",
    storageBucket: "usurvey-70dda.appspot.com",
    messagingSenderId: "13994706922",
    appId: "1:13994706922:web:53b63f9bfe2448c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default class Usurvey extends Component {
  constructor(props){
    super(props);
    this.state = {
      uid:uuid.v1(),
      studentName:'',
      answers:{
        answer1:'',
        answer2:'',
        answer3:''
      },
      isSubmitted:false
    };
    this.nameSubmit=this.nameSubmit.bind(this);
  }
  nameSubmit(e){
    e.preventDefault();
    this.setState({studentName:this.refs.name.value},()=>console.log(this.state));
  }
  render(){
    let studentName,questions;
    if(this.state.studentName===''&&this.state.isSubmitted===false){
    studentName=(<div>
      <h1>Hey, Please tell us your name :- </h1>
      <form onSubmit={this.nameSubmit}>
      <input className="nany" type="text" placeholder="Enter your name" ref="name"/>
      </form>
    </div>);
    questions='';
    }
    else if(this.state.studentName!==''&&this.state.isSubmitted===false){
      studentName=(<h1>
        Welcome to Usurvey, {this.state.studentName}
        </h1>);
      questions=(<p>Hey</p>);
    }
    return(
      <div>
        {studentName}
        -----------------------------
        {questions}
      </div>
    );
  }
}
