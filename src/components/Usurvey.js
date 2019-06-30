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
  onChange(e){
let answers=this.state.answers;
if(e.target.name==='answer1')
answers.answer1=e.target.value;
else if(e.target.name==='answer2')
answers.answer2=e.target.value;
else if(e.target.name==='answer3')
answers.answer3=e.target.value;
else if(e.target.name==='answer4')
answers.answer4=e.target.value;
else if(e.target.name==='answer5')
answers.answer5=e.target.value;
this.setState({answers},()=>console.log(this.state));
  }
  questionSubmit(e){
firebase.database().ref('uSurvey/'+this.state.uid).set({
  studentName:this.state.studentName,
  answers:this.state.answers
});
this.setState({isSubmitted:!this.state.isSubmitted});
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
      questions=(<div>
        <h2>Here are some questions :- </h2>
        <form onSubmit={this.questionSubmit.bind(this)}>
        <div className="card">
        <label>What kind of courses you like the most ?</label><br/>
        <input type="radio" name="answer1" value="Technology" onChange={this.onChange.bind(this)}/> Technology
        <input type="radio" name="answer1" value="Design" onChange={this.onChange.bind(this)}/> Design
        <input type="radio" name="answer1" value="Marketing" onChange={this.onChange.bind(this)}/> Marketing
        </div>
        <div className="card">
        <label>You are a :- </label><br/>
        <input type="radio" name="answer2" value="Student" onChange={this.onChange.bind(this)}/> Student
        <input type="radio" name="answer2" value="Seeking Job" onChange={this.onChange.bind(this)}/> Seeking Job
        <input type="radio" name="answer2" value="Doing Job" onChange={this.onChange.bind(this)}/> Doing Job
        </div>
        <div className="card">
        <label>Is online learning helpful to you ?</label><br/>
        <input type="radio" name="answer3" value="Yes" onChange={this.onChange.bind(this)}/> Yes
        <input type="radio" name="answer3" value="No" onChange={this.onChange.bind(this)}/> No
        <input type="radio" name="answer3" value="MayBe" onChange={this.onChange.bind(this)}/> MayBe
        </div>
        <div className="card">
        <label>Have you done your assignment ?</label><br/>
        <input type="radio" name="answer4" value="Yes" onChange={this.onChange.bind(this)}/> Yes
        <input type="radio" name="answer4" value="No" onChange={this.onChange.bind(this)}/> No
        </div>
        <div className="card">
        <label>Is LCO awesome ?</label><br/>
        <input type="radio" name="answer5" value="Yes" onChange={this.onChange.bind(this)}/> Yes
        <input type="radio" name="answer5" value="No" onChange={this.onChange.bind(this)}/> No
        </div>
        <input type="submit" className="feedback-button" value="submit"/>
        </form>
        </div>);
    }
    else if(this.state.isSubmitted===true){
      studentName=(<h1>
        Thanks, {this.state.studentName}
        </h1>);
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
