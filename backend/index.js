// const express = require('express');
// const cors = require('cors');
// const { ApifyClient } = require('apify-client');

// const app = express();
// const PORT = 5000;

// // Enable CORS and JSON body parsing
// app.use(cors());
// app.use(express.json());

// // Replace with your Apify API token
// const APIFY_API_TOKEN = 'apify_api_gCq1ohmGFCYJ9xL07B5MmbeJ4AlsF00uEr2k';

// // Initialize the ApifyClient
// const client = new ApifyClient({
//     token: APIFY_API_TOKEN,
// });

// // Endpoint to fetch Instagram Reels data
// app.post('/fetch-reels', async (req, res) => {
//     const { usernames, resultsLimit } = req.body;

//     if (!usernames || !Array.isArray(usernames)) {
//         return res.status(400).json({ error: 'Invalid or missing "usernames" field' });
//     }

//     try {
//         // Prepare Actor input
//         const input = {
//             username: usernames,
//             resultsLimit: resultsLimit || 30, // Default to 30 results if not provided
//         };

//         // Run the Actor
//         const run = await client.actor('apify/instagram-reel-scraper').call(input);

//         // Fetch Actor results
//         const { items } = await client.dataset(run.defaultDatasetId).listItems();

//         // Extract and filter only the required fields (video URLs and view counts)
//         const reelVideos = items.map(item => ({
//             videoUrl: item.videoUrl || null, // Reel video URL
//             viewCount: item.views || 0,     // Reel view count
//         })).filter(reel => reel.videoUrl); // Exclude items without video URLs

//         // Send the filtered results
//         res.json(reelVideos);
//     } catch (error) {
//         console.error('Error fetching or processing data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch or filter reels data' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });













const express = require('express');
const cors = require('cors');
const { ApifyClient } = require('apify-client');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// Replace with your Apify API token
const APIFY_API_TOKEN = "apify_api_gCq1ohmGFCYJ9xL07B5MmbeJ4AlsF00uEr2k";

// Initialize the ApifyClient
const client = new ApifyClient({
    token: APIFY_API_TOKEN,
});

// Endpoint to fetch Instagram Reels data
app.post('/fetch-reels', async (req, res) => {
    const { usernames, resultsLimit } = req.body;

    if (!usernames || !Array.isArray(usernames)) {
        return res.status(400).json({ error: 'Invalid or missing "usernames" field' });
    }

    try {
        // Prepare Actor input
        const input = {
            username: usernames,
            resultsLimit: resultsLimit || 200, // Default to 200 results if not provided
        };

        // Run the Actor
        const run = await client.actor('apify/instagram-reel-scraper').call(input);

        // Fetch Actor results (full dataset, no filters applied)
        const { items } = await client.dataset(run.defaultDatasetId).listItems();
        console.log('Fetched Reels JSON Data:', items);

        // Send the full dataset to the frontend
        res.json(items);
    } catch (error) {
        console.error('Error fetching or processing data:', error.message);
        res.status(500).json({ error: 'Failed to fetch reels data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
