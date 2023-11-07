import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [InAppBrowser]
})
export class SettingsComponent {
  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(114, 114, 114, 0.495)";
  checkbox = "primary"
  panelOpenState = false;

  constructor(private inAppBrowser: InAppBrowser) {}

  openExternalLink(url: string) {
    const browser = this.inAppBrowser.create(url, '_system');
  }
}
