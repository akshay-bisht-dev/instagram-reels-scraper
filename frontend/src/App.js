// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [usernames, setUsernames] = useState('');
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const fetchReelsData = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost:5000/fetch-reels', {
//                 usernames: usernames.split(',').map(username => username.trim()),
//                 resultsLimit: 10, // Limit the number of results to 10
//             });
//             setResults(response.data);
//         } catch (error) {
//             console.error('Error fetching reels data:', error.message);
//         }
//         setLoading(false);
//     };

//     return (
//         <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//             <h1>Instagram Reels Viewer</h1>

//             {/* Input for Instagram usernames */}
//             <div>
//                 <label>Instagram Usernames (comma-separated):</label>
//                 <br />
//                 <input
//                     type="text"
//                     value={usernames}
//                     onChange={(e) => setUsernames(e.target.value)}
//                     placeholder="e.g., username1, username2"
//                     style={{ width: '300px', padding: '10px', margin: '10px 0' }}
//                 />
//             </div>

//             {/* Fetch Reels Button */}
//             <button
//                 onClick={fetchReelsData}
//                 style={{
//                     marginTop: '10px',
//                     padding: '10px 20px',
//                     backgroundColor: '#007bff',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer',
//                 }}
//             >
//                 {loading ? 'Loading...' : 'Fetch Reels'}
//             </button>

//             {/* Display Results */}
//             <div style={{ marginTop: '30px' }}>
//                 {loading && <p>Loading reels...</p>}
//                 {!loading && results.length === 0 && <p>No reels to display.</p>}
//                 {!loading && results.length > 0 && (
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//                         {results.map((reel, index) => (
//                             <div
//                                 key={index}
//                                 style={{
//                                     border: '1px solid #ddd',
//                                     borderRadius: '5px',
//                                     padding: '10px',
//                                     width: '300px',
//                                     textAlign: 'center',
//                                 }}
//                             >
//                                 {/* Video Player */}
//                                 <video
//                                     controls
//                                     style={{ width: '100%', borderRadius: '5px' }}
//                                     src={reel.videoUrl}
//                                 >
//                                     Your browser does not support the video tag.
//                                 </video>
//                                 {/* Play Count */}
//                                 <p style={{ marginTop: '10px' }}>
//                                     <strong>Views:</strong> {reel.viewCount}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default App;






// Correct Code =======================================================================================

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [usernames, setUsernames] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchReelsData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/fetch-reels', {
//         usernames: usernames.split(',').map(username => username.trim()),
//         resultsLimit: 100, // Limit the number of results to 10
//       });
//       setResults(response.data);

//     } catch (error) {
//       console.error('Error fetching reels data:', error.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign:'center' }}>
//       <h1>Instagram Reels Viewer</h1>

//       {/* Input for Instagram usernames */}
//       <div>
//         <label>Instagram Usernames (comma-separated):</label>
//         <br />
//         <input
//           type="text"
//           value={usernames}
//           onChange={(e) => setUsernames(e.target.value)}
//           placeholder="e.g., username1, username2"
//           style={{ width: '300px', padding: '10px', margin: '10px 0', textAlign:'center' }}
//         />
//       </div>

//       {/* Fetch Reels Button */}
//       <button
//         onClick={fetchReelsData}
//         style={{
//           marginTop: '10px',
//           padding: '10px 20px',
//           backgroundColor: '#007bff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         {loading ? 'Loading...' : 'Fetch Reels'}
//       </button>

//       {/* Display Results */}
//       <div style={{ marginTop: '30px', textAlign:'center' }}>
//         {loading && <p>Loading reels...</p>}
//         {!loading && results.length === 0 && <p>No reels to display.</p>}
//         {!loading && results.length > 0 && (
//           <div style={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap', gap: '20px' }}>
//             {results.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   border: '1px solid #ddd',
//                   borderRadius: '5px',
//                   padding: '10px',
//                   width: '300px',
//                   textAlign: 'center',
//                 }}
//               >
//                 {/* Video Player */}
//                 {item.videoUrl ? (
//                   <video
//                     controls
//                     style={{ width: '100%', borderRadius: '5px' }}
//                     src={item.videoUrl}
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <p>No video available</p>
//                 )}

//                 {/* View Play Count */}
//                 {item.videoPlayCount !== undefined && (
//                   <p style={{ marginTop: '10px' }}>
//                     <strong>Views:</strong> {item.videoPlayCount}
//                   </p>
//                 )}

