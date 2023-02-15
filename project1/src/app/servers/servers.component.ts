import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',//'[app-servers]' --> for attribute, .app-servers --> for class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  name= 'Ashwin';
  age= '21';

  getCity(){
    return 'chennai';
  }

}
