import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  apiUrl = environment.apiRepl

  constructor(private http : HttpClient) {}

  sendCommand(command: string) {
    const payload = { command: command};

    this.http.post(this.apiUrl, payload).subscribe(response => {
      console.log('API response:', response);
    }, error => {
      console.error('API error:', error);
    });
  }

}