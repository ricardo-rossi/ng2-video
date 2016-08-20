import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {

  public videoElement: any;
  public currentPath: string = '';
  public currentTitle: string = 'loading...';
  public currentTime: number = 0;
  public totalTime: number = 0;
  public percentComplete: number = 0.0;

  constructor() { }

  appSetup(v: string) {
    this.videoElement = <HTMLVideoElement>document.getElementById(v);
    this.videoElement.addEventListener('loadedmetadata', this.updateData);
    this.videoElement.addEventListener('timeupdate', this.updateTime);
    this.currentPath = './demo/myviverae-tutorial-vhms.mp4';
    this.currentTitle = 'Sample Video';
  }

  updateData = (e: any) => {
    this.totalTime = this.videoElement.duration;
  };

  updateTime = (e: any) => {
    this.currentTime = this.videoElement.currentTime;
    this.percentComplete = (this.currentTime / this.totalTime);
  };

}
