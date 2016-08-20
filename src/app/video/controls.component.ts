import { Component } from '@angular/core';
import { VideoService } from './video.service';
import { TimeDisplayPipe } from './timedisplay.pipe';

@Component({
    moduleId: module.id,
    selector: 'video-controls',
    templateUrl: 'controls.component.html',
    styleUrls: ['controls.component.css'],
    pipes: [TimeDisplayPipe]
})

export class ControlsComponent {
    constructor(public videoService: VideoService) { }
}