//                 {/* Like Count */}
//                 {item.likesCount !== undefined && (
//                   <p style={{ marginTop: '10px' }}>
//                     <strong>Likes:</strong> {item.likesCount}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;







// Filter Code ======================================================================================================================

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [usernames, setUsernames] = useState('');
//   const [results, setResults] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewPlayCountFilter, setViewPlayCountFilter] = useState('all');
//   const [likeCountFilter, setLikeCountFilter] = useState('all');

//   const fetchReelsData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/fetch-reels', {
//         usernames: usernames.split(',').map((username) => username.trim()),
//         resultsLimit: 100,
//       });
//       setResults(response.data);
//       setFilteredResults(response.data); // Initialize filtered results
//     } catch (error) {
//       console.error('Error fetching reels data:', error.message);
//     }
//     setLoading(false);
//   };

//   const applyFilters = () => {
//     let filtered = results;

//     // Apply ViewPlayCount filter
//     if (viewPlayCountFilter !== 'all') {
//       const [minViews, maxViews] = viewPlayCountFilter.split('-').map(Number);
//       filtered = filtered.filter(
//         (item) => item.videoPlayCount >= minViews && item.videoPlayCount <= maxViews
//       );
//     }

//     // Apply LikeCount filter
//     if (likeCountFilter !== 'all') {
//       const [minLikes, maxLikes] = likeCountFilter.split('-').map(Number);
//       filtered = filtered.filter(
//         (item) => item.likesCount >= minLikes && item.likesCount <= maxLikes
//       );
//     }

//     setFilteredResults(filtered);
//   };

//   const handleViewPlayCountChange = (e) => {
//     setViewPlayCountFilter(e.target.value);
//     applyFilters();
//   };

//   const handleLikeCountChange = (e) => {
//     setLikeCountFilter(e.target.value);
//     applyFilters();
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
//       <h1>Instagram Reels Viewer</h1>

//       {/* Input for Instagram usernames */}
//       <div>
//         <label>Instagram Usernames (comma-separated):</label>
//         <br />
//         <input
//           type="text"
//           value={usernames}
//           onChange={(e) => setUsernames(e.target.value)}
//           placeholder="e.g., username1, username2"
//           style={{ width: '300px', padding: '10px', margin: '10px 0', textAlign: 'center' }}
//         />
//       </div>

//       {/* Fetch Reels Button */}
//       <button
//         onClick={fetchReelsData}
//         style={{
//           marginTop: '10px',
//           padding: '10px 20px',
//           backgroundColor: '#007bff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         {loading ? 'Loading...' : 'Fetch Reels'}
//       </button>

//       {/* Filters */}
//       <div style={{ marginTop: '20px' }}>
//         <label style={{ marginRight: '10px' }}>Filter by View Play Count:</label>
//         <select
//           value={viewPlayCountFilter}
//           onChange={handleViewPlayCountChange}
//           style={{ padding: '5px', marginRight: '20px' }}
//         >
//           <option value="all">All Reels</option>
//           <option value="10000-100000">10K - 100K</option>
//           <option value="1000000-10000000">1M - 10M</option>
//         </select>

//         <label style={{ marginRight: '10px' }}>Filter by Like Count:</label>
//         <select
//           value={likeCountFilter}
//           onChange={handleLikeCountChange}
//           style={{ padding: '5px' }}
//         >
//           <option value="all">All Likes</option>
//           <option value="100-1000">100 - 1K</option>
//           <option value="1000-10000">1K - 10K</option>
//         </select>
//       </div>

//       {/* Display Results */}
//       <div style={{ marginTop: '30px', textAlign: 'center' }}>
//         {loading && <p>Loading reels...</p>}
//         {!loading && filteredResults.length === 0 && <p>No reels to display.</p>}
//         {!loading && filteredResults.length > 0 && (
//           <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
//             {filteredResults.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   border: '1px solid #ddd',
//                   borderRadius: '5px',
//                   padding: '10px',
//                   width: '300px',
//                   textAlign: 'center',
//                 }}
//               >
//                 {/* Video Player */}
//                 {item.videoUrl ? (
//                   <video
//                     controls
//                     style={{ width: '100%', borderRadius: '5px' }}
//                     src={item.videoUrl}
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <p>No video available</p>
//                 )}

