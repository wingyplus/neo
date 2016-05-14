import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
  selector: "neo",
  templateUrl: "/src/neo.html",
  styleUrls: [
    "./src/editor.neo.css",
    "./src/command.neo.css"
  ]
})
class NeoComponent { }

bootstrap(NeoComponent);
