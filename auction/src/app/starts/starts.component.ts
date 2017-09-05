import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {
@Input()
  private rating = 0;
  private stars: boolean [];

  @Output()
  private ratingChange:EventEmitter<number>=new EventEmitter();
  @Input()
  private readonly:boolean=true;
  constructor() { }

  ngOnInit() {
    this.stars = [];
 for ( let i = 1; i <= 5; i++) {
    this.stars.push(i > this.rating);
  }
  }

clickStar(index:number){ 
  if (!this.readonly) {
    
    this.rating=index+1;

    this.ratingChange.emit(this.rating);
  }
}
//改变钩子，使用 ngOnChanges 拦截输入属性值的变化
ngOnChanges(){
  this.stars = [];
  for ( let i = 1; i <= 5; i++) {
     this.stars.push(i > this.rating);
   }
}
}