//                 {/* View Play Count */}
//                 {item.videoPlayCount !== undefined && (
//                   <p style={{ marginTop: '10px' }}>
//                     <strong>Views:</strong> {item.videoPlayCount}
//                   </p>
//                 )}

//                 {/* Like Count */}
//                 {item.likesCount !== undefined && (
//                   <p style={{ marginTop: '10px' }}>
//                     <strong>Likes:</strong> {item.likesCount}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;





// Updated Filter Code ==============================================================================================

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [usernames, setUsernames] = useState('');
//   const [results, setResults] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewPlayCountFilter, setViewPlayCountFilter] = useState('all');
//   const [likeCountFilter, setLikeCountFilter] = useState('all');

//   const fetchReelsData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/fetch-reels', {
//         usernames: usernames.split(',').map((username) => username.trim()),
//         resultsLimit: 200,
//       });
//       setResults(response.data);
//       setFilteredResults(response.data); // Initialize filtered results
//     } catch (error) {
//       console.error('Error fetching reels data:', error.message);
//     }
//     setLoading(false);
//   };

//   const applyFilters = () => {
//     let filtered = results;

//     // Apply ViewPlayCount filter
//     if (viewPlayCountFilter !== 'all') {
//       const [minViews, maxViews] = viewPlayCountFilter.split('-').map(Number);
//       filtered = filtered.filter(
//         (item) =>
//           item.videoPlayCount !== undefined &&
//           item.videoPlayCount >= minViews &&
//           item.videoPlayCount <= maxViews
//       );
//     }

//     // Apply LikeCount filter
//     if (likeCountFilter !== 'all') {
//       const [minLikes, maxLikes] = likeCountFilter.split('-').map(Number);
//       filtered = filtered.filter(
//         (item) =>
//           item.likesCount !== undefined &&
//           item.likesCount >= minLikes &&
//           item.likesCount <= maxLikes
//       );
//     }

//     setFilteredResults(filtered);
//   };

//   const handleFilterChange = (e, filterType) => {
//     if (filterType === 'views') setViewPlayCountFilter(e.target.value);
//     else if (filterType === 'likes') setLikeCountFilter(e.target.value);

//     // Apply filters whenever a dropdown value changes
//     setTimeout(() => {
//       applyFilters();
//     }, 0);
//   };

//   const formatNumber = (num) => {
//     if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
//     if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
//     return num.toString();
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
//       <h1>Instagram Reels Viewer</h1>

//       {/* Input for Instagram usernames */}
//       <div>
//         <label>Instagram Usernames (comma-separated):</label>
//         <br />
//         <input
//           type="text"
//           value={usernames}
//           onChange={(e) => setUsernames(e.target.value)}
//           placeholder="e.g., username1, username2"
//           style={{ width: '300px', padding: '10px', margin: '10px 0', textAlign: 'center' }}
//         />
//       </div>

//       {/* Fetch Reels Button */}
//       <button
//         onClick={fetchReelsData}
//         style={{
//           marginTop: '10px',
//           padding: '10px 20px',
//           backgroundColor: '#007bff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         {loading ? 'Loading...' : 'Fetch Reels'}
//       </button>

//       {/* Filters */}
//       <div style={{ marginTop: '20px' }}>
//         <label style={{ marginRight: '10px' }}>Filter by View Play Count:</label>
//         <select
//           value={viewPlayCountFilter}
//           onChange={(e) => handleFilterChange(e, 'views')}
//           style={{ padding: '5px', marginRight: '20px' }}
//         >
//           <option value="all">All Reels</option>
//           <option value="10000-100000">10K - 100K</option>
//           <option value="1000000-10000000">1M - 10M</option>
//         </select>

//         <label style={{ marginRight: '10px' }}>Filter by Like Count:</label>
//         <select
//           value={likeCountFilter}
//           onChange={(e) => handleFilterChange(e, 'likes')}
//           style={{ padding: '5px' }}
//         >
//           <option value="all">All Likes</option>
//           <option value="100-1000">100 - 1K</option>
//           <option value="1000-10000">1K - 10K</option>
//         </select>
//       </div>

