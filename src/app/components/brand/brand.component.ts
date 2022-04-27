import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currnetBrand:Brand;
  dataLoaded=false;

  constructor(private brandService:BrandService) { }
  
  ngOnInit(): void {
  this.getBrands();
   
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>
      {
        this.brands=response.data
        this.dataLoaded=true
      })
    
  }
  setCurrnetBrand(brand:Brand)
  {
    this.currnetBrand=brand;
  }
  getCurrnetBrandClass(brand:Brand)
  {
    if(brand == this.currnetBrand)
    {
      return "list-group-item active"
    } 
    else  { return "list-group-item"}
  }
}
