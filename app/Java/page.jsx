// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import supabase from "@/supabaseConfig";

// const BashShell = () => {
//   return (
//     <div className="bash-shell-gallery-container">
// <Duplicate filePath={"java1"} />
// <Duplicate filePath={"java2"} />
// <Duplicate filePath={"java3"} />
// <Duplicate filePath={"java4"} />
// <Duplicate filePath={"java5"} />
// <Duplicate filePath={"java6"} />
// <Duplicate filePath={"java7"} />
// <Duplicate filePath={"java8"} />
// <Duplicate filePath={"java9"} />
// <Duplicate filePath={"java10"} />
// <Duplicate filePath={"java11"} />
// <Duplicate filePath={"java12"} />
// <Duplicate filePath={"java13"} />
// <Duplicate filePath={"java14"} />
// <Duplicate filePath={"java15"} />
// <Duplicate filePath={"java16"} />
// <Duplicate filePath={"java17"} />
// <Duplicate filePath={"java18"} />
// <Duplicate filePath={"java19"} />
// <Duplicate filePath={"java20"} />
// <Duplicate filePath={"java21"} />
// <Duplicate filePath={"java22"} />
// <Duplicate filePath={"java23"} />
// <Duplicate filePath={"java25"} />
// <Duplicate filePath={"java26"} />
// <Duplicate filePath={"java27"} />
// <Duplicate filePath={"java28"} />
// <Duplicate filePath={"java29"} />
// <Duplicate filePath={"java30"} />
// <Duplicate filePath={"java31"} />
// <Duplicate filePath={"java32"} />
// <Duplicate filePath={"java33"} />
// <Duplicate filePath={"java34"} />
// <Duplicate filePath={"java35"} />
// <Duplicate filePath={"java36"} />
// <Duplicate filePath={"java37"} />
// <Duplicate filePath={"java38"} />
// <Duplicate filePath={"java39"} />
// <Duplicate filePath={"java40"} />
// <Duplicate filePath={"java41"} />
// <Duplicate filePath={"java42"} />
// <Duplicate filePath={"java43"} />
// <Duplicate filePath={"java44"} />
// <Duplicate filePath={"java45"} />
// <Duplicate filePath={"java46"} />
// <Duplicate filePath={"java47"} />
// <Duplicate filePath={"java48"} />
// <Duplicate filePath={"java49"} />
// <Duplicate filePath={"java50"} />
// <Duplicate filePath={"java51"} />
// <Duplicate filePath={"java52"} />
// <Duplicate filePath={"java53"} />
// <Duplicate filePath={"java54"} />
// <Duplicate filePath={"java55"} />
// <Duplicate filePath={"java56"} />
// <Duplicate filePath={"java57"} />
// <Duplicate filePath={"java58"} />
// <Duplicate filePath={"java59"} />
// <Duplicate filePath={"java60"} />
// <Duplicate filePath={"java61"} />
// <Duplicate filePath={"java62"} />
// <Duplicate filePath={"java63"} />
// <Duplicate filePath={"java64"} />
// <Duplicate filePath={"java65"} />
// <Duplicate filePath={"java66"} />
// <Duplicate filePath={"java67"} />
// <Duplicate filePath={"java68"} />
// <Duplicate filePath={"java69"} />
// <Duplicate filePath={"java70"} />
// <Duplicate filePath={"java71"} />
// <Duplicate filePath={"java72"} />
// <Duplicate filePath={"java73"} />
// <Duplicate filePath={"java74"} />
// <Duplicate filePath={"java75"} />
// <Duplicate filePath={"java76"} />
// <Duplicate filePath={"java77"} />
// <Duplicate filePath={"java78"} />
// <Duplicate filePath={"java79"} />
// <Duplicate filePath={"java80"} />
// <Duplicate filePath={"java81"} />
// <Duplicate filePath={"java82"} />
// <Duplicate filePath={"java83"} />
// <Duplicate filePath={"java84"} />
// <Duplicate filePath={"java85"} />
// <Duplicate filePath={"java86"} />
// <Duplicate filePath={"java87"} />
// <Duplicate filePath={"java88"} />
// <Duplicate filePath={"java89"} />
// <Duplicate filePath={"java90"} />
// <Duplicate filePath={"java91"} />
// <Duplicate filePath={"java92"} />
// <Duplicate filePath={"java93"} />
// <Duplicate filePath={"java94"} />
// <Duplicate filePath={"java95"} />
// <Duplicate filePath={"java96"} />
// <Duplicate filePath={"java97"} />
// <Duplicate filePath={"java98"} />
// <Duplicate filePath={"java99"} />
// <Duplicate filePath={"java100"} />
// <Duplicate filePath={"java101"} />
// <Duplicate filePath={"java102"} />
// <Duplicate filePath={"java103"} />
// <Duplicate filePath={"java104"} />
// <Duplicate filePath={"java105"} />
// <Duplicate filePath={"java106"} />
// <Duplicate filePath={"java107"} />
// <Duplicate filePath={"java108"} />
// <Duplicate filePath={"java109"} />
// <Duplicate filePath={"java110"} />
// <Duplicate filePath={"java111"} />
// <Duplicate filePath={"java112"} />
// <Duplicate filePath={"java113"} />
// <Duplicate filePath={"java114"} />
// <Duplicate filePath={"java115"} />
// <Duplicate filePath={"java116"} />
// <Duplicate filePath={"java117"} />
// <Duplicate filePath={"java118"} />
// <Duplicate filePath={"java119"} />
// <Duplicate filePath={"java120"} />
// <Duplicate filePath={"java121"} />
// <Duplicate filePath={"java122"} />
// <Duplicate filePath={"java123"} />
// <Duplicate filePath={"java124"} />
// <Duplicate filePath={"java125"} />
// <Duplicate filePath={"java127"} />
// <Duplicate filePath={"java128"} />
// <Duplicate filePath={"java129"} />
// <Duplicate filePath={"java130"} />
// <Duplicate filePath={"java132"} />
// <Duplicate filePath={"java133"} />
// <Duplicate filePath={"java134"} />
// <Duplicate filePath={"java135"} />
// <Duplicate filePath={"java136"} />
// <Duplicate filePath={"java137"} />
// <Duplicate filePath={"java138"} />
// <Duplicate filePath={"java139"} />
// <Duplicate filePath={"java140"} />
// <Duplicate filePath={"java141"} />
// <Duplicate filePath={"java142"} />
// <Duplicate filePath={"java143"} />
// <Duplicate filePath={"java144"} />
// <Duplicate filePath={"java145"} />
// <Duplicate filePath={"java146"} />
// <Duplicate filePath={"java147"} />
// <Duplicate filePath={"java148"} />
// <Duplicate filePath={"java149"} />
// <Duplicate filePath={"java150"} />
// <Duplicate filePath={"java151"} />
// <Duplicate filePath={"java152"} />
// <Duplicate filePath={"java153"} />
// <Duplicate filePath={"java154"} />
// <Duplicate filePath={"java155"} />
// <Duplicate filePath={"java156"} />
// <Duplicate filePath={"java157"} />
// <Duplicate filePath={"java158"} />
// <Duplicate filePath={"java159"} />
// <Duplicate filePath={"java160"} />
// <Duplicate filePath={"java161"} />
// <Duplicate filePath={"java162"} />
// <Duplicate filePath={"java163"} />
// <Duplicate filePath={"java164"} />
// <Duplicate filePath={"java165"} />
// <Duplicate filePath={"java166"} />
// <Duplicate filePath={"java167"} />
// <Duplicate filePath={"java168"} />
// <Duplicate filePath={"java169"} />
// <Duplicate filePath={"java170"} />
// <Duplicate filePath={"java171"} />
// <Duplicate filePath={"java172"} />
// <Duplicate filePath={"java173"} />
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
//           .list(`java/${filePath}`, {
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
//                 .getPublicUrl(`java/${filePath}/${file.name}`).data.publicUrl
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
//             alt={`Java  programming  Images ${currentImageIndex + 1}`}
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
//     "java1",
//     "java2",
//     "java3",
//     "java4",
//     "java5",
//     "java6",
//     "java7",
//     "java8",
//     "java9",
//     "java10",
//     "java11",
//     "java12",
//     "java13",
//     "java14",
//     "java15",
//     "java16",
//     "java17",
//     "java18",
//     "java19",
//     "java20",
//     "java21",
//     "java22",
//     "java23",
//     "java25",
//     "java26",
//     "java27",
//     "java28",
//     "java29",
//     "java30",
//     "java31",
//     "java32",
//     "java33",
//     "java34",
//     "java35",
//     "java36",
//     "java37",
//     "java38",
//     "java39",
//     "java40",
//     "java41",
//     "java42",
//     "java43",
//     "java44",
//     "java45",
//     "java46",
//     "java47",
//     "java48",
//     "java49",
//     "java50",
//     "java51",
//     "java52",
//     "java53",
//     "java54",
//     "java55",
//     "java56",
//     "java57",
//     "java58",
//     "java59",
//     "java60",
//     "java61",
//     "java62",
//     "java63",
//     "java64",
//     "java65",
//     "java66",
//     "java67",
//     "java68",
//     "java69",
//     "java70",
//     "java71",
//     "java72",
//     "java73",
//     "java74",
//     "java75",
//     "java76",
//     "java77",
//     "java78",
//     "java79",
//     "java80",
//     "java81",
//     "java82",
//     "java83",
//     "java84",
//     "java85",
//     "java86",
//     "java87",
//     "java88",
//     "java89",
//     "java90",
//     "java91",
//     "java92",
//     "java93",
//     "java94",
//     "java95",
//     "java96",
//     "java97",
//     "java98",
//     "java99",
//     "java100",
//     "java101",
//     "java102",
//     "java103",
//     "java104",
//     "java105",
//     "java106",
//     "java107",
//     "java108",
//     "java109",
//     "java110",
//     "java111",
//     "java112",
//     "java113",
//     "java114",
//     "java115",
//     "java116",
//     "java117",
//     "java118",
//     "java119",
//     "java120",
//     "java121",
//     "java122",
//     "java123",
//     "java124",
//     "java125",
//     "java127",
//     "java128",
//     "java129",
//     "java130",
//     "java132",
//     "java133",
//     "java134",
//     "java135",
//     "java136",
//     "java137",
//     "java138",
//     "java139",
//     "java140",
//     "java141",
//     "java142",
//     "java143",
//     "java144",
//     "java145",
//     "java146",
//     "java147",
//     "java148",
//     "java149",
//     "java150",
//     "java151",
//     "java152",
//     "java153",
//     "java154",
//     "java155",
//     "java156",
//     "java157",
//     "java158",
//     "java159",
//     "java160",
//     "java161",
//     "java162",
//     "java163",
//     "java164",
//     "java165",
//     "java166",
//     "java167",
//     "java168",
//     "java169",
//     "java170",
//     "java171",
//     "java172",
//     "java173",
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
//           .list(`java/${filePath}`, {
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
//                 .getPublicUrl(`java/${filePath}/${file.name}`).data.publicUrl
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
//             alt={`Java programming Images ${currentImageIndex + 1}`}
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
//   // List of file paths for Java images
//   const filePaths = Array.from({ length: 173 }, (_, i) => `java${i + 1}`);

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
//           .list(`java/${filePath}`, {
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
//                 .getPublicUrl(`java/${filePath}/${file.name}`).data.publicUrl
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
//             alt={`Java Programming Image ${currentImageIndex + 1}`}
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
  // List of file paths for Java images
  const filePaths = Array.from({ length: 173 }, (_, i) => `java${i + 1}`);

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
          .list(`java/${filePath}`, {
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
                .getPublicUrl(`java/${filePath}/${file.name}`).data.publicUrl
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
        const fileName = `java_${filePath}_image_${i + 1}.jpg`; // Customize the filename

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
            alt={`Java Programming Image ${currentImageIndex + 1}`}
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
