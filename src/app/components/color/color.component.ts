import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[]
  currnetColor:Color;
  dataLoaded=false;
  constructor(private colorservice:ColorService) { }

  ngOnInit(): void {
    this.getColors(); 
    
  }

getColors(){

  this.colorservice.getColors().subscribe(response=>{
    this.colors=response.data
    this.dataLoaded=true
  })
}



setCurrnetColor(color:Color)
{
  this.currnetColor=color
}

getCurrnetColorClass(color:Color)
{
  if(color==this.currnetColor)
  {
    return "list-group-item active"
  }
  else{
    return "list-group-item"
  }
}

}

