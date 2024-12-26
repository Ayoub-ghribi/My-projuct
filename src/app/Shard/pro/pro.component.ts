import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrl: './pro.component.css'
})
export class ProComponent implements OnInit{
 @Input() data:any={}
 @Output() item = new EventEmitter();
ngOnInit(): void {
    
}
add()
{
this.item.emit(this.data)
}
}
