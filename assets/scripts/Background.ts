import { _decorator, CCFloat, Component, Node, randomRangeInt, Vec3 } from "cc";
import { Bird } from "./Bird";

const { ccclass, property } = _decorator;

@ccclass("Background")
export class Background extends Component {
  private speed: Vec3;
  @property({ type: CCFloat })
  private speedX: number = -288;

  start() {
    this.speed = new Vec3(this.speedX, 0, 0);
  }

  update(deltaTime: number) {
    let multiplier = Bird.LEVEL === "hard" ? 2 : 1;
    this.speed.x = this.speedX * deltaTime * multiplier;

    //this.speed.x = this.speedX * deltaTime;
    this.node.translate(this.speed);
    if (this.node.position.x < -288) {
      this.node.translate(new Vec3(288, 0, 0));
    }
  }
}
