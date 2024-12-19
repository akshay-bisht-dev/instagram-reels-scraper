// const express = require('express');
// const cors = require('cors');
// const { ApifyClient } = require('apify-client');

// const app = express();
// const PORT = 5000;

// // Enable CORS and JSON body parsing
// app.use(cors());
// app.use(express.json());

// // Replace with your Apify API token
// const APIFY_API_TOKEN = 'apify_api_aIDPrAeCt8o3ATrx6Vy1amJVqGikPs04xaBd';

// // Initialize the ApifyClient
// const client = new ApifyClient({
//     token: APIFY_API_TOKEN,
// });

// // Endpoint to fetch and filter Instagram Reels data
// app.post('/fetch-reels', async (req, res) => {
//     const { usernames, resultsLimit, minLikes, minShares, minViews } = req.body;

//     if (!usernames || !Array.isArray(usernames)) {
//         return res.status(400).json({ error: 'Invalid or missing "usernames" field' });
//     }

//     try {
//         // Prepare Actor input
//         const input = {
//             username: usernames,
//             resultsLimit: resultsLimit || 100, // Default to 30 results if not provided
//         };

//         // Run the Actor
//         const run = await client.actor('apify/instagram-reel-scraper').call(input);

//         // Fetch Actor results
//         const { items } = await client.dataset(run.defaultDatasetId).listItems();
//         console.log(items);
        

//         // // Filter results based on criteria
//         // const filteredResults = items.filter(item => {
//         //     const likes = item.likes || 0;
//         //     const shares = item.shares || 0;
//         //     const views = item.views || 0;

//         //     return (
//         //         (!minLikes || likes >= minLikes) &&
//         //         (!minShares || shares >= minShares) &&
//         //         (!minViews || views >= minViews)
//         //     );
//         // });

//         // // Send the filtered results
//         // res.json(filteredResults);
//     } catch (error) {
//         console.error('Error fetching or processing data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch or filter reels data' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });







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





// correct but without filter ================================================================================================
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
//             resultsLimit: resultsLimit || 200, // Default to 30 results if not provided
//         };

//         // Run the Actor
//         const run = await client.actor('apify/instagram-reel-scraper').call(input);

//         // Fetch Actor results (full dataset, no filters applied)
//         const { items } = await client.dataset(run.defaultDatasetId).listItems();
//         console.log('Fetched Reels JSON Data:', items);

//         // Send the full dataset to the frontend
//         res.json(items);
//     } catch (error) {
//         console.error('Error fetching or processing data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch reels data' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });




// Correct with filter =============================================================================================


// const express = require('express');
// const cors = require('cors');
// const { ApifyClient } = require('apify-client');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// const APIFY_API_TOKEN = 'apify_api_gCq1ohmGFCYJ9xL07B5MmbeJ4AlsF00uEr2k';

// const client = new ApifyClient({ token: APIFY_API_TOKEN });

// app.post('/fetch-reels', async (req, res) => {
//   const { usernames, resultsLimit } = req.body;

//   if (!usernames || !Array.isArray(usernames)) {
//     return res.status(400).json({ error: 'Invalid or missing "usernames" field' });
//   }

//   try {
//     const input = {
//       username: usernames,
//       resultsLimit: resultsLimit || 100,
//     };

//     const run = await client.actor('apify/instagram-reel-scraper').call(input);

//     const { items } = await client.dataset(run.defaultDatasetId).listItems();

//     const formattedItems = items.map((item) => ({
//       videoPlayCount: item.videoPlayCount,
//       likesCount: item.likesCount,
//       videoUrl: item.videoUrl,
//     }));

//     res.json(formattedItems);
//   } catch (error) {
//     console.error('Error:', error.message);
//     res.status(500).json({ error: 'Failed to fetch reels data' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });






// const express = require('express');
// const cors = require('cors');
// const { ApifyClient } = require('apify-client');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// const APIFY_API_TOKEN = 'apify_api_gCq1ohmGFCYJ9xL07B5MmbeJ4AlsF00uEr2k';

// const client = new ApifyClient({ token: APIFY_API_TOKEN });

// app.post('/fetch-reels', async (req, res) => {
//   const { usernames, resultsLimit, minLikes, minViews } = req.body;

//   if (!usernames || !Array.isArray(usernames)) {
//     return res.status(400).json({ error: 'Invalid or missing "usernames" field' });
//   }

//   try {
//     const input = {
//       username: usernames,
//       resultsLimit: resultsLimit || 100,
//     };

//     const run = await client.actor('apify/instagram-reel-scraper').call(input);
//     const { items } = await client.dataset(run.defaultDatasetId).listItems();
//     console.log(items);
    

//     // Filter items based on optional minLikes and minViews
//     const filteredItems = items.filter(item => {
//       const videoPlayCount = item.videoPlayCount || 0;
//       const likesCount = item.likesCount || 0;

//       // Apply the minimum likes and views filter if provided
//       const isValidVideo = (!minLikes || likesCount >= minLikes) && (!minViews || videoPlayCount >= minViews);
//       return isValidVideo;
//     });

//     // Format the items
//     const formattedItems = filteredItems.map((item) => ({
//       videoPlayCount: item.videoPlayCount || 0, // Default to 0 if null/undefined
//       likesCount: item.likesCount || 0, // Default to 0 if null/undefined
//       videoUrl: item.videoUrl || '', // Default to empty string if null/undefined
//     }));

//     res.json(formattedItems);
//   } catch (error) {
//     console.error('Error:', error.message);
//     res.status(500).json({ error: 'Failed to fetch reels data' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



































const express = require('express');
const cors = require('cors');
const { ApifyClient } = require('apify-client');

const app = express();
const PORT = 5000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// Replace with your Apify API token
const APIFY_API_TOKEN = 'apify_api_gCq1ohmGFCYJ9xL07B5MmbeJ4AlsF00uEr2k';

// Initialize the ApifyClient
const client = new ApifyClient({
    token: APIFY_API_TOKEN,
});

// Helper function to filter reels based on play count and like count
const filterReels = (items, playCountFilter, likeCountFilter) => {
    return items.filter(item => {
        let passPlayCount = true;
        let passLikeCount = true;

        // Play count filter logic
        if (playCountFilter === 'low' && item.videoPlayCount >= 5000) passPlayCount = false;
        if (playCountFilter === 'medium' && (item.videoPlayCount < 5000 || item.videoPlayCount >= 20000)) passPlayCount = false;
        if (playCountFilter === 'high' && item.videoPlayCount < 20000) passPlayCount = false;

        // Like count filter logic
        if (likeCountFilter === 'low' && item.likesCount >= 500) passLikeCount = false;
        if (likeCountFilter === 'medium' && (item.likesCount < 500 || item.likesCount >= 2000)) passLikeCount = false;
        if (likeCountFilter === 'high' && item.likesCount < 2000) passLikeCount = false;

        return passPlayCount && passLikeCount;
    });
};

// Endpoint to fetch Instagram Reels data
app.post('/fetch-reels', async (req, res) => {
    const { usernames, resultsLimit, playCountFilter, likeCountFilter } = req.body;

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

        // Apply filtering if filters are provided
        const filteredItems = filterReels(items, playCountFilter, likeCountFilter);

        // Send the filtered dataset to the frontend
        res.json(filteredItems);
    } catch (error) {
        console.error('Error fetching or processing data:', error.message);
        res.status(500).json({ error: 'Failed to fetch reels data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
