// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import supabase from "@/supabaseConfig";

// const BashShell = () => {
//   return (
//     <div className="bash-shell-gallery-container">
//       <Duplicate filePath={"css1"} />
//       <Duplicate filePath={"css2"} />
//       <Duplicate filePath={"css3"} />
//       <Duplicate filePath={"css4"} />
//       <Duplicate filePath={"css5"} />
//       <Duplicate filePath={"css6"} />
//       <Duplicate filePath={"css7"} />
//       <Duplicate filePath={"css8"} />
//       <Duplicate filePath={"css9"} />
//       <Duplicate filePath={"css10"} />
//       <Duplicate filePath={"css11"} />
//       <Duplicate filePath={"css12"} />
//       <Duplicate filePath={"css13"} />
//       <Duplicate filePath={"css14"} />
//       <Duplicate filePath={"css15"} />
//       <Duplicate filePath={"css16"} />
//       <Duplicate filePath={"css17"} />
//       <Duplicate filePath={"css18"} />
//       <Duplicate filePath={"css19"} />
//       <Duplicate filePath={"css20"} />
//       <Duplicate filePath={"css21"} />
//       <Duplicate filePath={"css22"} />
//       <Duplicate filePath={"css23"} />
//       <Duplicate filePath={"css24"} />
//       <Duplicate filePath={"css25"} />
//       <Duplicate filePath={"css26"} />
//       <Duplicate filePath={"css27"} />
//       <Duplicate filePath={"css28"} />
//       <Duplicate filePath={"css29"} />
//       <Duplicate filePath={"css30"} />
//       <Duplicate filePath={"css31"} />
//       <Duplicate filePath={"css32"} />
//       <Duplicate filePath={"css33"} />
//       <Duplicate filePath={"css34"} />
//       <Duplicate filePath={"css35"} />
//       <Duplicate filePath={"css36"} />
//       <Duplicate filePath={"css37"} />
//       <Duplicate filePath={"css38"} />
//       <Duplicate filePath={"css39"} />
//       <Duplicate filePath={"css40"} />
//       <Duplicate filePath={"css42"} />
//       <Duplicate filePath={"css43"} />
//       <Duplicate filePath={"css44"} />
//       <Duplicate filePath={"css45"} />
//       <Duplicate filePath={"css46"} />
//       <Duplicate filePath={"css47"} />
//       <Duplicate filePath={"css48"} />
//       <Duplicate filePath={"css49"} />
//       <Duplicate filePath={"css50"} />
//       <Duplicate filePath={"css51"} />
//       <Duplicate filePath={"css52"} />
//       <Duplicate filePath={"css53"} />
//       <Duplicate filePath={"css54"} />
//       <Duplicate filePath={"css55"} />
//       <Duplicate filePath={"css56"} />
//       <Duplicate filePath={"css57"} />
//       <Duplicate filePath={"css58"} />
//       <Duplicate filePath={"css59"} />
//       <Duplicate filePath={"css60"} />
//       <Duplicate filePath={"css61"} />
//       <Duplicate filePath={"css62"} />
//       <Duplicate filePath={"css63"} />
//       <Duplicate filePath={"css64"} />
//       <Duplicate filePath={"css65"} />
//       <Duplicate filePath={"css66"} />
//       <Duplicate filePath={"css67"} />
//       <Duplicate filePath={"css68"} />
//       <Duplicate filePath={"css69"} />
//       <Duplicate filePath={"css70"} />
//       <Duplicate filePath={"css71"} />
//       <Duplicate filePath={"css72"} />
//       <Duplicate filePath={"css73"} />
//       <Duplicate filePath={"css74"} />
//       <Duplicate filePath={"css75"} />
//       <Duplicate filePath={"css76"} />
//       <Duplicate filePath={"css77"} />
//       <Duplicate filePath={"css78"} />
//       <Duplicate filePath={"css79"} />
//       <Duplicate filePath={"css80"} />
//       <Duplicate filePath={"css81"} />
//       <Duplicate filePath={"css82"} />
//       <Duplicate filePath={"css83"} />
//       <Duplicate filePath={"css84"} />
//       <Duplicate filePath={"css85"} />
//       <Duplicate filePath={"css86"} />
//       <Duplicate filePath={"css87"} />
//       <Duplicate filePath={"css88"} />
//       <Duplicate filePath={"css89"} />
//       <Duplicate filePath={"css90"} />
//       <Duplicate filePath={"css91"} />
//       <Duplicate filePath={"css92"} />
//       <Duplicate filePath={"css93"} />
//       <Duplicate filePath={"css94"} />
//       <Duplicate filePath={"css95"} />
//       <Duplicate filePath={"css96"} />
//       <Duplicate filePath={"css97"} />
//       <Duplicate filePath={"css98"} />
//       <Duplicate filePath={"css99"} />
//       <Duplicate filePath={"css100"} />
//       <Duplicate filePath={"css101"} />
//       <Duplicate filePath={"css102"} />
//       <Duplicate filePath={"css103"} />
//       <Duplicate filePath={"css104"} />
//       <Duplicate filePath={"css105"} />
//       <Duplicate filePath={"css106"} />
//       <Duplicate filePath={"css107"} />
//       <Duplicate filePath={"css108"} />
//       <Duplicate filePath={"css109"} />
//       <Duplicate filePath={"css110"} />
//       <Duplicate filePath={"css111"} />
//       <Duplicate filePath={"css112"} />
//       <Duplicate filePath={"css113"} />
//       <Duplicate filePath={"css114"} />
//       <Duplicate filePath={"css115"} />
//       <Duplicate filePath={"css116"} />
//       <Duplicate filePath={"css117"} />
//       <Duplicate filePath={"css118"} />
//       <Duplicate filePath={"css119"} />
//       <Duplicate filePath={"css120"} />
//       <Duplicate filePath={"css121"} />
//       <Duplicate filePath={"css122"} />
//       <Duplicate filePath={"css123"} />
//       <Duplicate filePath={"css124"} />
//       <Duplicate filePath={"css125"} />
//       <Duplicate filePath={"css126"} />
//       <Duplicate filePath={"css127"} />
//       <Duplicate filePath={"css128"} />
//       <Duplicate filePath={"css129"} />
//       <Duplicate filePath={"css130"} />
//       <Duplicate filePath={"css131"} />
//       <Duplicate filePath={"css132"} />
//       <Duplicate filePath={"css133"} />
//       <Duplicate filePath={"css134"} />
//       <Duplicate filePath={"css135"} />
//       <Duplicate filePath={"css136"} />
//       <Duplicate filePath={"css137"} />
//       <Duplicate filePath={"css138"} />
//       <Duplicate filePath={"css139"} />
//       <Duplicate filePath={"css140"} />
//       <Duplicate filePath={"css141"} />
//     </div>
//   );
// };

