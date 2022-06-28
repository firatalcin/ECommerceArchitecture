import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
   }

  ngOnInit(): void {
    this.showSpinner(spinnerType.BallAtom);
    this.httpClientService.get({
      controller: "products"
    }).subscribe(data => console.log(data));

    this.httpClientService.post({
      controller: "products"
    },{
      name: "Kalem",
      stock: 100,
      price: 15
    }).subscribe();

    this.httpClientService.post({
      controller: "products"
    },{
      name: "Kağıt",
      stock: 1000,
      price: 5
    }).subscribe();

    this.httpClientService.post({
      controller: "products"
    },{
      name: "Silgi",
      stock: 50,
      price: 2
    }).subscribe();

    this.httpClientService.post({
      controller: "products"
    },{
      name: "Defter",
      stock: 150,
      price: 20
    }).subscribe();


    this.httpClientService.put({
      controller: "products",
    },{
      id: "id",
      name: "Renkli Kağıt",
      stock: 1500,
      price: 25
    }).subscribe()

    this.httpClientService.delete({
      controller: "products"
    }, "id").subscribe();
  }

}
