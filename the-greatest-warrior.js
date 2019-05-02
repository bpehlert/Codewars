function Warrior() {
  this.level = 1;
  this.rank = "Pushover";
  this.experience = 100;
  this.achievements = [];
  this.training = (description, points, minLevelReq) => {};
  this.battle = enemyLevel => {
    if (enemyLevel <= 0 || enemyLevel > 100) return "Inavlid Level";
    return "test";
  };
}
