import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild(NavbarComponent) navbarComponent!: NavbarComponent;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoContainer') videoContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    // Escuchar el evento emitido desde el NavbarComponent
    this.navbarComponent.marvelLogoClicked.subscribe(() => {
      this.playVideo('assets/marvel intro.mp4');
    });

    this.navbarComponent.dcLogoClicked.subscribe(() => {
      this.playVideo('assets/dc intro.mp4'); // Cambia el nombre del video a tu archivo correspondiente
    });

    // Ocultar el video cuando termine
    this.videoPlayer.nativeElement.onended = () => {
      this.closeVideo();
    };
  }

  // Mostrar y reproducir el video
  playVideo(videoSource: string) {
    const videoElement = this.videoPlayer.nativeElement;
    const videoContainer = this.videoContainer.nativeElement;

    videoContainer.style.display = 'block';  // Mostrar el contenedor del video
    videoElement.src = videoSource;           // Cambiar la fuente del video
    videoElement.currentTime = 2;             // Comenzar en el segundo 2
    videoElement.play();                       // Reproducir el video
  }

  // Cerrar y ocultar el video
  closeVideo() {
    const videoElement = this.videoPlayer.nativeElement;
    const videoContainer = this.videoContainer.nativeElement;

    videoElement.pause();                    // Pausar el video
    videoElement.currentTime = 0;            // Reiniciar el video
    videoContainer.style.display = 'none';   // Ocultar el contenedor del video
  }
}