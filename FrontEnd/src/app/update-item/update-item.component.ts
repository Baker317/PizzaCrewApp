import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  id!:number
  item:Item = new Item;
  constructor(private itemService:ItemService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItemById(this.id).subscribe(data => {
      this.item = data;
      })
  }

  onSubmit(){
  this.itemService.updateItem(this.id,this.item).subscribe(data =>{
    this.router.navigate(['/items'])
  });
  }
}
