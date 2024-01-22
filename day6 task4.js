class UberPricing {
    constructor(baseFare, costPerMinute, costPerMile) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
    }
  
    calculatePrice(distance, time) {
      const fare = this.baseFare + (time * this.costPerMinute) + (distance * this.costPerMile);
      return fare;
    }
  }
  
  
  const uberX = new UberPricing(2.5, 0.3, 1.5); 
  
  const distanceTraveled = 10; 
  const timeTaken = 20; 
  
  const totalPrice = uberX.calculatePrice(distanceTraveled, timeTaken);
  console.log(`Total fare for a ${distanceTraveled}-mile trip taking ${timeTaken} minutes: $${totalPrice}`);
  