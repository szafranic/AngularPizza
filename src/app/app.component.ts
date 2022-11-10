import { Component } from '@angular/core';
import { MenuItem } from 'src/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPizza';

  chirpMenu : MenuItem[] = [
  {item:"bbq chicken pizza",category:"pizzas",price:13.99},
  {item:"pineapple pizza ",category:"pizzas",price:11.99},
  {item:"fries",category:"snacks",price:3.99},
  {item:"onion rings",category:"snacks",price:2.99},
  {item:"ice cream sundae",category:"treats",price:4.49},
  {item:"reeses cups",category:"treats",price:1.89}];

}