// export default BashShell;

// export const Duplicate = ({ filePath }) => {
//   const [images, setImages] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch image URLs with prefetching strategy
//   useEffect(() => {
//     async function fetchImagesWithPrefetching() {
//       try {
//         const { data, error } = await supabase.storage
//           .from("programming")
//           .list(`css/${filePath}`, {
//             limit: 100,
//             offset: 0,
//             sortBy: { column: "name", order: "asc" },
//           });

//         if (error) {
//           console.error("Error fetching images:", error);
//           setIsLoading(false);
//           return;
//         }

//         // Generate prefetched image URLs
//         const imageUrls =
//           data?.map(
//             (file) =>
//               supabase.storage
//                 .from("programming")
//                 .getPublicUrl(`css/${filePath}/${file.name}`).data.publicUrl
//           ) || [];

//         // Prefetch images using browser's built-in prefetching
//         imageUrls.forEach((url) => {
//           const link = document.createElement("link");
//           link.rel = "prefetch";
//           link.as = "image";
//           link.href = url;
//           document.head.appendChild(link);
//         });

//         setImages(imageUrls);
//         setIsLoading(false);
//       } catch (err) {
//         console.error("Unexpected error:", err);
//         setIsLoading(false);
//       }
//     }

//     fetchImagesWithPrefetching();
//   }, [filePath]);