//       {/* Display Results */}
//       <div style={{ marginTop: '30px', textAlign: 'center' }}>
//         {loading && <p>Loading reels...</p>}
//         {!loading && filteredResults.length === 0 && <p>No reels to display.</p>}
//         {!loading && filteredResults.length > 0 && (
//           <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
//             {filteredResults.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   border: '1px solid #ddd',
//                   borderRadius: '5px',
//                   padding: '10px',
//                   width: '300px',
//                   textAlign: 'center',
//                 }}
//               >
//                 {/* Video Player */}
//                 {item.videoUrl ? (
//                   <video
//                     controls
//                     style={{ width: '100%', borderRadius: '5px' }}
//                     src={item.videoUrl}
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <p>No video available</p>
//                 )}

//                 {/* View Play Count */}
//                 {item.videoPlayCount !== undefined && (
//                   <p style={{ marginTop: '10px' }}>
//                     <strong>Views:</strong> {formatNumber(item.videoPlayCount)}
//                   </p>
//                 )}

//                 {/* Like Count */}
//                 {item.likesCount !== undefined && (
//                   <p style={{ marginTop: '10px' }}>
//                     <strong>Likes:</strong> {formatNumber(item.likesCount)}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;







// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [usernames, setUsernames] = useState("");
//   const [results, setResults] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewPlayCountFilter, setViewPlayCountFilter] = useState("all");
//   const [likeCountFilter, setLikeCountFilter] = useState("all");

//   // Helper to format large numbers (e.g., 1000 → 1K, 1000000 → 1M)
//   const formatNumber = (num) => {
//     if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
//     if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
//     return num.toString();
//   };

//   const fetchReelsData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:5000/fetch-reels", {
//         usernames: usernames.split(",").map((username) => username.trim()),
//         resultsLimit: 100,
//       });
//       const reels = response.data.map((item) => ({
//         ...item,
//         videoPlayCount: item.videoPlayCount || 0, // Default to 0 if null/undefined
//         likesCount: item.likesCount || 0, // Default to 0 if null/undefined
//       }));
//       setResults(reels);
//       setFilteredResults(reels); // Initialize filtered results
//     } catch (error) {
//       console.error("Error fetching reels data:", error.message);
//     }
//     setLoading(false);
//   };

//   const applyFilters = () => {
//     let filtered = [...results]; // Copy the results to prevent mutating the original array

//     // Apply View Play Count Filter
//     if (viewPlayCountFilter !== "all") {
//       const [minViews, maxViews] = viewPlayCountFilter.split("-").map(Number);
//       filtered = filtered.filter(
//         (item) =>
//           item.videoPlayCount >= (minViews || 0) &&
//           item.videoPlayCount <= (maxViews || Infinity)
//       );
//     }

//     // Apply Like Count Filter
//     if (likeCountFilter !== "all") {
//       const [minLikes, maxLikes] = likeCountFilter.split("-").map(Number);
//       filtered = filtered.filter(
//         (item) =>
//           item.likesCount >= (minLikes || 0) &&
//           item.likesCount <= (maxLikes || Infinity)
//       );
//     }

//     setFilteredResults(filtered);
//   };

//   const handleViewPlayCountChange = (e) => {
//     setViewPlayCountFilter(e.target.value);
//     applyFilters();
//   };

//   const handleLikeCountChange = (e) => {
//     setLikeCountFilter(e.target.value);
//     applyFilters();
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
//       <h1>Instagram Reels Viewer</h1>

//       {/* Input for Instagram usernames */}
//       <div>
//         <label>Instagram Usernames (comma-separated):</label>
//         <br />
//         <input
//           type="text"
//           value={usernames}
//           onChange={(e) => setUsernames(e.target.value)}
//           placeholder="e.g., username1, username2"
//           style={{ width: "300px", padding: "10px", margin: "10px 0", textAlign: "center" }}
//         />
//       </div>

//       {/* Fetch Reels Button */}
//       <button
//         onClick={fetchReelsData}
//         style={{
//           marginTop: "10px",
//           padding: "10px 20px",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         {loading ? "Loading..." : "Fetch Reels"}
//       </button>

//       {/* Filters */}
//       <div style={{ marginTop: "20px" }}>
//         <label style={{ marginRight: "10px" }}>Filter by View Play Count:</label>
//         <select
//           value={viewPlayCountFilter}
//           onChange={handleViewPlayCountChange}
//           style={{ padding: "5px", marginRight: "20px" }}
//         >
//           <option value="all">All Reels</option>
//           <option value="10000-100000">10K - 100K</option>
//           <option value="1000000-10000000">1M - 10M</option>
//         </select>

