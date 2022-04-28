import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Cardetails } from 'src/app/models/carDetails';
import { CardetailsService } from 'src/app/services/cardetails.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

  carDetailss:Cardetails[]=[]
  dataLoaded=false

  constructor(private carDetails:CardetailsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails()
  {
    this.carDetails.getCarDetails().subscribe(response=>
      {
        this.carDetails.getCarDetails().subscribe(response=>
          {
            this.carDetailss=response.data
          })
      })
  }
}
