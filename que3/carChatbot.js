// carChatbot.js
class CarChatbot {
    constructor() {
        this.data = {
            colors: ["Red", "Blue", "Black", "White", "Silver"],
            types: ["SUV", "Sedan", "Hatchback", "Convertible"],
            priceRange: "Cars range from $20,000 to $100,000 depending on model.",
            features: [
                "Airbags", 
                "ABS", 
                "Cruise Control", 
                "Touchscreen Display", 
                "Sunroof"
            ]
        };
    }

    getResponse(input) {
        input = input.toLowerCase();

        if (input.includes("color")) {
            return `Available colors: ${this.data.colors.join(", ")}.`;
        } else if (input.includes("type") || input.includes("model")) {
            return `Available types: ${this.data.types.join(", ")}.`;
        } else if (input.includes("price")) {
            return this.data.priceRange;
        } else if (input.includes("feature")) {
            return `Features include: ${this.data.features.join(", ")}.`;
        } else if (input.includes("hello") || input.includes("hi")) {
            return "Hello! I am your Car Assistant. Ask me about car color, type, price, or features.";
        } else if (input.includes("bye")) {
            return "Goodbye! Drive safe.";
        } else {
            return "Sorry, I don't understand. Please ask about color, type, price, or features.";
        }
    }
}

module.exports = CarChatbot;
