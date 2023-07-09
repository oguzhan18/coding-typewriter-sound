import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-typewriter-sound',
  templateUrl: './typewriter-sound.component.html',
  styleUrls: ['./typewriter-sound.component.scss']
})
export class TypewriterSoundComponent {
  @HostListener('document:keydown', ['$event'])
  playTypingSound(event: KeyboardEvent): void {
    const typingSound = new Audio();
    typingSound.src = 'assets/music/type-writing.mp3';
    typingSound.load();
    typingSound.play();
  }
}
