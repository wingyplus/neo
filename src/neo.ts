import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
  selector: "neo",
  templateUrl: "/src/neo.html",
  styles: [
    `
      .editor {
        width: 100%;
        height: 800px;
      }
    `,
    `
      .command {
        width: 100%;
      }

      .command > input[name=command] {
        margin: 0;
        padding: 0;
        border: 0;
        width: 100%;
      }
    `
  ],
})
class NeoComponent { }

bootstrap(NeoComponent);
