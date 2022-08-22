import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient:HttpClient) { }

  
  getItemList(): Observable<Item[]>{
    return this.httpClient.get<Item[]>("http://localhost:8080/api/v1/items");
  }
  createItem(item:Item):Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/v1/items",item);
  }
  getItemById(id:number): Observable<Item>{
    return this.httpClient.get<Item>("http://localhost:8080/api/v1/items/"+id)
  }
  updateItem(id:number,item:Item): Observable<any>{
    return this.httpClient.put("http://localhost:8080/api/v1/items/"+id,item);
  }
  deleteItem(id:number): Observable<any>{
    return this.httpClient.delete("http://localhost:8080/api/v1/items/"+id)
  }
}
