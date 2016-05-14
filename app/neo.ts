import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
  selector: "neo",
  templateUrl: "app/neo.html",
  styleUrls: [
    "app/editor.neo.css",
    "app/command.neo.css"
  ]
})
class NeoComponent { }

bootstrap(NeoComponent);
