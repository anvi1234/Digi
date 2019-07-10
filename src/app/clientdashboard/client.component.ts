import { Component, OnInit } from "@angular/core";
import { User } from '../main/user.model';
import { UserService } from '../service/user.service';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'client-dash',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent { }




@Component({
  // tslint:disable-next-line: component-selector
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./client.component.css']
})
export class MessageComponent implements OnInit {
  user: User[];
  constructor(private service: UserService) { }

  ngOnInit(){
    this.service
    .getProducts()
    .subscribe((data: User[]) => {
      this.user = data;
  });

  }

}