//         <label style={{ marginRight: "10px" }}>Filter by Like Count:</label>
//         <select
//           value={likeCountFilter}
//           onChange={handleLikeCountChange}
//           style={{ padding: "5px" }}
//         >
//           <option value="all">All Likes</option>
//           <option value="100-1000">100 - 1K</option>
//           <option value="1000-10000">1K - 10K</option>
//         </select>
//       </div>

//       {/* Display Results */}
//       <div style={{ marginTop: "30px", textAlign: "center" }}>
//         {loading && <p>Loading reels...</p>}
//         {!loading && filteredResults.length === 0 && <p>No reels to display.</p>}
//         {!loading && filteredResults.length > 0 && (
//           <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
//             {filteredResults.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   border: "1px solid #ddd",
//                   borderRadius: "5px",
//                   padding: "10px",
//                   width: "300px",
//                   textAlign: "center",
//                 }}
//               >
//                 {/* Video Player */}
//                 {item.videoUrl ? (
//                   <video
//                     controls
//                     style={{ width: "100%", borderRadius: "5px" }}
//                     src={item.videoUrl}
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <p>No video available</p>
//                 )}

//                 {/* View Play Count */}
//                 <p style={{ marginTop: "10px" }}>
//                   <strong>Views:</strong> {formatNumber(item.videoPlayCount)}
//                 </p>

//                 {/* Like Count */}
//                 <p style={{ marginTop: "10px" }}>
//                   <strong>Likes:</strong> {formatNumber(item.likesCount)}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;






















// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [usernames, setUsernames] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [playCountFilter, setPlayCountFilter] = useState('');
//   const [likeCountFilter, setLikeCountFilter] = useState('');

//   const fetchReelsData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/fetch-reels', {
//         usernames: usernames.split(',').map(username => username.trim()),
//         resultsLimit: 100, // Limit the number of results to 100
//         playCountFilter,
//         likeCountFilter,
//       });
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error fetching reels data:', error.message);
//     }
//     setLoading(false);
// };


//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign:'center' }}>
//       <h1>Instagram Reels Viewer</h1>

//       {/* Input for Instagram usernames */}
//       <div>
//         <label>Instagram Usernames (comma-separated):</label>
//         <br />
//         <input
//           type="text"
//           value={usernames}
//           onChange={(e) => setUsernames(e.target.value)}
//           placeholder="e.g., username1, username2"
//           style={{ width: '300px', padding: '10px', margin: '10px 0', textAlign:'center' }}
//         />
//       </div>

//       {/* Dropdown for play count filter */}
//       <div>
//         <label>Filter by Views:</label>
//         <select
//           value={playCountFilter}
//           onChange={(e) => setPlayCountFilter(e.target.value)}
//           style={{ padding: '10px', margin: '10px 0' }}
//         >
//           <option value="">All</option>
//           <option value="low">Low Views</option>
//           <option value="medium">Medium Views</option>
//           <option value="high">High Views</option>
//         </select>
//       </div>

//       {/* Dropdown for like count filter */}
//       <div>
//         <label>Filter by Likes:</label>
//         <select
//           value={likeCountFilter}
//           onChange={(e) => setLikeCountFilter(e.target.value)}
//           style={{ padding: '10px', margin: '10px 0' }}
//         >
//           <option value="">All</option>
//           <option value="low">Low Likes</option>
//           <option value="medium">Medium Likes</option>
//           <option value="high">High Likes</option>
//         </select>
//       </div>

//       {/* Fetch Reels Button */}
//       <button
//         onClick={fetchReelsData}
//         style={{
//           marginTop: '10px',
//           padding: '10px 20px',
//           backgroundColor: '#007bff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         {loading ? 'Loading...' : 'Fetch Reels'}
//       </button>

//       {/* Display Results */}
//       <div style={{ marginTop: '30px', textAlign:'center' }}>
//         {loading && <p>Loading reels...</p>}
//         {!loading && results.length === 0 && <p>No reels to display.</p>}
//         {!loading && results.length > 0 && (
//           <div style={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap', gap: '20px' }}>
//             {results.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   border: '1px solid #ddd',
//                   borderRadius: '5px',
//                   padding: '10px',
//                   width: '300px',
//                   textAlign: 'center',
//                 }}
//               >
//                 {/* Video Player */}
//                 {item.videoUrl ? (
//                   <video
//                     controls
//                     style={{ width: '100%', borderRadius: '5px' }}
//                     src={item.videoUrl}
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <p>No video available</p>
//                 )}

