import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() private updateCompteur: EventEmitter<number> = new EventEmitter();
  constructor() {}

  public decrementer(): void {
    this.updateCompteur.emit(-1);
  }
  public incrementer(): void {
    this.updateCompteur.emit(1);
  }

  ngOnInit() {}
}
