import { Component } from '@angular/core';
import { IPinfoService } from '../../services/ipinfo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ip-info',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ip-info.component.html',
  styleUrl: './ip-info.component.css'
})
export class IpInfoComponent {

  ipDato: string = '';
  ipInfo: any = null;
 
  constructor(private ipInfoService: IPinfoService) { 
    //this.obtenerInfoIp(this.ipDato);
  }

  obtenerInfoIp(ip: string): void {
    this.ipInfoService.postInformacionIp(ip).subscribe(
      data => {
        console.log(data);
        this.ipInfo = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}