import { Component } from "@angular/core";
import { Character } from "./models/character";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  characters: Character[] = [
    {
      name: "Anna",
      image:
        "https://giantbomb1.cbsistatic.com/uploads/square_small/1/12541/1518875-anna_main_image.png"
    },
    {
      name: "Dr. Boskonovitch",
      image:
        "https://giantbomb1.cbsistatic.com/uploads/square_small/3/33745/2333633-ttt2___boskonovitch.jpg"
    }
  ];
}
