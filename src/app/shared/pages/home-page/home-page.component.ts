import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild(NavbarComponent) navbarComponent!: NavbarComponent;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoContainer') videoContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.navbarComponent.marvelLogoClicked.subscribe(() => {
      this.playVideo('assets/marvel intro.mp4');
    });

    this.navbarComponent.dcLogoClicked.subscribe(() => {
      this.playVideo('assets/dc intro.mp4');
    });

    this.videoPlayer.nativeElement.onended = () => {
      this.closeVideo();
    };
  }

  playVideo(videoSource: string) {
    const videoElement = this.videoPlayer.nativeElement;
    const videoContainer = this.videoContainer.nativeElement;

    videoContainer.style.display = 'block';
    videoElement.src = videoSource;
    videoElement.currentTime = 2;
    videoElement.play();
  }

  closeVideo() {
    const videoElement = this.videoPlayer.nativeElement;
    const videoContainer = this.videoContainer.nativeElement;

    videoElement.pause();
    videoElement.currentTime = 0;
    videoContainer.style.display = 'none';
  }
}
