import { Injectable } from '@angular/core';
import { Subject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraObservable {

  private static instance: CameraObservable | null = null;
  qrCodeResponse = new Subject<string>();

  constructor() {
    if (!CameraObservable.instance) {
      CameraObservable.instance = this;
    }
    return CameraObservable.instance;
  }

  async readQrCode(): Promise<string> {
    return firstValueFrom(this.qrCodeResponse.asObservable());
  }
}