//   // Optimized navigation handlers
//   const handleNextImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   }, [images.length]);

//   const handlePreviousImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   }, [images.length]);

//   if (isLoading) {
//     return <div className="bash-shell-loading">Loading images...</div>;
//   }

//   return (
//     <div className="bash-shell-gallery-container">
//       {images.length > 0 && (
//         <div className="bash-shell-image-wrapper">
//           <Image
//             key={images[currentImageIndex]} // Force re-render with new key
//             src={images[currentImageIndex]}
//             alt={`CSS Image ${currentImageIndex + 1}`}
//             fill
//             sizes="(max-width: 768px) 100vw, 600px"
//             style={{
//               objectFit: "contain",
//               transition: "opacity 0.2s ease-in-out",
//             }}
//             priority
//             quality={75}
//             unoptimized // Disable Next.js image optimization
//           />

//           {images.length > 1 && (
//             <>
//               <button
//                 className="bash-shell-nav-button bash-shell-nav-right"
//                 onClick={handleNextImage}
//                 aria-label="Next Image"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polyline points="9 18 15 12 9 6"></polyline>
//                 </svg>
//               </button>

//               <button
//                 className="bash-shell-nav-button bash-shell-nav-left"
//                 onClick={handlePreviousImage}
//                 aria-label="Previous Image"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polyline points="15 18 9 12 15 6"></polyline>
//                 </svg>
//               </button>
//             </>
//           )}
//         </div>
//       )}

//       {images.length > 0 && (
//         <div className="bash-shell-image-counter">
//           {currentImageIndex + 1} / {images.length}
//         </div>
//       )}
//     </div>
//   );
// };

// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import supabase from "@/supabaseConfig";

// const BashShell = () => {
//   // List of file paths
//   const filePaths = [
//     "css1",
//     "css2",
//     "css3",
//     "css4",
//     "css5",
//     "css6",
//     "css7",
//     "css8",
//     "css9",
//     "css10",
//     "css11",
//     "css12",
//     "css13",
//     "css14",
//     "css15",
//     "css16",
//     "css17",
//     "css18",
//     "css19",
//     "css20",
//     "css21",
//     "css22",
//     "css23",
//     "css24",
//     "css25",
//     "css26",
//     "css27",
//     "css28",
//     "css29",
//     "css30",
//     "css31",
//     "css32",
//     "css33",
//     "css34",
//     "css35",
//     "css36",
//     "css37",
//     "css38",
//     "css39",
//     "css40",
//     "css42",
//     "css43",
//     "css44",
//     "css45",
//     "css46",
//     "css47",
//     "css48",
//     "css49",
//     "css50",
//     "css51",
//     "css52",
//     "css53",
//     "css54",
//     "css55",
//     "css56",
//     "css57",
//     "css58",
//     "css59",
//     "css60",
//     "css61",
//     "css62",
//     "css63",
//     "css64",
//     "css65",
//     "css66",
//     "css67",
//     "css68",
//     "css69",
//     "css70",
//     "css71",
//     "css72",
//     "css73",
//     "css74",
//     "css75",
//     "css76",
//     "css77",
//     "css78",
//     "css79",
//     "css80",
//     "css81",
//     "css82",
//     "css83",
//     "css84",
//     "css85",
//     "css86",
//     "css87",
//     "css88",
//     "css89",
//     "css90",
//     "css91",
//     "css92",
//     "css93",
//     "css94",
//     "css95",
//     "css96",
//     "css97",
//     "css98",
//     "css99",
//     "css100",
//     "css101",
//     "css102",
//     "css103",
//     "css104",
//     "css105",
//     "css106",
//     "css107",
//     "css108",
//     "css109",
//     "css110",
//     "css111",
//     "css112",
//     "css113",
//     "css114",
//     "css115",
//     "css116",
//     "css117",
//     "css118",
//     "css119",
//     "css120",
//     "css121",
//     "css122",
//     "css123",
//     "css124",
//     "css125",
//     "css126",
//     "css127",
//     "css128",
//     "css129",
//     "css130",
//     "css131",
//     "css132",
//     "css133",
//     "css134",
//     "css135",
//     "css136",
//     "css137",
//     "css138",
//     "css139",
//     "css140",
//     "css141",
//   ];

