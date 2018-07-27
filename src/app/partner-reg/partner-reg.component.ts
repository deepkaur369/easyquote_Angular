import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
 

@Component({
  selector: 'app-partner-reg',
  templateUrl: './partner-reg.component.html',
  styleUrls: ['./partner-reg.component.scss',
  	'./style.css'
  ]
})
export class PartnerRegComponent implements OnInit {

  constructor(private dataservice:DataService , private location: Location) { }

  ngOnInit() {
  }
   
   numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
 model: any = {};

 onSubmit() {

  var src = $('#croppic11').prop('class');
  var image = src.split(' ')[1];
  this.model.image = image;
  // console.log(this.model);
  var pdata  = "pname="+this.model.pname+"&username="+this.model.username+"&password="+this.model.password+"&company="+this.model.company+"&image="+this.model.image+"&website="+this.model.website+"&address="+this.model.address+"&phone="+this.model.phone+"&info="+this.model.info+"&types="+this.model.types+"&active="+this.model.active; 

  this.dataservice.savePartnerData(pdata);
	}

  goprevious() {
    this.location.back(); // go back to previous location
  }
}
