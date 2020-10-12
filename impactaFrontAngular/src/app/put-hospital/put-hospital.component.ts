import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from '../model/hospital';
import { AlertasService } from '../service/alertas.service';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-put-hospital',
  templateUrl: './put-hospital.component.html',
  styleUrls: ['./put-hospital.component.css']
})
export class PutHospitalComponent implements OnInit {

  hospital: Hospital = new Hospital()
  listaHospitais: Hospital[]
  idHospital: number

  constructor(
    private hospitalService: HospitalService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params["id"]
    this.findByIdHospital(id)
    window.scroll(0,0)
  }

  salvar() {
    this.hospitalService.putHospital(this.hospital).subscribe((resp: Hospital) => {
      this.hospital = resp
      this.router.navigate(['/hospital'])
      this.alert.showAlertSuccess('Hospital alterado com sucesso!')
    })

  }

  findByIdHospital(id: number) {
    this.hospitalService.getByIdHospital(id).subscribe((resp: Hospital) => {
      this.hospital = resp})
  }


}