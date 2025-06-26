import { _decorator, Component, Node, randomRangeInt, Vec3 } from "cc";
import { Bird } from "./Bird";
const { ccclass, property } = _decorator;

@ccclass("Pipa")
export class Pipa extends Component {
  private udahNambahScore: boolean = false;

  start() {}

  update(deltaTime: number) {
    if (Bird.GAME_UDAH_MULAI) {
      this.node.translate(new Vec3(-100 * deltaTime * (Bird.LEVEL === "hard" ? 2 : 1), 0, 0));

      // this.node.translate(new Vec3(-100 * deltaTime, 0, 0));
      if (this.node.position.x < -182) {
        this.node.translate(new Vec3(185 + 182, 0, 0));
        this.udahNambahScore = false;
        if (this.node.position.y <= 0) {
          this.node.translate(new Vec3(185 + 182, randomRangeInt(100, 150), 0));
        } else {
          this.node.translate(new Vec3(185 + 182, randomRangeInt(-100, 0), 0));
        }
      }
    }
  }

  setUdahNambahScore(value: boolean) {
    this.udahNambahScore = value;
  }

  isUdahNambahScore(): boolean {
    return this.udahNambahScore;
  }
}