//   // Fisher-Yates shuffle algorithm to randomize the array
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   // Shuffle the filePaths array
//   const shuffledFilePaths = shuffleArray([...filePaths]);

//   return (
//     <div className="bash-shell-gallery-container">
//       {shuffledFilePaths.map((filePath, index) => (
//         <Duplicate key={index} filePath={filePath} />
//       ))}
//     </div>
//   );
// };

// export default BashShell;

// // Duplicate component (unchanged)
// export const Duplicate = ({ filePath }) => {
//   const [images, setImages] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch image URLs with prefetching strategy
//   useEffect(() => {
//     async function fetchImagesWithPrefetching() {
//       try {
//         const { data, error } = await supabase.storage
//           .from("programming")
//           .list(`css/${filePath}`, {
//             limit: 100,
//             offset: 0,
//             sortBy: { column: "name", order: "asc" },
//           });

//         if (error) {
//           console.error("Error fetching images:", error);
//           setIsLoading(false);
//           return;
//         }

//         // Generate prefetched image URLs
//         const imageUrls =
//           data?.map(
//             (file) =>
//               supabase.storage
//                 .from("programming")
//                 .getPublicUrl(`css/${filePath}/${file.name}`).data.publicUrl
//           ) || [];

//         // Prefetch images using browser's built-in prefetching
//         imageUrls.forEach((url) => {
//           const link = document.createElement("link");
//           link.rel = "prefetch";
//           link.as = "image";
//           link.href = url;
//           document.head.appendChild(link);
//         });

//         setImages(imageUrls);
//         setIsLoading(false);
//       } catch (err) {
//         console.error("Unexpected error:", err);
//         setIsLoading(false);
//       }
//     }

//     fetchImagesWithPrefetching();
//   }, [filePath]);

//   // Optimized navigation handlers
//   const handleNextImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   }, [images.length]);

//   const handlePreviousImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   }, [images.length]);

//   if (isLoading) {
//     return <div className="bash-shell-loading">Loading images...</div>;
//   }

//   return (
//     <div className="bash-shell-gallery-container">
//       {images.length > 0 && (
//         <div className="bash-shell-image-wrapper">
//           <Image
//             key={images[currentImageIndex]} // Force re-render with new key
//             src={images[currentImageIndex]}
//             alt={`CSS Image ${currentImageIndex + 1}`}
//             fill
//             sizes="(max-width: 768px) 100vw, 600px"
//             style={{
//               objectFit: "contain",
//               transition: "opacity 0.2s ease-in-out",
//             }}
//             priority
//             quality={75}
//             unoptimized // Disable Next.js image optimization
//           />

//           {images.length > 1 && (
//             <>
//               <button
//                 className="bash-shell-nav-button bash-shell-nav-right"
//                 onClick={handleNextImage}
//                 aria-label="Next Image"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polyline points="9 18 15 12 9 6"></polyline>
//                 </svg>
//               </button>

//               <button
//                 className="bash-shell-nav-button bash-shell-nav-left"
//                 onClick={handlePreviousImage}
//                 aria-label="Previous Image"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polyline points="15 18 9 12 15 6"></polyline>
//                 </svg>
//               </button>
//             </>
//           )}
//         </div>
//       )}

//       {images.length > 0 && (
//         <div className="bash-shell-image-counter">
//           {currentImageIndex + 1} / {images.length}
//         </div>
//       )}
//     </div>
//   );
// };

// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import supabase from "@/supabaseConfig";

// const BashShell = () => {
//   // List of file paths
//   const filePaths = Array.from({ length: 141 }, (_, i) => `css${i + 1}`);

//   // Fisher-Yates shuffle algorithm to randomize the array
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   // Shuffle the filePaths array
//   const shuffledFilePaths = shuffleArray([...filePaths]);

//   // Pagination state
//   const [page, setPage] = useState(1);
//   const [displayedFilePaths, setDisplayedFilePaths] = useState([]);
//   const itemsPerPage = 10; // Number of items to display per page

