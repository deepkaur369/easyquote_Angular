import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {
   
  constructor(private dataservice:DataService , private location: Location) { }

  ngOnInit() {
    
  }
  model: any = {};
 
  onSubmit() {

  var src = $('#croppic11').prop('class');
  var image = src.split(' ')[1];
  this.model.image = image;

  var cdata  = "image="+this.model.image+"&cname="+this.model.cname+"&email="+this.model.email+"&password="+this.model.password+"&company="+this.model.company+"&website="+this.model.website+"&address="+this.model.address+"&ip="+this.model.ip; 
  this.dataservice.saveCustomerData(cdata);
  }

 goprevious() {
    this.location.back(); //  go back to previous location
  }

 
}

