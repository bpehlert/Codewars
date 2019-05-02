function Warrior() {
  this.level = 1;
  this.rank = "Pushover";
  this.experience = 100;
  this.achievements = [];
  this.training = (description, points, minLevelReq) => {};
  this.battle = enemyLevel => {
    if (enemyLevel > 0 && enemyLevel <= 100) {
      const diff = enemyLevel - this.level;
      switch (true) {
        case diff === 0:
          this.experience += 10;
          return "A good fight";
        case diff === -1:
          this.experience += 5;
          return "A good fight";
        case diff <= -2:
          return "Easy fight";
        case diff >= 1 && diff < 5:
          this.experience += 20 * diff * diff;
          return "An intense fight";
        case diff >= 5:
          return "You've been defeated";
        default:
          return "didn't work";
      }
      return;
    }
    return "Invalid level";
  };
  this.training = (description, points, minLevelReq) => {};
}

const Ben = new Warrior();
