import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {
private  categories:  Array<object> = [];
private  services:    Array<object> = [];
private  questions:   Array<object> = []; 
private  relations:   Array<object> = [];
private  cookies:     Array<object> = [];
private  totalhours:  Array<object> = [];
count = 0;
previous = {};
serviceID ;
questionIds = '';
  constructor(private dataservice:DataService , private cookieService: CookieService) { }

  ngOnInit() { 
  	this.showService();
  } 
 
  showService(){
    $('#previous').hide();
  	 $('#main2').hide();   
  	 $('#main1').show();
     $('#main3').hide();
     $('#showdiv').hide();
      $('#show2').hide();

  	 this.dataservice.showService().subscribe((data:  Array<object>) => {
        this.categories  =  data;

    });
  }

  getservice(id){
   
    $('#previous').show();
  	 $('#main1').hide();
  	 $('#main2').show();
     $('#main3').hide();
     $('#showdiv').hide();
    $('#show2').hide();

     this.cookieService.set(" cookies[cat]",JSON.stringify(id));

  	 this.dataservice.getservice(id).subscribe((data:  Array<object>) => {
        this.services  =  data;
   
    });
  }
  firstQuestionOption(id){
     this.serviceID = id;
     $('#previous').show();
     $('#main1').hide();
     $('#main2').hide();
     $('#main3').show();
     $('#hidediv').hide();
     $('#main4').show();
     $('#main5').hide();
     $('#show2').hide();

     this.cookieService.set("cookies[ser]",JSON.stringify(id));

     this.dataservice.questionFirst(id).subscribe((data:  Array<object>) => {
     this.questions  =  data;
    
    });
   }

   nextQuestion(optionid,questionId){
    this.count++;
    this.previous[this.count] = {queid:questionId,optionid:optionid};
    
    $('#previous').show();
    $('#main1').hide();
    $('#main2').hide();
    $('#hidediv').hide();
    $('#main4').hide();
    $('#main5').show();
   
    this.cookieService['questionID'+questionId]= {queid:questionId,optionid:optionid};

    $('#arrow').css("display","inline-block");
    $("."+questionId).removeClass("fa-check");
    $("."+questionId).addClass("fa-html5");
    $("#optiion"+optionid).removeClass("fa-html5");
    $("#optiion"+optionid).addClass("fa-check");
    this.dataservice.question(optionid , questionId).subscribe((data:  Array<object>) => {
      if(data.length==0){
        $('#show2').show();
        $('#show1').hide();  
        $('#main5').hide();
        this.dataservice.calculate(this.cookieService,this.cookieService.get("cookies[ser]")).subscribe((data:  Array<object>) => {
        
          this.totalhours = data;
          
      });
       }else{
          $('#show2').hide();
          this.relations  =  data;
         
        }

    });  

   }

   goPrevious(){
      
      var selectedOptionID = this.previous[this.count].optionid;
      var selectedQuestionID = this.previous[this.count].queid;

      this.count--;
      if(this.count<=0){
        this.firstQuestionOption(this.serviceID); 
      }else{
        this.nextQuestion1(this.previous[this.count].optionid,this.previous[this.count].queid , selectedOptionID , selectedQuestionID);
      }
   }

    nextQuestion1(optionid , questionId , selectedOptionID , selectedQuestionID){

    $('#previous').show();
    $('#main1').hide();
    $('#main2').hide();
    $('#hidediv').hide();
    $('#main4').hide();
    $('#main5').show();
   
    //this.cookieService['questionID'+questionId]= {queid:questionId,optionid:optionid};
    $('#arrow').css("display","inline-block");
    $("."+selectedQuestionID).removeClass("fa-check");
    $("."+selectedQuestionID).addClass("fa-html5");
    $("#optiion"+selectedOptionID).removeClass("fa-html5");
    $("#optiion"+selectedOptionID).addClass("fa-check");
    this.dataservice.question(optionid , questionId).subscribe((data:  Array<object>) => {
      if(data.length==0){
        $('#show2').show();
        this.dataservice.calculate(this.cookieService,this.cookieService.get("cookies[ser]")).subscribe((data:  Array<object>) => {
          this.totalhours = data;
      });
       }else{
          $('#show2').hide();
          this.relations  =  data;
        }

    });  

   }

}
  

