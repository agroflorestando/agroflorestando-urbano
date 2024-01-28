import { Component, ElementRef, ViewChild } from '@angular/core';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'agro-camera',
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss'
})
export class CameraComponent {

  @ViewChild('video', { read: ElementRef })
  videoEl?: ElementRef<HTMLVideoElement>;

  scanning?: QrScanner;

  ngAfterViewInit(): void {
    if (this.videoEl && this.videoEl.nativeElement) {
      this.readQRCode(this.videoEl.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.videoEl && this.videoEl.nativeElement) {
      this.stopStreaming(this.videoEl.nativeElement);
    }

    this.stopScanning();
  }

  private async readQRCode(video: HTMLVideoElement): Promise<void> {
    const scanner = new QrScanner(
      video, result => {
        alert(result.data);
        /**
         * TODO:
         * - devo buscar pelo método padrão de armazenamento
         * de credenciais nostr em qrcode;
         * - devo buscar incluir uma lógica de desambiguação
         * uma vez que o qrcode pode ter diferentes tipos de evento
         * além das credenciais.
         */
      }, {});

    const cameras = await QrScanner.listCameras();
    await scanner.setCamera(this.chooseCam(cameras).id);
    await scanner.start();
    return Promise.resolve();
  }

  private chooseCam(cameras: Array<QrScanner.Camera>): QrScanner.Camera {
    if (cameras.length === 1) {
      return cameras[0];
    }

    return cameras.find(camera => /back/.test(camera.label)) || cameras[0];
  }

  private stopScanning(): void {
    if (this.scanning) {
      this.scanning.stop();
      this.scanning.destroy();
    }
  }

  private stopStreaming(video: HTMLVideoElement | undefined): void {
    if (video) {
      const stream = video.srcObject as MediaStream | null;
      if (stream instanceof MediaStream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  }

}