//   // Function to load more items
//   const loadMoreItems = () => {
//     const start = (page - 1) * itemsPerPage;
//     const end = start + itemsPerPage;
//     const newItems = shuffledFilePaths.slice(start, end);
//     setDisplayedFilePaths((prev) => [...prev, ...newItems]); // Append new items
//     setPage(page + 1); // Increment page
//   };

//   // Load initial items when the component mounts
//   useEffect(() => {
//     loadMoreItems();
//   }, []); // Empty dependency array to run only once on mount

//   return (
//     <div className="bash-shell-gallery-container">
//       {displayedFilePaths.map((filePath, index) => (
//         <Duplicate key={index} filePath={filePath} />
//       ))}
//       {shuffledFilePaths.length > displayedFilePaths.length && (
//         <button className="load-more-button" onClick={loadMoreItems}>
//           Load More
//         </button>
//       )}
//     </div>
//   );
// };

// export default BashShell;

// // Duplicate component (unchanged)
// export const Duplicate = ({ filePath }) => {
//   const [images, setImages] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch image URLs with prefetching strategy
//   useEffect(() => {
//     async function fetchImagesWithPrefetching() {
//       try {
//         const { data, error } = await supabase.storage
//           .from("programming")
//           .list(`css/${filePath}`, {
//             limit: 100,
//             offset: 0,
//             sortBy: { column: "name", order: "asc" },
//           });

//         if (error) {
//           console.error("Error fetching images:", error);
//           setIsLoading(false);
//           return;
//         }

//         // Generate prefetched image URLs
//         const imageUrls =
//           data?.map(
//             (file) =>
//               supabase.storage
//                 .from("programming")
//                 .getPublicUrl(`css/${filePath}/${file.name}`).data.publicUrl
//           ) || [];

//         // Prefetch images using browser's built-in prefetching
//         imageUrls.forEach((url) => {
//           const link = document.createElement("link");
//           link.rel = "prefetch";
//           link.as = "image";
//           link.href = url;
//           document.head.appendChild(link);
//         });

//         setImages(imageUrls);
//         setIsLoading(false);
//       } catch (err) {
//         console.error("Unexpected error:", err);
//         setIsLoading(false);
//       }
//     }

//     fetchImagesWithPrefetching();
//   }, [filePath]);

//   // Optimized navigation handlers
//   const handleNextImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   }, [images.length]);

//   const handlePreviousImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   }, [images.length]);

//   if (isLoading) {
//     return <div className="bash-shell-loading">Loading images...</div>;
//   }

//   return (
//     <div className="bash-shell-gallery-container">
//       {images.length > 0 && (
//         <div className="bash-shell-image-wrapper">
//           <Image
//             key={images[currentImageIndex]} // Force re-render with new key
//             src={images[currentImageIndex]}
//             alt={`CSS Image ${currentImageIndex + 1}`}
//             fill
//             sizes="(max-width: 768px) 100vw, 600px"
//             style={{
//               objectFit: "contain",
//               transition: "opacity 0.2s ease-in-out",
//             }}
//             priority
//             quality={75}
//             unoptimized // Disable Next.js image optimization
//           />

//           {images.length > 1 && (
//             <>
//               <button
//                 className="bash-shell-nav-button bash-shell-nav-right"
//                 onClick={handleNextImage}
//                 aria-label="Next Image"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polyline points="9 18 15 12 9 6"></polyline>
//                 </svg>
//               </button>

//               <button
//                 className="bash-shell-nav-button bash-shell-nav-left"
//                 onClick={handlePreviousImage}
//                 aria-label="Previous Image"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polyline points="15 18 9 12 15 6"></polyline>
//                 </svg>
//               </button>
//             </>
//           )}
//         </div>
//       )}

//       {images.length > 0 && (
//         <div className="bash-shell-image-counter">
//           {currentImageIndex + 1} / {images.length}
//         </div>
//       )}
//     </div>
//   );
// };

"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import supabase from "@/supabaseConfig";

