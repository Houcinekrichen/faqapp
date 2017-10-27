import { Injectable } from '@angular/core';
import {Question} from '../models/Question'

@Injectable()
export class DataService {

  questions:Question[];

  constructor() { 
    //this.questions = [
      /*
      {
        text:' What is your name  ',
        answer :'my name is houcine ',
        hide : true
      },
      {
        text:' What is favorite color  ',
        answer :'my favorite color is red ',
        hide :true
      },
      {
        text:' What is your favorite team  ',
        answer :'my favorite team is FCB  ',
        hide : true
      }*/
 // ]
  }
  getQuestion (){
   if(localStorage.getItem('questions')== null ){
      this.questions=[];
   }else{
      this.questions=JSON.parse(localStorage.getItem("questions"));
   }
   return this.questions;
   
  }
  add(question:Question){

    this.questions.push(question)
    //Init local var
    let questions ;
    if(localStorage.getItem('questions')== null ){
      questions=[];
      // push new question
      questions.unshift(question);
      //set new array to Ls
      localStorage.setItem("questions",JSON.stringify(questions));
   }else{
      questions=JSON.parse(localStorage.getItem("questions"));
      //add new question 
      questions.unshift(question);
      // Re set ls 
      localStorage.setItem("questions",JSON.stringify(questions));

   }
    

  }


  removeQuestion(question:Question){
    

      for(let i = 0 ;i< this.questions.length;i++){
        if(question == this.questions[i] ){
   
          this.questions.splice(i,1);
          localStorage.setItem("questions",JSON.stringify(this.questions));
          

        }
        
      }
  }

}
