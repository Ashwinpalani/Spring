import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    // templateUrl: './server.component.html',
    // styleUrls: ['./server.component.css']
    template: `<p>This is Warning,you are in danger!</p>`,
    styles: [ `p{
        border:red; 
        border-radius: 5px; 
        border-width:1px;   
        border-style:solid;
        padding: 15px;
        background: rgb(243, 144, 144);
    }`
]
})
export class ServerComponent{
job= '';
}