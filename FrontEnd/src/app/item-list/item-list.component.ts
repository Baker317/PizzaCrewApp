import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Item} from '../item'
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  
  items!:Item[];

  constructor(private itemService:ItemService,
    private router:Router) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(){
    this.itemService.getItemList().subscribe(data => {
      this.items = data
    })
  }

  updateItem(id:number){
    this.router.navigate(['update-item',id])

  }
  deleteItem(id:number){
    this.itemService.deleteItem(id).subscribe(data =>{
      this.getItems();
    })

  }

  itemDetails(id:number){
    this.router.navigate(['item-details',id])

  }

  goToCreateItem(){
    this.router.navigate(['create-item'])
  }

}
