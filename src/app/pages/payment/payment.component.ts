import { Component } from '@angular/core';
import { FormControl  , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
shippingAddress:FormGroup=new FormGroup({
  // details:new FormControl(null),
  // phone:new FormControl(null),
  // city:new FormControl(null),
});

handleSubmit(shippingAddress:FormGroup)
{
  console.log("hhhhhhhh")
}


}