//                 {/* View Play Count */}
//                 {item.videoPlayCount !== undefined && (
//                   <p style={{ marginTop: '10px' }}>
//                     <strong>Views:</strong> {item.videoPlayCount}
//                   </p>
//                 )}

//                 {/* Like Count */}
//                 {item.likesCount !== undefined && (
//                   <p style={{ marginTop: '10px' }}>
//                     <strong>Likes:</strong> {item.likesCount}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;





// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [usernames, setUsernames] = useState('');
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const fetchReelsData = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost:5000/fetch-reels', {
//                 usernames: usernames.split(',').map(username => username.trim()),
//                 resultsLimit: 100, // Limit the number of results to 10
//             });
//             setResults(response.data);
//         } catch (error) {
//             console.error('Error fetching reels data:', error.message);
//         }
//         setLoading(false);
//     };

//     return (
//         <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//             <h1>Instagram Reels Viewer</h1>

//             {/* Input for Instagram usernames */}
//             <div>
//                 <label>Instagram Usernames (comma-separated):</label>
//                 <br />
//                 <input
//                     type="text"
//                     value={usernames}
//                     onChange={(e) => setUsernames(e.target.value)}
//                     placeholder="e.g., username1, username2"
//                     style={{ width: '300px', padding: '10px', margin: '10px 0' }}
//                 />
//             </div>

//             {/* Fetch Reels Button */}
//             <button
//                 onClick={fetchReelsData}
//                 style={{
//                     marginTop: '10px',
//                     padding: '10px 20px',
//                     backgroundColor: '#007bff',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer',
//                 }}
//             >
//                 {loading ? 'Loading...' : 'Fetch Reels'}
//             </button>

//             {/* Display Results */}
//             <div style={{ marginTop: '30px' }}>
//                 {loading && <p>Loading reels...</p>}
//                 {!loading && results.length === 0 && <p>No reels to display.</p>}
//                 {!loading && results.length > 0 && (
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//                         {results.map((reel, index) => (
//                             <div
//                                 key={index}
//                                 style={{
//                                     border: '1px solid #ddd',
//                                     borderRadius: '5px',
//                                     padding: '10px',
//                                     width: '300px',
//                                     textAlign: 'center',
//                                 }}
//                             >
//                                 {/* Video Player */}
//                                 <video
//                                     controls
//                                     style={{ width: '100%', borderRadius: '5px' }}
//                                     src={reel.videoUrl}
//                                 >
//                                     Your browser does not support the video tag.
//                                 </video>
//                                 {/* Play Count */}
//                                 <p style={{ marginTop: '10px' }}>
//                                     <strong>Views:</strong> {reel.viewCount}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default App;
































// link search =====================================

// import React, { useState } from 'react';
// import axios from 'axios';

// const InstagramReelsFetcher = () => {
//     const [profileLink, setProfileLink] = useState('');
//     const [reels, setReels] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const fetchReels = async () => {
//         setLoading(true);
//         setError('');
//         setReels([]);

//         // Extract the username from the profile link
//         const usernameMatch = profileLink.match(/instagram\.com\/([^/]+)/);
//         if (!usernameMatch) {
//             setError('Invalid Instagram profile link. Please try again.');
//             setLoading(false);
//             return;
//         }

//         const username = usernameMatch[1];

//         try {
//             const response = await axios.post('http://localhost:5000/fetch-reels', {
//                 usernames: [username],
//                 resultsLimit: 30,
//             });
//             setReels(response.data);
//         } catch (err) {
//             console.error('Error fetching Reels data:', err);
//             setError('Failed to fetch Reels data. Please try again.');
//         }

//         setLoading(false);
//     };

//     return (
//         <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//             <h1>Instagram Reels Fetcher</h1>
//             <input
//                 type="text"
//                 placeholder="Enter Instagram profile link"
//                 value={profileLink}
//                 onChange={(e) => setProfileLink(e.target.value)}
//                 style={{
//                     width: '300px',
//                     padding: '10px',
//                     marginRight: '10px',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                 }}
//             />
//             <button
//                 onClick={fetchReels}
//                 style={{
//                     padding: '10px 20px',
//                     backgroundColor: '#007BFF',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                 }}
//             >
//                 Fetch Reels
//             </button>

