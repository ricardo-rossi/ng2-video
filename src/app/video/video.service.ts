import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {
  /**
   * Setup properties and defaults
   */
  public videoElement: any;
  public currentPath: string;
  public currentTitle: string = 'loading...';
  public videoWidth: string = '100%';
  public currentTime: number = 0;
  public totalTime: number = 0;
  public percentComplete: number = 0;
  public targetPercent: number = 0;
  public targetAchieved: boolean = false;
  public isMuted: boolean = false;
  public isPlaying: boolean = false;

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
   * Plays / Stops the video
   */
  playVideo() {
    if (this.videoElement.paused) {
      this.videoElement.play();
      this.isPlaying = true;
    } else {
      this.videoElement.pause();
      this.isPlaying = false;
    }
  };

  /**
   * Mutes / Unmutes the volume 
   */
  muteVideo() {
    if (this.videoElement.volume === 0) {
      this.videoElement.volume = 1;
      this.isMuted = false;
    } else {
      this.videoElement.volume = 0;
      this.isMuted = true;
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
