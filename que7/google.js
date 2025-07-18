

const fetch = require('node-fetch'); 

async function fetchGoogleHomePage() {
    try {
        const response = await fetch('https://www.google.com');
        const html = await response.text();

        console.log("✅ Fetched Google homepage HTML:");
        console.log(html.substring(0, 500)); // Show only first 500 characters
    } catch (error) {
        console.error("❌ Error fetching Google homepage:", error.message);
    }
}

fetchGoogleHomePage();
