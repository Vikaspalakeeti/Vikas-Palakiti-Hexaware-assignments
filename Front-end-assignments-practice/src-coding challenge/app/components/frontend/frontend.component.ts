import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Players } from 'src/app/model/Players';
import { PlayersService } from 'src/app/service/players.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent {

  isgetJerseyId: boolean = false;
  jerseyNumbers: number[] = [];

  newPlayer: Players = new Players(); // Create a new instance of Players model
  isSuccess = false;

  constructor(private playersService: PlayersService) { }

  addPlayer(playerForm: NgForm): void {
    if (playerForm.valid) {
      this.playersService.addPlayer(this.newPlayer)
        .subscribe(
          response => {
            console.log('Player added:', response);
            this.isSuccess = true; // Set a flag to indicate successful addition
          },
          error => {
            console.error('Error adding player:', error);
            // Handle error scenario
          }
        );
    } else {
      console.error('Invalid form submission');
      // Handle invalid form
    }
  }
  getJerseyId(): void {
    this.isgetJerseyId = !this.isgetJerseyId; // Toggle show/hide

    if (this.isgetJerseyId) {
      this.playersService.getAllJerseyNumbers()
        .subscribe(
          (jerseyNumbers: number[]) => {
            this.jerseyNumbers = jerseyNumbers;
            console.log('Jersey Numbers:', this.jerseyNumbers);
          },
          error => {
            console.error('Error fetching jersey numbers:', error);
            // Handle error scenario
          }
        );
    }
  }

 



  


  isshowFormVisible: boolean = false;
  showForm() {
    this.isshowFormVisible = !this.isshowFormVisible;
  }




}





