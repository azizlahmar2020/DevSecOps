import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  showScrollButton: boolean = true;

  constructor(private el: ElementRef) {}

  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Check if the user has scrolled to the bottom
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    // Toggle the visibility of the scroll button based on whether the user is at the bottom
    this.showScrollButton = !isAtBottom;
  }
}
