import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { AuthRequest } from '../../model/AuthRequest';
import { Admin } from 'src/app/model/Admin';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  // Add this property to store the entered ID
  deleteId!: number;
  getId!:number;
  adminDetails: Admin | undefined;
  response: any;
  getresponse:any;
  token: any;
  authRequest: AuthRequest = new AuthRequest();

  constructor(private jwtService: AdminService, private admService: AdminService) {}

  readFormData(formData: any) {
    this.authRequest.username = formData.form.value.username;
    this.authRequest.password = formData.form.value.password;
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any) {
    let response = this.jwtService.getGeneratedToken(authRequest);
    response.subscribe((genToken) => {
      this.token = genToken;
      console.log(genToken);
      this.accessApi(this.token);
    });
  }

 /* public accessApi(token: any) {
    let response = this.jwtService.authorizationTest(token);
    response.subscribe((responseData) => {
      this.response = responseData;
      console.log(responseData);
    });
  }   */

  // public accessApi(token: any) {
  //   let response = this.jwtService.authorizationTest(token);
  //   response.subscribe((responseData) => {
  //     this.response = responseData;
  //     console.log('Response Data:', this.response); // Add this line to check data in console
  //   });
  // }
  

  // public accessApi(token: any) {
  //   let response = this.jwtService.authorizationTest(token);
  //   response.subscribe((responseData) => {
  //     this.response = JSON.parse(responseData); // Parse string to array
  //     console.log('Response Data:', this.response);
  //   });
  // }
  

  public accessApi(token: any) {
    let response = this.jwtService.authorizationTest(token);
    response.subscribe((responseData: any) => {
      if (typeof responseData === 'string') {
        this.response = JSON.parse(responseData); // Parse string to array
        console.log('Response Data:', this.response);
      } else {
        console.log('Unexpected response type:', responseData);
        // Handle unexpected response if necessary
      }
    });
  }
  
  












  
  isFormVisible: boolean = false;
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
  isshowFormVisible: boolean = false;
  showForm() {
    this.isshowFormVisible = !this.isshowFormVisible;
  }
  isdeleteFormVisible: boolean = false;
  deleteForm() {
    this.isdeleteFormVisible = !this.isdeleteFormVisible;
  }
  isgetFormVisible: boolean = false;
  getForm() {
    this.isgetFormVisible = !this.isgetFormVisible;
  }

  insertEmployee(data:Admin){
    
        this.admService.insert(data)
        .subscribe(
          (adm)=>{console.log('Added Admin is: '+adm);}
          );
  }
  // Modify deleteById to use the entered ID
  deleteById() {
    this.getAccessToken(this.authRequest);

    // Now, make the delete request with the entered ID
    this.jwtService.delete(this.deleteId, this.token).subscribe((msg) => {
      console.log("Deleted " + msg);
    });
  }

//   getById(){
//     this.getAccessToken(this.authRequest);
//     this.jwtService.getId(this.getId,this.token).subscribe((msg) => {
//       this.getresponse=msg
//       console.log("get id is success " + msg);
//     });
//   }

// }




// getById() {
//   this.getAccessToken(this.authRequest);
//   this.jwtService.getId(this.getId, this.token).subscribe((responseData: any) => {
//     if (typeof responseData == 'string') {
//       this.getresponse = JSON.parse(responseData); // Parse string to array
//       console.log('Get by ID Response Data:', this.getresponse);
//     } else {
//       console.log('Unexpected response type:', responseData);
//       // Handle unexpected response if necessary
//     }
//   });
// }}

getById() {
  this.getAccessToken(this.authRequest);
  this.jwtService.getId(this.getId, this.token).subscribe((responseData: any) => {
    if (Array.isArray(responseData)) {
      this.getresponse = responseData; // Assign array directly
      console.log('Get by ID Response Data:', this.getresponse);
    } else if (typeof responseData === 'string') {
      this.getresponse = JSON.parse(responseData); // Parse string to array
      console.log('Get by ID Response Data:', this.getresponse);
    } else {
      console.log('Unexpected response type:', responseData);
      // Handle unexpected response if necessary
    }
  });
}
}