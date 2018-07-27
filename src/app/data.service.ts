import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }


  saveCustomerData(data){ 
  
     this.http.post('http://localhost/Cake_php/easyquote/admin/customers/apiAddCustomer', data ,  {
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }}).subscribe((dataa) => {
          // console.log("response");  
          // console.log(dataa);    
      });
  }


  savePartnerData(data){ 
    
     this.http.post('http://localhost/Cake_php/easyquote/admin/users/apiAddPartner', data ,  {
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }}).subscribe((dataa) => {
          // console.log("response");
          // console.log(dataa); 
      });
  }

  showService(){ 

     return this.http.get('http://localhost/Cake_php/easyquote/admin/categories/apiShowService' );
  }

  getservice(id){ 

      return this.http.get('http://localhost/Cake_php/easyquote/admin/services/apiGetService/'+ id );
  }

  questionFirst(id){ 

   id = "id="+id;
   return this.http.post('http://localhost/Cake_php/easyquote/admin/questions/apiGetQuestions', id,  {
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }});
  }

  question(optID, quesId){

  var id = "optID="+optID+"&quesId="+quesId ;

  return this.http.post('http://localhost/Cake_php/easyquote/admin/questions/apiGetQuestion', id,  {
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }});
  }


  calculate(allquestions,serviceid){  

    var result = "";

    var keys = Object.keys(allquestions),
    len = keys.length,
    i = 0,
    prop,
    value,
    count;
    while (i < len) {
      prop = keys[i];
      value = allquestions[prop];
      i += 1;
      result +=   "&queid"+i+"=" + value.queid+ "&optionid"+i+"=" +  value.optionid;
      //console.log(value.optionid);
    }
    count = i ;
    var results = result+"&count="+count+"&serviceID="+serviceid;
    //console.log(results);
     
    return this.http.post('http://localhost/Cake_php/easyquote/admin/WorkingHours/apiCalculator', results,  {
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }});
   
  }

  goback(id){
  return this.http.get('http://localhost/Cake_php/easyquote/admin/questions/apigoback/'+ id );
    
 }
}
