import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() valueChange = new EventEmitter();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addFavorite() { // You can give any function name
      if(this.hero?.favorit){
       this.valueChange.emit(false);
       this.messageService.add(`HeroDetailComponent: Remove favorit on hero id=${this.hero?.id}`);
      }else{
       this.valueChange.emit(true);
       this.messageService.add(`HeroDetailComponent: Added to favorit on hero id=${this.hero?.id}`);
      }      
  }
}
