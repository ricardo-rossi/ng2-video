import { Component } from '@angular/core';
import { VideoComponent } from '../video/';

@Component({
    moduleId: module.id,
    selector: 'video-demo',
    templateUrl: 'demo.component.html',
    directives : [VideoComponent]
})
export class VideoDemoComponent {
    videoUrl: string = './files/myviverae-tutorial-vhms.mp4';
    videoTitle: string = 'My Viverae Portal';
}