//             {loading && <p>Loading...</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             <div
//                 style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//                     gap: '20px',
//                     marginTop: '20px',
//                 }}
//             >
//                 {reels.map((reel, index) => (
//                     <div key={index} style={{ textAlign: 'center' }}>
//                         <a href={reel.url}>
//                         <video
//                             src={reel.videoUrl}
//                             controls
//                             style={{ width: '100%', borderRadius: '10px' }}
//                         ></video>
//                         <p>Likes: {reel.likesCount}</p>
//                         <p>View Count: {reel.videoViewCount}</p>
//                         <p>Play Count: {reel.videoPlayCount}</p>
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default InstagramReelsFetcher;
















import React, { useState } from 'react';
import axios from 'axios';

const InstagramReelsFetcher = () => {
    const [profileLink, setProfileLink] = useState('');
    const [reels, setReels] = useState([]);
    const [filteredReels, setFilteredReels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [playCountFilter, setPlayCountFilter] = useState('all');
    const [likeCountFilter, setLikeCountFilter] = useState('all');

    const fetchReels = async () => {
        setLoading(true);
        setError('');
        setReels([]);
        setFilteredReels([]);

        const usernameMatch = profileLink.match(/instagram\.com\/([^/]+)/);
        if (!usernameMatch) {
            setError('Invalid Instagram profile link. Please try again.');
            setLoading(false);
            return;
        }

        const username = usernameMatch[1];

        try {
            const response = await axios.post('http://localhost:5000/fetch-reels', {
                usernames: [username],
                resultsLimit: 100,
            });
            setReels(response.data);
            setFilteredReels(response.data);
        } catch (err) {
            console.error('Error fetching Reels data:', err);
            setError('Failed to fetch Reels data. Please try again.');
        }

        setLoading(false);
    };

    const applyFilters = () => {
        let filtered = [...reels];

        if (playCountFilter !== 'all') {
            const [min, max] = playCountFilter.split('-').map(Number);
            filtered = filtered.filter(
                (reel) => reel.videoPlayCount >= min && reel.videoPlayCount <= max
            );
        }

        if (likeCountFilter !== 'all') {
            const [min, max] = likeCountFilter.split('-').map(Number);
            filtered = filtered.filter(
                (reel) => reel.likesCount >= min && reel.likesCount <= max
            );
        }

        setFilteredReels(filtered);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Instagram Reels Fetcher</h1>
            <input
                type="text"
                placeholder="Enter Instagram profile link"
                value={profileLink}
                onChange={(e) => setProfileLink(e.target.value)}
                style={{
                    width: '300px',
                    padding: '10px',
                    marginRight: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            />
            <button
                onClick={fetchReels}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                Fetch Reels
            </button>

            <div style={{ marginTop: '20px' }}>
                <label style={{ marginRight: '10px' }}>Filter by Play Count:</label>
                <select
                    value={playCountFilter}
                    onChange={(e) => setPlayCountFilter(e.target.value)}
                    style={{ padding: '5px', marginRight: '20px' }}
                >
                    <option value="all">All</option>
                    <option value="1000-10000">1K - 10K</option>
                    <option value="10000-100000">10K - 100K</option>
                    <option value="1000000-10000000">1M - 10M</option>
                </select>

                <label style={{ marginRight: '10px' }}>Filter by Like Count:</label>
                <select
                    value={likeCountFilter}
                    onChange={(e) => setLikeCountFilter(e.target.value)}
                    style={{ padding: '5px' }}
                >
                    <option value="all">All</option>
                    <option value="1000-10000">1K - 10K</option>
                    <option value="10000-100000">10K - 100K</option>
                    <option value="1000000-10000000">1M - 10M</option>
                </select>

                <button
                    onClick={applyFilters}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28A745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginLeft: '20px',
                    }}
                >
                    Apply Filters
                </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '20px',
                }}
            >
                {filteredReels.map((reel, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <a href={reel.url}>
                            <video
                                src={reel.videoUrl}
                                controls
                                style={{ width: '100%', borderRadius: '10px' }}
                            ></video>
                            <p>Likes: {reel.likesCount}</p>
                            <p>View Count: {reel.videoViewCount}</p>
                            <p>Play Count: {reel.videoPlayCount}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramReelsFetcher;













// It didn't filter perfectly =========================================================================
// import React, { useState } from 'react';
// import axios from 'axios';

// const InstagramReelsFetcher = () => {
//     const [profileLink, setProfileLink] = useState('');
//     const [reels, setReels] = useState([]);
//     const [filteredReels, setFilteredReels] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [playCountFilter, setPlayCountFilter] = useState('all');
//     const [likeCountFilter, setLikeCountFilter] = useState('all');

//     // Function to format numbers into international counting format
//     const formatCount = (count) => {
//         if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
//         if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
//         return count.toString();
//     };

//     const fetchReels = async () => {
//         setLoading(true);
//         setError('');
//         setReels([]);
//         setFilteredReels([]);

//         const usernameMatch = profileLink.match(/instagram\.com\/([^/]+)/);
//         if (!usernameMatch) {
//             setError('Invalid Instagram profile link. Please try again.');
//             setLoading(false);
//             return;
//         }

//         const username = usernameMatch[1];

//         try {
//             const response = await axios.post('http://localhost:5000/fetch-reels', {
//                 usernames: [username],
//                 resultsLimit: 30,
//             });
//             setReels(response.data);
//             setFilteredReels(response.data);
//         } catch (err) {
//             console.error('Error fetching Reels data:', err);
//             setError('Failed to fetch Reels data. Please try again.');
//         }

//         setLoading(false);
//     };

//     const applyFilters = () => {
//         let filtered = [...reels];

//         if (playCountFilter !== 'all') {
//             const [min, max] = playCountFilter.split('-').map(Number);
//             filtered = filtered.filter(
//                 (reel) => reel.videoPlayCount >= min && reel.videoPlayCount <= max
//             );
//         }

//         if (likeCountFilter !== 'all') {
//             const [min, max] = likeCountFilter.split('-').map(Number);
//             filtered = filtered.filter(
//                 (reel) => reel.likesCount >= min && reel.likesCount <= max
//             );
//         }

//         setFilteredReels(filtered);
//     };

//     return (
//         <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//             <h1>Instagram Reels Fetcher</h1>
//             <input
//                 type="text"
//                 placeholder="Enter Instagram profile link"
//                 value={profileLink}
//                 onChange={(e) => setProfileLink(e.target.value)}
//                 style={{
//                     width: '300px',
//                     padding: '10px',
//                     marginRight: '10px',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                 }}
//             />
//             <button
//                 onClick={fetchReels}
//                 style={{
//                     padding: '10px 20px',
//                     backgroundColor: '#007BFF',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                 }}
//             >
//                 Fetch Reels
//             </button>

//             <div style={{ marginTop: '20px' }}>
//                 <label style={{ marginRight: '10px' }}>Filter by Play Count:</label>
//                 <select
//                     value={playCountFilter}
//                     onChange={(e) => setPlayCountFilter(e.target.value)}
//                     style={{ padding: '5px', marginRight: '20px' }}
//                 >
//                     <option value="all">All</option>
//                     <option value="10000-100000">10K - 100K</option>
//                     <option value="1000000-10000000">1M - 10M</option>
//                 </select>

//                 <label style={{ marginRight: '10px' }}>Filter by Like Count:</label>
//                 <select
//                     value={likeCountFilter}
//                     onChange={(e) => setLikeCountFilter(e.target.value)}
//                     style={{ padding: '5px' }}
//                 >
//                     <option value="all">All</option>
//                     <option value="10000-100000">10K - 100K</option>
//                     <option value="1000000-10000000">1M - 10M</option>
//                 </select>

//                 <button
//                     onClick={applyFilters}
//                     style={{
//                         padding: '10px 20px',
//                         backgroundColor: '#28A745',
//                         color: '#fff',
//                         border: 'none',
//                         borderRadius: '4px',
//                         cursor: 'pointer',
//                         marginLeft: '20px',
//                     }}
//                 >
//                     Apply Filters
//                 </button>
//             </div>

//             {loading && <p>Loading...</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             <div
//                 style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//                     gap: '20px',
//                     marginTop: '20px',
//                 }}
//             >
//                 {filteredReels.map((reel, index) => (
//                     <div key={index} style={{ textAlign: 'center' }}>
//                         <a href={reel.url}>
//                             <video
//                                 src={reel.videoUrl}
//                                 controls
//                                 style={{ width: '100%', borderRadius: '10px' }}
//                             ></video>
//                             <p>Likes: {formatCount(reel.likesCount)}</p>
//                             <p>View Count: {formatCount(reel.videoViewCount)}</p>
//                             <p>Play Count: {formatCount(reel.videoPlayCount)}</p>
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default InstagramReelsFetcher;

