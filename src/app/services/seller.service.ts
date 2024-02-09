import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  userSignUp(data:any){
    return this.http.post('http://localhost:3000/seller', data)
    // {observe:'response'}).subscribe((result)=>{
      // console.warn(result)
      // if(result){
        // localStorage.setItem('seller',JSON.stringify(result.body))
        // this.router.navigate(['seller-home'])
  }
}
