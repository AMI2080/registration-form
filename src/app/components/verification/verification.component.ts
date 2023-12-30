import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['verification.component.scss'],
})
export class VerificationComponent implements OnInit, OnDestroy {
  @Input()
  public isShown: boolean = true;

  public countDown: number = 5;

  private counterInterval;

  @HostListener('document:keyup', ['$event'])
  public onKeyUp(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.hide();
    }
  }

  public ngOnInit(): void {
    this.counterInterval = setInterval(() => {
      this.countDown -= 1;
      if (this.countDown < 1) {
        this.hide();
        clearInterval(this.counterInterval);
      }
    }, 1000);
  }

  public hide(): void {
    this.isShown = false;
  }

  public ngOnDestroy(): void {
    if (this.counterInterval) {
      clearInterval(this.counterInterval);
    }
  }
}