const BashShell = () => {
  // List of file paths
  const filePaths = Array.from({ length: 141 }, (_, i) => `css${i + 1}`);

  // Fisher-Yates shuffle algorithm to randomize the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the filePaths array
  const shuffledFilePaths = shuffleArray([...filePaths]);

  // Pagination state
  const [page, setPage] = useState(1);
  const [displayedFilePaths, setDisplayedFilePaths] = useState([]);
  const itemsPerPage = 10; // Number of items to display per page

  // Function to load more items
  const loadMoreItems = () => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const newItems = shuffledFilePaths.slice(start, end);
    setDisplayedFilePaths((prev) => [...prev, ...newItems]); // Append new items
    setPage(page + 1); // Increment page
  };

  // Load initial items when the component mounts
  useEffect(() => {
    loadMoreItems();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="bash-shell-gallery-container">
      {displayedFilePaths.map((filePath, index) => (
        <Duplicate key={index} filePath={filePath} />
      ))}
      {shuffledFilePaths.length > displayedFilePaths.length && (
        <button className="load-more-button" onClick={loadMoreItems}>
          Load More
        </button>
      )}
    </div>
  );
};

export default BashShell;

// Duplicate component with download button added
export const Duplicate = ({ filePath }) => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch image URLs with prefetching strategy
  useEffect(() => {
    async function fetchImagesWithPrefetching() {
      try {
        const { data, error } = await supabase.storage
          .from("programming")
          .list(`css/${filePath}`, {
            limit: 100,
            offset: 0,
            sortBy: { column: "name", order: "asc" },
          });

        if (error) {
          console.error("Error fetching images:", error);
          setIsLoading(false);
          return;
        }

        // Generate prefetched image URLs
        const imageUrls =
          data?.map(
            (file) =>
              supabase.storage
                .from("programming")
                .getPublicUrl(`css/${filePath}/${file.name}`).data.publicUrl
          ) || [];

        // Prefetch images using browser's built-in prefetching
        imageUrls.forEach((url) => {
          const link = document.createElement("link");
          link.rel = "prefetch";
          link.as = "image";
          link.href = url;
          document.head.appendChild(link);
        });

        setImages(imageUrls);
        setIsLoading(false);
      } catch (err) {
        console.error("Unexpected error:", err);
        setIsLoading(false);
      }
    }

    fetchImagesWithPrefetching();
  }, [filePath]);

  // Optimized navigation handlers
  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Function to download all images in the folder
  const handleDownloadAll = async () => {
    try {
      // Loop through each image and download it
      for (let i = 0; i < images.length; i++) {
        const imageUrl = images[i];
        const fileName = `css_${filePath}_image_${i + 1}.jpg`; // Customize the filename

        // Fetch the image as a blob
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // Create a temporary link element
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName; // Set the download filename
        document.body.appendChild(link);
        link.click(); // Trigger the download
        document.body.removeChild(link); // Clean up
      }
    } catch (error) {
      console.error("Error downloading images:", error);
    }
  };

  if (isLoading) {
    return <div className="bash-shell-loading">Loading images...</div>;
  }

  return (
    <div className="bash-shell-gallery-container">
      {images.length > 0 && (
        <div className="bash-shell-image-wrapper">
          <Image
            key={images[currentImageIndex]} // Force re-render with new key
            src={images[currentImageIndex]}
            alt={`CSS Image ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            style={{
              objectFit: "contain",
              transition: "opacity 0.2s ease-in-out",
            }}
            priority
            quality={75}
            unoptimized // Disable Next.js image optimization
          />

          {images.length > 1 && (
            <>
              <button
                className="bash-shell-nav-button bash-shell-nav-right"
                onClick={handleNextImage}
                aria-label="Next Image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              <button
                className="bash-shell-nav-button bash-shell-nav-left"
                onClick={handlePreviousImage}
                aria-label="Previous Image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </>
          )}
        </div>
      )}

      {images.length > 0 && (
        <div className="bash-shell-image-counter">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}

      {/* Download Button */}
      {images.length > 0 && (
        <button
          className="download-all-button"
          onClick={handleDownloadAll}
          aria-label="Download All Images"
        >
          Download All Images
        </button>
      )}
    </div>
  );
};
