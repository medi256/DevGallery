// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import supabase from "@/supabaseConfig";

// const BashShell = () => {
//   return (
//     <div className="bash-shell-gallery-container">
//       <Duplicate filePath={"html1"} />
//       <Duplicate filePath={"html2"} />
//       <Duplicate filePath={"html3"} />
//       <Duplicate filePath={"html4"} />
//       <Duplicate filePath={"html5"} />
//       <Duplicate filePath={"html7"} />
//       <Duplicate filePath={"html8"} />
//       <Duplicate filePath={"html9"} />
//       <Duplicate filePath={"html10"} />
//       <Duplicate filePath={"html11"} />
//       <Duplicate filePath={"html12"} />
//       <Duplicate filePath={"html13"} />
//       <Duplicate filePath={"html14"} />
//       <Duplicate filePath={"html15"} />
//       <Duplicate filePath={"html16"} />
//       <Duplicate filePath={"html17"} />
//       <Duplicate filePath={"html18"} />
//       <Duplicate filePath={"html19"} />
//       <Duplicate filePath={"html20"} />
//       <Duplicate filePath={"html21"} />
//       <Duplicate filePath={"html22"} />
//       <Duplicate filePath={"html23"} />
//       <Duplicate filePath={"html24"} />
//       <Duplicate filePath={"html25"} />
//       <Duplicate filePath={"html26"} />
//       <Duplicate filePath={"html27"} />
//       <Duplicate filePath={"html28"} />
//       <Duplicate filePath={"html29"} />
//       <Duplicate filePath={"html30"} />
//       <Duplicate filePath={"html31"} />
//       <Duplicate filePath={"html32"} />
//       <Duplicate filePath={"html33"} />
//       <Duplicate filePath={"html34"} />
//       <Duplicate filePath={"html35"} />
//       <Duplicate filePath={"html36"} />
//       <Duplicate filePath={"html37"} />
//       <Duplicate filePath={"html38"} />
//       <Duplicate filePath={"html39"} />
//       <Duplicate filePath={"html40"} />
//       <Duplicate filePath={"html41"} />
//       <Duplicate filePath={"html42"} />
//       <Duplicate filePath={"html43"} />
//       <Duplicate filePath={"html44"} />
//       <Duplicate filePath={"html45"} />
//       <Duplicate filePath={"html46"} />
//       <Duplicate filePath={"html47"} />
//       <Duplicate filePath={"html48"} />
//       <Duplicate filePath={"html49"} />
//       <Duplicate filePath={"html50"} />
//       <Duplicate filePath={"html51"} />
//       <Duplicate filePath={"html52"} />
//       <Duplicate filePath={"html53"} />
//       <Duplicate filePath={"html54"} />
//       <Duplicate filePath={"html55"} />
//       <Duplicate filePath={"html56"} />
//       <Duplicate filePath={"html57"} />
//       <Duplicate filePath={"html58"} />
//       <Duplicate filePath={"html59"} />
//       <Duplicate filePath={"html60"} />
//       <Duplicate filePath={"html61"} />
//       <Duplicate filePath={"html62"} />
//       <Duplicate filePath={"html63"} />
//       <Duplicate filePath={"html64"} />
//       <Duplicate filePath={"html65"} />
//       <Duplicate filePath={"html66"} />
//       <Duplicate filePath={"html67"} />
//       <Duplicate filePath={"html68"} />
//       <Duplicate filePath={"html69"} />
//       <Duplicate filePath={"html70"} />
//       <Duplicate filePath={"html71"} />
//       <Duplicate filePath={"html72"} />
//       <Duplicate filePath={"html73"} />
//       <Duplicate filePath={"html74"} />
//       <Duplicate filePath={"html75"} />
//       <Duplicate filePath={"html76"} />
//       <Duplicate filePath={"html77"} />
//       <Duplicate filePath={"html78"} />
//       <Duplicate filePath={"html79"} />
//       <Duplicate filePath={"html80"} />
//       <Duplicate filePath={"html81"} />
//       <Duplicate filePath={"html82"} />
//       <Duplicate filePath={"html83"} />
//       <Duplicate filePath={"html84"} />
//       <Duplicate filePath={"html85"} />
//       <Duplicate filePath={"html86"} />
//       <Duplicate filePath={"html87"} />
//       <Duplicate filePath={"html88"} />
//       <Duplicate filePath={"html89"} />
//       <Duplicate filePath={"html90"} />
//       <Duplicate filePath={"html91"} />
//       <Duplicate filePath={"html92"} />
//       <Duplicate filePath={"html93"} />
//       <Duplicate filePath={"html94"} />
//       <Duplicate filePath={"html95"} />
//       <Duplicate filePath={"html96"} />
//       <Duplicate filePath={"html97"} />
//       <Duplicate filePath={"html98"} />
//       <Duplicate filePath={"html99"} />
//       <Duplicate filePath={"html100"} />
//       <Duplicate filePath={"html101"} />
//       <Duplicate filePath={"html102"} />
//       <Duplicate filePath={"html103"} />
//       <Duplicate filePath={"html104"} />
//       <Duplicate filePath={"html105"} />
//       <Duplicate filePath={"html106"} />
//       <Duplicate filePath={"html107"} />
//       <Duplicate filePath={"html108"} />
//       <Duplicate filePath={"html109"} />
//       <Duplicate filePath={"html110"} />
//       <Duplicate filePath={"html111"} />
//       <Duplicate filePath={"html112"} />
//       <Duplicate filePath={"html113"} />
//       <Duplicate filePath={"html114"} />
//       <Duplicate filePath={"html115"} />
//       <Duplicate filePath={"html116"} />
//       <Duplicate filePath={"html117"} />
//       <Duplicate filePath={"html118"} />
//       <Duplicate filePath={"html119"} />
//       <Duplicate filePath={"html120"} />
//       <Duplicate filePath={"html121"} />
//       <Duplicate filePath={"html122"} />
//       <Duplicate filePath={"html123"} />
//       <Duplicate filePath={"html124"} />
//       <Duplicate filePath={"html125"} />
//       <Duplicate filePath={"html126"} />
//       <Duplicate filePath={"html127"} />
//       <Duplicate filePath={"html128"} />
//       <Duplicate filePath={"html129"} />
//       <Duplicate filePath={"html130"} />
//       <Duplicate filePath={"html131"} />
//       <Duplicate filePath={"html132"} />
//       <Duplicate filePath={"html133"} />
//       <Duplicate filePath={"html134"} />
//       <Duplicate filePath={"html135"} />
//       <Duplicate filePath={"html136"} />
//       <Duplicate filePath={"html137"} />
//       <Duplicate filePath={"html138"} />
//       <Duplicate filePath={"html139"} />
//       <Duplicate filePath={"html140"} />
//       <Duplicate filePath={"html141"} />
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
//           .list(`html/${filePath}`, {
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
//                 .getPublicUrl(`html/${filePath}/${file.name}`).data.publicUrl
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
//             alt={`HTML Image ${currentImageIndex + 1}`}
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
//     "html1",
//     "html2",
//     "html3",
//     "html4",
//     "html5",
//     "html7",
//     "html8",
//     "html9",
//     "html10",
//     "html11",
//     "html12",
//     "html13",
//     "html14",
//     "html15",
//     "html16",
//     "html17",
//     "html18",
//     "html19",
//     "html20",
//     "html21",
//     "html22",
//     "html23",
//     "html24",
//     "html25",
//     "html26",
//     "html27",
//     "html28",
//     "html29",
//     "html30",
//     "html31",
//     "html32",
//     "html33",
//     "html34",
//     "html35",
//     "html36",
//     "html37",
//     "html38",
//     "html39",
//     "html40",
//     "html41",
//     "html42",
//     "html43",
//     "html44",
//     "html45",
//     "html46",
//     "html47",
//     "html48",
//     "html49",
//     "html50",
//     "html51",
//     "html52",
//     "html53",
//     "html54",
//     "html55",
//     "html56",
//     "html57",
//     "html58",
//     "html59",
//     "html60",
//     "html61",
//     "html62",
//     "html63",
//     "html64",
//     "html65",
//     "html66",
//     "html67",
//     "html68",
//     "html69",
//     "html70",
//     "html71",
//     "html72",
//     "html73",
//     "html74",
//     "html75",
//     "html76",
//     "html77",
//     "html78",
//     "html79",
//     "html80",
//     "html81",
//     "html82",
//     "html83",
//     "html84",
//     "html85",
//     "html86",
//     "html87",
//     "html88",
//     "html89",
//     "html90",
//     "html91",
//     "html92",
//     "html93",
//     "html94",
//     "html95",
//     "html96",
//     "html97",
//     "html98",
//     "html99",
//     "html100",
//     "html101",
//     "html102",
//     "html103",
//     "html104",
//     "html105",
//     "html106",
//     "html107",
//     "html108",
//     "html109",
//     "html110",
//     "html111",
//     "html112",
//     "html113",
//     "html114",
//     "html115",
//     "html116",
//     "html117",
//     "html118",
//     "html119",
//     "html120",
//     "html121",
//     "html122",
//     "html123",
//     "html124",
//     "html125",
//     "html126",
//     "html127",
//     "html128",
//     "html129",
//     "html130",
//     "html131",
//     "html132",
//     "html133",
//     "html134",
//     "html135",
//     "html136",
//     "html137",
//     "html138",
//     "html139",
//     "html140",
//     "html141",
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
//           .list(`html/${filePath}`, {
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
//                 .getPublicUrl(`html/${filePath}/${file.name}`).data.publicUrl
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
//             alt={`HTML Image ${currentImageIndex + 1}`}
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
//   const filePaths = Array.from({ length: 141 }, (_, i) => `html${i + 1}`);

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
//           .list(`html/${filePath}`, {
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
//                 .getPublicUrl(`html/${filePath}/${file.name}`).data.publicUrl
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
//             alt={`HTML Image ${currentImageIndex + 1}`}
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
  const filePaths = Array.from({ length: 141 }, (_, i) => `html${i + 1}`);

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
          .list(`html/${filePath}`, {
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
                .getPublicUrl(`html/${filePath}/${file.name}`).data.publicUrl
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
        const fileName = `html_${filePath}_image_${i + 1}.jpg`; // Customize the filename

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
            alt={`HTML Image ${currentImageIndex + 1}`}
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
