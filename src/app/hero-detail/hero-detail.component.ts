import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addFavorite() { // You can give any function name
      if(this.hero?.favorit)
       this.valueChange.emit(false);
      else
       this.valueChange.emit(true);      
  }
}
