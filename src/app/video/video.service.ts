import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {
  /**
   * Setup properties and defaults
   */
  public videoElement: any;
  public currentPath: string;
  public currentTitle: string = 'loading...';
  public posterImage: string = '';
  public videoWidth: string = '100%';
  public currentTime: number = 0;
  public totalTime: number = 0;
  public percentComplete: number = 0;
  public targetPercent: number = 0;
  public targetAchieved: boolean = false;
  public isMuted: boolean = false;
  public isPlaying: boolean = false;
  public isPreloaded: boolean = false;

  constructor() { }

  /**
   * Setup and start listining to vidoe events
   */
  appSetup(v: string) {
    this.videoElement = <HTMLVideoElement>document.getElementById(v);
    this.videoElement.addEventListener('loadedmetadata', this.updateData);
    this.videoElement.addEventListener('timeupdate', this.updateTime);
  }

  /**
   * Play/Stop the video
   */
  togglePlay() {
    if (this.videoElement.paused) {
      this.videoElement.play();
      this.isPlaying = true;
    } else {
      this.videoElement.pause();
      this.isPlaying = false;
    }
  };

  /**
   * Mute/Unmute the volume 
   */
  toggleVolume() {
    if (this.videoElement.volume === 0) {
      this.videoElement.volume = 1;
      this.isMuted = false;
    } else {
      this.videoElement.volume = 0;
      this.isMuted = true;
    }
  };

  /**
   * Let's go fullscreen, baby!'
   */
  fullScreen() {
    if (this.videoElement.requestFullscreen) {
      this.videoElement.requestFullscreen();
    } else if (this.videoElement.mozRequestFullScreen) {
      this.videoElement.mozRequestFullScreen();
    } else if (this.videoElement.webkitRequestFullscreen) {
      this.videoElement.webkitRequestFullscreen();
    } else if (this.videoElement.msRequestFullscreen) {
      this.videoElement.msRequestFullscreen();
    }
  };

  /**
   * Reacts to event 'loadedmetadata'
   */
  updateData = (e: any) => {
    this.totalTime = this.videoElement.duration;
  };

  /**
   * Reacts to event 'timeupdate'
   */
  updateTime = (e: any) => {
    this.currentTime = this.videoElement.currentTime;
    this.percentComplete = (this.currentTime / this.totalTime);
  };
}
