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
     * Setting default values for the demo 
     */

    // The title of the video to be displayed on the header
    @Input() videoTitle: string = 'Big Buck Bunny';

    // The url link to the video (absulute or relating)
    @Input() videoUrl: string = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';

    // The width of the video player area
    @Input() videoWidth: string = '100%';

    // target percentage to be triggered is reached
    @Input() targetPercent: number = 20.00;
    eventMessage: string = '';

    /**
     * To be triggered when targetPercent is reached
     */
    onTargetComplete(): void {
        // Do something useful        
        this.eventMessage = `Hey! Target Reached! The Target was ${this.targetPercent}%`;
    }
}
