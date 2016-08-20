import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {

  public videoElement: any;
  public currentPath: string = '';
  public currentTitle: string = 'loading...';
  public currentTime: number = 0;
  public totalTime: number = 0;
  public percentComplete: number = 0.0;
  public isMuted: boolean = false;
  public isPlaying: boolean = false;

  constructor() { }

  appSetup(v: string) {
    this.videoElement = <HTMLVideoElement>document.getElementById(v);
    this.videoElement.addEventListener('loadedmetadata', this.updateData);
    this.videoElement.addEventListener('timeupdate', this.updateTime);
    this.currentPath = './demo/myviverae-tutorial-vhms.mp4';
    this.currentTitle = 'Sample Video';
  }

  playVideo() {
    if (this.videoElement.paused) {
      this.videoElement.play();
      this.isPlaying = true;
    } else {
      this.videoElement.pause();
      this.isPlaying = false;
    }
  };

  muteVideo() {
    if (this.videoElement.volume === 0) {
      this.videoElement.volume = 1;
      this.isMuted = false;
    } else {
      this.videoElement.volume = 0;
      this.isMuted = true;
    }
  };

  updateData = (e: any) => {
    this.totalTime = this.videoElement.duration;
  };

  updateTime = (e: any) => {
    this.currentTime = this.videoElement.currentTime;
    this.percentComplete = (this.currentTime / this.totalTime);
  };

}
