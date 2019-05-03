function Warrior() {
  this.level = () => Math.trunc(this.experience() / 100);
  this.ranks = [
    "Pushover",
    "Novice",
    "Fighter",
    "Warrior",
    "Veteran",
    "Sage",
    "Elite",
    "Conqueror",
    "Champion",
    "Master",
    "Greatest"
  ];
  this.rank = () => {
    const level = this.level();
    return this.findRank(level);
  };
  this.findRank = level => {
    switch (true) {
      case level < 10:
        return this.ranks[0];
      case level < 20:
        return this.ranks[1];
      case level < 30:
        return this.ranks[2];
      case level < 40:
        return this.ranks[3];
      case level < 50:
        return this.ranks[4];
      case level < 60:
        return this.ranks[5];
      case level < 70:
        return this.ranks[6];
      case level < 80:
        return this.ranks[7];
      case level < 90:
        return this.ranks[8];
      case level < 100:
        return this.ranks[9];
      default:
        return this.ranks[10];
    }
  };
  this.experienceValue = 100;
  this.experience = () =>
    this.experienceValue > 10000 ? 10000 : this.experienceValue;
  this.achievementsArray = [];
  this.achievements = () => this.achievementsArray;
  this.battle = enemyLevel => {
    if (enemyLevel > 0 && enemyLevel <= 100) {
      const diff = enemyLevel - this.level();
      switch (true) {
        case diff === 0:
          this.experienceValue += 10;
          return "A good fight";
        case diff === -1:
          this.experienceValue += 5;
          return "A good fight";
        case diff <= -2:
          return "Easy fight";
        default:
          const sameRank = this.rank() === this.findRank(enemyLevel);
          if (!sameRank && diff >= 5) {
            return "You've been defeated";
          } else {
            this.experienceValue += 20 * diff * diff;
            return "An intense fight";
          }
      }
    }
    return "Invalid level";
  };
  this.training = array => {
    if (this.level() >= array[2]) {
      this.experienceValue += array[1];
      this.achievementsArray.push(array[0]);
      return array[0];
    }
    return "Not strong enough";
  };
}
