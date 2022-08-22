import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { CreateThankyouComponent } from './create-thankyou/create-thankyou.component';
const routes: Routes = [
  {path: 'items',component:ItemListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'create-item', component:CreateItemComponent},
  {path: 'update-item/:id', component: UpdateItemComponent},
  {path: 'item-details/:id', component: ItemDetailsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'thankyou', component: CreateThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
