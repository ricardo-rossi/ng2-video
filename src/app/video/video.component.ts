import { Component, Input, OnInit } from '@angular/core';
import { ControlsComponent } from './controls.component';
import { VideoService } from './video.service';

@Component({
    moduleId: module.id,
    selector: 'ng2-video',
    templateUrl: 'video.component.html',
    styleUrls: ['video.component.css'],
    directives: [ControlsComponent],
    providers: [VideoService]
})
export class VideoComponent implements OnInit {
    @Input() url: string;
    @Input() title: string;

    constructor(public videoService: VideoService) {}

    ngOnInit() {
        this.videoService.appSetup('videoDisplay');
        this.videoService.currentPath = this.url;
        this.videoService.currentTitle = this.title;
    }

}
