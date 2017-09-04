import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    serverCreationStatus: string = 'no server is created';
    serverName: string = 'test server';
    serverCreated: boolean = false;
    constructor() {}

    ngOnInit() {}

    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = 'server created';
    }

    onUpdateServerName(event){
        this.serverName = event.target.value;
    }

}

