class UberPriceCalculator {
    constructor(baseFare, distance, surgeMultiplier) {
        this.baseFare = baseFare;
        this.distance = distance;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculatePrice() {
        const priceWithoutSurge = this.baseFare * this.distance;
        const priceWithSurge = priceWithoutSurge * this.surgeMultiplier;
        return priceWithSurge;
    }
}

// Creating an UberPriceCalculator instance
const uberPriceCalculator = new UberPriceCalculator(2.5, 10, 1.2);

// Calculating the Uber price
const price = uberPriceCalculator.calculatePrice();
console.log(`Uber Price: ${price}`);
