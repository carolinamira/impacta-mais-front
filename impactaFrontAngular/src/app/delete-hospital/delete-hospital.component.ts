import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from '../model/hospital';
import { AlertasService } from '../service/alertas.service';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-delete-hospital',
  templateUrl: './delete-hospital.component.html',
  styleUrls: ['./delete-hospital.component.css']
})
export class DeleteHospitalComponent implements OnInit {

  hospital: Hospital = new Hospital()
  
  constructor(
    private hospitalService: HospitalService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    let id: number = this.route.snapshot.params['id']
    this.findByIdHospital(id)
    window.scroll(0,0)
  }

  findByIdHospital(id: number){
    this.hospitalService.getByIdHospital(id).subscribe((resp: Hospital) => {
      this.hospital = resp
    })
  }

  btnSim(){
    this.hospitalService.deleteHospital(this.hospital.id).subscribe(() => {
      this.router.navigate(['/hospital'])
     this.alert.showAlertSuccess('Hospital apagado com sucesso!')
    })
  }

  btnNao(){
    this.router.navigate(['/hospital'])
  }

}