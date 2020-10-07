import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from '../model/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllHospitals(){
    return this.http.get('http://localhost:8080/hospitais', this.token)
  }

  getByIdHospital(id: number){
    return this.http.get(`http://localhost:8080/hospitais/${id}`, this.token)
  }

  postHospital(hospital: Hospital){
    return this.http.post('http://localhost:8080/hospitais', hospital, this.token)
  }

}

