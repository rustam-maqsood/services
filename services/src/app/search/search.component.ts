import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  color='';
  priceto=0;
  pricefrom=0;
  size='M';
constructor(private activatedRoute:ActivatedRoute)
{
  this.activatedRoute.queryParams.subscribe(params =>{
    console.log(params);
    this.color = params['color'];
    this.priceto = params['priceto'];
    this.pricefrom = params['pricefrom'];
    this.size = params['size'];
  })
}
}
