import { Component, Input } from '@angular/core';
import { VideoComponent } from '../video/';

/**
 * This is a demo of how to use the video component
 */
@Component({
    moduleId: module.id,
    selector: 'video-demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css'],
    directives : [VideoComponent]
})
export class VideoDemoComponent {
    /**
     * Setting defaults for the demo 
     */
    _videoTitle: string = 'Big Buck Bunny';
    _videoUrl: string = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    _videoWidth: string = '100%';
    _targetPercent: number = 20.00;
    eventMessage: string = '';

    /**
     * To be triggered when targetPercent is reached
     */
    onTargetComplete(): void {
        // Do something useful        
        this.eventMessage = `Hey! Target Reached! The Target was ${this._targetPercent}%`;
    }

    /**
     * The title of the video to be displayed on the header
     */
    @Input()
    set videoTitle(title: string) {
        this._videoTitle = title;
    }
    get videoTitle(): string {
        return this._videoTitle;
    }

    /**
     * The url link to the video (absulute or relating)
     */
    @Input()
    set videoUrl(title: string) {
        this._videoUrl = title;
    }
    get videoUrl(): string {
        return this._videoUrl;
    }

    /**
     * The width of the video player area
     */
    @Input()
    set videoWidth(videoWidth: string) {
        this._videoWidth = videoWidth;
    }
    get videoWidth(): string {
        return this._videoWidth;
    }

    /**
     * 
     */
    @Input()
    set targetPercent(percent: number) {
        this._targetPercent = percent;
    }
    get targetPercent(): number {
        return this._targetPercent;
    }

}
