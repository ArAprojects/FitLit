class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  returnUserHydrationData(id) {
    return this.hydrationData.filter(el => el.userID === id);
  }

}

module.exports = HydrationRepository;