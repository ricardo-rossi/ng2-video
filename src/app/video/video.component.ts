import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { ControlsComponent } from './controls.component';
import { VideoService } from './video.service';

/**
 * Angular 2 Video Component
 * 
 * // STILL COMING: 
 * - Captions - Using standards (Research)
 * - Turn Forward/Back on/off
 * - Scrubbing controls
 * - Volume control
 * - Big Play button
 * 
 */
@Component({
    moduleId: module.id,
    selector: 'ng2-video',
    templateUrl: 'video.component.html',
    styleUrls: ['video.component.css'],
    directives: [ControlsComponent],
    providers: [VideoService]
})
export class VideoComponent implements OnInit, OnChanges {

    /**
     * Setup properties
     */
    @Input() allowFullScreen: boolean = true;
    @Input() allowFastForward: boolean = true;
    @Input() url: string = '';
    @Input() title: string = '';
    @Input() posterImage: string = '';
    @Input() isPreloaded: boolean = false;
    @Input() videoWidth: string = '100%';
    @Input() targetPercent: number = 0;
    @Output() targetComplete: EventEmitter<any> = new EventEmitter();

    /**
     * Contruction
     */
    constructor(public videoService: VideoService) {
        setInterval(() => this.checkTarget(), 500);
    }

    /**
     * Init
     */
    ngOnInit() {
        this.videoService.appSetup('videoDisplay');
        this.update();
    }

    /**
     * Listen to changes
     */
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.update();
    }

    /**
     * Sync up the properties with video service
     */
    update(): void {
        this.videoService.currentPath = this.url;
        this.videoService.targetPercent = this.targetPercent;
        this.videoService.currentTitle = this.title;
        this.videoService.videoWidth = this.videoWidth;
        this.videoService.isPreloaded = this.isPreloaded;
        this.videoService.posterImage = this.posterImage;
    }

    /**
     * Emit event when target completed exceeds percentage played
     */
    private checkTarget(): void {
        const targetPercent = this.videoService.targetPercent;
        const targetAchieved = this.videoService.targetAchieved;
        if (!targetAchieved && this.videoService.isPlaying && targetPercent > 0) {
            const percentComplete = this.videoService.percentComplete * 100;
            if (percentComplete > targetPercent) {
                this.videoService.targetAchieved = true;
                this.targetComplete.emit(null);
                this.allowFastForward = true;
            }
        }
    }

}
