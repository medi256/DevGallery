// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import supabase from "@/supabaseConfig";

// const BashShell = () => {
//   return (
//     <div className="bash-shell-gallery-container">
// <Duplicate filePath={"py1"} />
// <Duplicate filePath={"py2"} />
// <Duplicate filePath={"py3"} />
// <Duplicate filePath={"py4"} />
// <Duplicate filePath={"py5"} />
// <Duplicate filePath={"py6"} />
// <Duplicate filePath={"py7"} />
// <Duplicate filePath={"py8"} />
// <Duplicate filePath={"py9"} />
// <Duplicate filePath={"py10"} />
// <Duplicate filePath={"py11"} />
// <Duplicate filePath={"py12"} />
// <Duplicate filePath={"py13"} />
// <Duplicate filePath={"py14"} />
// <Duplicate filePath={"py15"} />
// <Duplicate filePath={"py16"} />
// <Duplicate filePath={"py17"} />
// <Duplicate filePath={"py18"} />
// <Duplicate filePath={"py19"} />
// <Duplicate filePath={"py20"} />
// <Duplicate filePath={"py21"} />
// <Duplicate filePath={"py22"} />
// <Duplicate filePath={"py23"} />
// <Duplicate filePath={"py24"} />
// <Duplicate filePath={"py25"} />
// <Duplicate filePath={"py26"} />
// <Duplicate filePath={"py27"} />
// <Duplicate filePath={"py28"} />
// <Duplicate filePath={"py29"} />
// <Duplicate filePath={"py30"} />
// <Duplicate filePath={"py31"} />
// <Duplicate filePath={"py32"} />
// <Duplicate filePath={"py33"} />
// <Duplicate filePath={"py34"} />
// <Duplicate filePath={"py35"} />
// <Duplicate filePath={"py36"} />
// <Duplicate filePath={"py37"} />
// <Duplicate filePath={"py38"} />
// <Duplicate filePath={"py39"} />
// <Duplicate filePath={"py40"} />
// <Duplicate filePath={"py41"} />
// <Duplicate filePath={"py42"} />
// <Duplicate filePath={"py43"} />
// <Duplicate filePath={"py44"} />
// <Duplicate filePath={"py45"} />
// <Duplicate filePath={"py46"} />
// <Duplicate filePath={"py47"} />
// <Duplicate filePath={"py48"} />
// <Duplicate filePath={"py49"} />
// <Duplicate filePath={"py50"} />
// <Duplicate filePath={"py51"} />
// <Duplicate filePath={"py52"} />
// <Duplicate filePath={"py53"} />
// <Duplicate filePath={"py54"} />
// <Duplicate filePath={"py55"} />
// <Duplicate filePath={"py56"} />
// <Duplicate filePath={"py57"} />
// <Duplicate filePath={"py58"} />
// <Duplicate filePath={"py59"} />
// <Duplicate filePath={"py60"} />
// <Duplicate filePath={"py61"} />
// <Duplicate filePath={"py62"} />
// <Duplicate filePath={"py63"} />
// <Duplicate filePath={"py64"} />
// <Duplicate filePath={"py65"} />
// <Duplicate filePath={"py66"} />
// <Duplicate filePath={"py67"} />
// <Duplicate filePath={"py68"} />
// <Duplicate filePath={"py69"} />
// <Duplicate filePath={"py70"} />
// <Duplicate filePath={"py71"} />
// <Duplicate filePath={"py72"} />
// <Duplicate filePath={"py73"} />
// <Duplicate filePath={"py74"} />
// <Duplicate filePath={"py75"} />
// <Duplicate filePath={"py76"} />
// <Duplicate filePath={"py77"} />
// <Duplicate filePath={"py78"} />
// <Duplicate filePath={"py79"} />
// <Duplicate filePath={"py80"} />
// <Duplicate filePath={"py81"} />
// <Duplicate filePath={"py82"} />
// <Duplicate filePath={"py83"} />
// <Duplicate filePath={"py84"} />
// <Duplicate filePath={"py85"} />
// <Duplicate filePath={"py86"} />
// <Duplicate filePath={"py87"} />
// <Duplicate filePath={"py88"} />
// <Duplicate filePath={"py89"} />
// <Duplicate filePath={"py90"} />
// <Duplicate filePath={"py91"} />
// <Duplicate filePath={"py92"} />
// <Duplicate filePath={"py93"} />
// <Duplicate filePath={"py94"} />
// <Duplicate filePath={"py95"} />
// <Duplicate filePath={"py96"} />
// <Duplicate filePath={"py97"} />
// <Duplicate filePath={"py98"} />
// <Duplicate filePath={"py99"} />
// <Duplicate filePath={"py100"} />
// <Duplicate filePath={"py101"} />
// <Duplicate filePath={"py102"} />
// <Duplicate filePath={"py103"} />
// <Duplicate filePath={"py104"} />
// <Duplicate filePath={"py105"} />
// <Duplicate filePath={"py106"} />
// <Duplicate filePath={"py107"} />
// <Duplicate filePath={"py108"} />
// <Duplicate filePath={"py109"} />
// <Duplicate filePath={"py110"} />
// <Duplicate filePath={"py111"} />
// <Duplicate filePath={"py112"} />
// <Duplicate filePath={"py113"} />
// <Duplicate filePath={"py114"} />
// <Duplicate filePath={"py115"} />
// <Duplicate filePath={"py116"} />
// <Duplicate filePath={"py117"} />
// <Duplicate filePath={"py118"} />
// <Duplicate filePath={"py119"} />
// <Duplicate filePath={"py120"} />
// <Duplicate filePath={"py121"} />
// <Duplicate filePath={"py122"} />
// <Duplicate filePath={"py123"} />
// <Duplicate filePath={"py124"} />
// <Duplicate filePath={"py125"} />
// <Duplicate filePath={"py126"} />
// <Duplicate filePath={"py127"} />
// <Duplicate filePath={"py128"} />
// <Duplicate filePath={"py129"} />
// <Duplicate filePath={"py130"} />
// <Duplicate filePath={"py131"} />
// <Duplicate filePath={"py132"} />
// <Duplicate filePath={"py133"} />
// <Duplicate filePath={"py134"} />
// <Duplicate filePath={"py135"} />
// <Duplicate filePath={"py136"} />
// <Duplicate filePath={"py137"} />
// <Duplicate filePath={"py138"} />
// <Duplicate filePath={"py139"} />
// <Duplicate filePath={"py140"} />
// <Duplicate filePath={"py141"} />
// <Duplicate filePath={"py142"} />
// <Duplicate filePath={"py143"} />
// <Duplicate filePath={"py144"} />
// <Duplicate filePath={"py145"} />
// <Duplicate filePath={"py146"} />
// <Duplicate filePath={"py147"} />
// <Duplicate filePath={"py148"} />
// <Duplicate filePath={"py149"} />
// <Duplicate filePath={"py150"} />
// <Duplicate filePath={"py151"} />
// <Duplicate filePath={"py152"} />
// <Duplicate filePath={"py153"} />
// <Duplicate filePath={"py154"} />
// <Duplicate filePath={"py155"} />
// <Duplicate filePath={"py156"} />
// <Duplicate filePath={"py157"} />
// <Duplicate filePath={"py158"} />
// <Duplicate filePath={"py159"} />
// <Duplicate filePath={"py160"} />
// <Duplicate filePath={"py161"} />
// <Duplicate filePath={"py162"} />
// <Duplicate filePath={"py163"} />
// <Duplicate filePath={"py164"} />
// <Duplicate filePath={"py165"} />
// <Duplicate filePath={"py166"} />
// <Duplicate filePath={"py167"} />
// <Duplicate filePath={"py168"} />
// <Duplicate filePath={"py169"} />
// <Duplicate filePath={"py170"} />
// <Duplicate filePath={"py171"} />
// <Duplicate filePath={"py172"} />
// <Duplicate filePath={"py173"} />
// <Duplicate filePath={"py174"} />
// <Duplicate filePath={"py175"} />
// <Duplicate filePath={"py176"} />
// <Duplicate filePath={"py177"} />
// <Duplicate filePath={"py178"} />
// <Duplicate filePath={"py179"} />
// <Duplicate filePath={"py180"} />
// <Duplicate filePath={"py181"} />
// <Duplicate filePath={"py182"} />
// <Duplicate filePath={"py183"} />
// <Duplicate filePath={"py184"} />
// <Duplicate filePath={"py185"} />
// <Duplicate filePath={"py186"} />
// <Duplicate filePath={"py187"} />
// <Duplicate filePath={"py188"} />
// <Duplicate filePath={"py189"} />
// <Duplicate filePath={"py190"} />
// <Duplicate filePath={"py191"} />
// <Duplicate filePath={"py192"} />
// <Duplicate filePath={"py193"} />
// <Duplicate filePath={"py194"} />
// <Duplicate filePath={"py195"} />
// <Duplicate filePath={"py196"} />
// <Duplicate filePath={"py197"} />
// <Duplicate filePath={"py198"} />
// <Duplicate filePath={"py199"} />
// <Duplicate filePath={"py200"} />
// <Duplicate filePath={"py201"} />
// <Duplicate filePath={"py202"} />
// <Duplicate filePath={"py203"} />
// <Duplicate filePath={"py204"} />
// <Duplicate filePath={"py205"} />
// <Duplicate filePath={"py206"} />
// <Duplicate filePath={"py207"} />
// <Duplicate filePath={"py208"} />
// <Duplicate filePath={"py209"} />
// <Duplicate filePath={"py210"} />
// <Duplicate filePath={"py211"} />
// <Duplicate filePath={"py212"} />
// <Duplicate filePath={"py213"} />
// <Duplicate filePath={"py214"} />
// <Duplicate filePath={"py215"} />
// <Duplicate filePath={"py216"} />
// <Duplicate filePath={"py217"} />
// <Duplicate filePath={"py218"} />
// <Duplicate filePath={"py219"} />
// <Duplicate filePath={"py220"} />
// <Duplicate filePath={"py221"} />
// <Duplicate filePath={"py222"} />
// <Duplicate filePath={"py223"} />
// <Duplicate filePath={"py224"} />
// <Duplicate filePath={"py225"} />
// <Duplicate filePath={"py226"} />
// <Duplicate filePath={"py227"} />
// <Duplicate filePath={"py228"} />
// <Duplicate filePath={"py229"} />
// <Duplicate filePath={"py230"} />
// <Duplicate filePath={"py231"} />
// <Duplicate filePath={"py232"} />
// <Duplicate filePath={"py233"} />
// <Duplicate filePath={"py234"} />
// <Duplicate filePath={"py235"} />
// <Duplicate filePath={"py236"} />
// <Duplicate filePath={"py237"} />
// <Duplicate filePath={"py238"} />
// <Duplicate filePath={"py239"} />
// <Duplicate filePath={"py240"} />
// <Duplicate filePath={"py241"} />
// <Duplicate filePath={"py242"} />
// <Duplicate filePath={"py243"} />
// <Duplicate filePath={"py244"} />
// <Duplicate filePath={"py245"} />
// <Duplicate filePath={"py246"} />
// <Duplicate filePath={"py247"} />
// <Duplicate filePath={"py248"} />
// <Duplicate filePath={"py249"} />
// <Duplicate filePath={"py250"} />
// <Duplicate filePath={"py251"} />
// <Duplicate filePath={"py252"} />
// <Duplicate filePath={"py253"} />
// <Duplicate filePath={"py254"} />
// <Duplicate filePath={"py255"} />
// <Duplicate filePath={"py256"} />
// <Duplicate filePath={"py257"} />
// <Duplicate filePath={"py258"} />
// <Duplicate filePath={"py259"} />
// <Duplicate filePath={"py260"} />
// <Duplicate filePath={"py261"} />
// <Duplicate filePath={"py262"} />
// <Duplicate filePath={"py263"} />
// <Duplicate filePath={"py264"} />
// <Duplicate filePath={"py265"} />
// <Duplicate filePath={"py266"} />
// <Duplicate filePath={"py267"} />
// <Duplicate filePath={"py268"} />
// <Duplicate filePath={"py269"} />
// <Duplicate filePath={"py270"} />
// <Duplicate filePath={"py271"} />
// <Duplicate filePath={"py272"} />
// <Duplicate filePath={"py273"} />
// <Duplicate filePath={"py274"} />
// <Duplicate filePath={"py275"} />
// <Duplicate filePath={"py276"} />
// <Duplicate filePath={"py277"} />
// <Duplicate filePath={"py278"} />
// <Duplicate filePath={"py279"} />
// <Duplicate filePath={"py280"} />
// <Duplicate filePath={"py281"} />
// <Duplicate filePath={"py282"} />
// <Duplicate filePath={"py283"} />
// <Duplicate filePath={"py284"} />
// <Duplicate filePath={"py285"} />
// <Duplicate filePath={"py286"} />
// <Duplicate filePath={"py287"} />
// <Duplicate filePath={"py288"} />
// <Duplicate filePath={"py289"} />
// <Duplicate filePath={"py290"} />
// <Duplicate filePath={"py291"} />
// <Duplicate filePath={"py292"} />
// <Duplicate filePath={"py293"} />
// <Duplicate filePath={"py294"} />
// <Duplicate filePath={"py295"} />
// <Duplicate filePath={"py296"} />
// <Duplicate filePath={"py297"} />
// <Duplicate filePath={"py298"} />
// <Duplicate filePath={"py299"} />
// <Duplicate filePath={"py300"} />
// <Duplicate filePath={"py301"} />
// <Duplicate filePath={"py302"} />
// <Duplicate filePath={"py303"} />
// <Duplicate filePath={"py304"} />
// <Duplicate filePath={"py305"} />
// <Duplicate filePath={"py306"} />
// <Duplicate filePath={"py307"} />
// <Duplicate filePath={"py308"} />
// <Duplicate filePath={"py309"} />
// <Duplicate filePath={"py310"} />
// <Duplicate filePath={"py311"} />
// <Duplicate filePath={"py312"} />
// <Duplicate filePath={"py313"} />
// <Duplicate filePath={"py314"} />
// <Duplicate filePath={"py315"} />
// <Duplicate filePath={"py316"} />
// <Duplicate filePath={"py317"} />
// <Duplicate filePath={"py318"} />
// <Duplicate filePath={"py319"} />
// <Duplicate filePath={"py320"} />
// <Duplicate filePath={"py321"} />
// <Duplicate filePath={"py322"} />
// <Duplicate filePath={"py323"} />
// <Duplicate filePath={"py324"} />
// <Duplicate filePath={"py325"} />
// <Duplicate filePath={"py326"} />
// <Duplicate filePath={"py327"} />
// <Duplicate filePath={"py328"} />
// <Duplicate filePath={"py329"} />
// <Duplicate filePath={"py330"} />
// <Duplicate filePath={"py331"} />
// <Duplicate filePath={"py332"} />
// <Duplicate filePath={"py333"} />
// <Duplicate filePath={"py334"} />
// <Duplicate filePath={"py335"} />
// <Duplicate filePath={"py336"} />
// <Duplicate filePath={"py337"} />
// <Duplicate filePath={"py338"} />
// <Duplicate filePath={"py339"} />
// <Duplicate filePath={"py340"} />
// <Duplicate filePath={"py341"} />
// <Duplicate filePath={"py342"} />
// <Duplicate filePath={"py343"} />
// <Duplicate filePath={"py344"} />
// <Duplicate filePath={"py345"} />
// <Duplicate filePath={"py346"} />
// <Duplicate filePath={"py347"} />
// <Duplicate filePath={"py348"} />
// <Duplicate filePath={"py349"} />
// <Duplicate filePath={"py350"} />
// <Duplicate filePath={"py351"} />
// <Duplicate filePath={"py352"} />
// <Duplicate filePath={"py353"} />
// <Duplicate filePath={"py354"} />
// <Duplicate filePath={"py355"} />
// <Duplicate filePath={"py356"} />
// <Duplicate filePath={"py357"} />
// <Duplicate filePath={"py358"} />
// <Duplicate filePath={"py359"} />
// <Duplicate filePath={"py360"} />
// <Duplicate filePath={"py361"} />
// <Duplicate filePath={"py362"} />
// <Duplicate filePath={"py363"} />
// <Duplicate filePath={"py364"} />
// <Duplicate filePath={"py365"} />
// <Duplicate filePath={"py366"} />
// <Duplicate filePath={"py367"} />
// <Duplicate filePath={"py368"} />
// <Duplicate filePath={"py369"} />
// <Duplicate filePath={"py370"} />
// <Duplicate filePath={"py371"} />
// <Duplicate filePath={"py372"} />
// <Duplicate filePath={"py373"} />
// <Duplicate filePath={"py374"} />
// <Duplicate filePath={"py375"} />
// <Duplicate filePath={"py376"} />
// <Duplicate filePath={"py377"} />
// <Duplicate filePath={"py378"} />
// <Duplicate filePath={"py379"} />
// <Duplicate filePath={"py380"} />
// <Duplicate filePath={"py381"} />
// <Duplicate filePath={"py382"} />
// <Duplicate filePath={"py383"} />
// <Duplicate filePath={"py384"} />
// <Duplicate filePath={"py385"} />
// <Duplicate filePath={"py386"} />
// <Duplicate filePath={"py387"} />
// <Duplicate filePath={"py388"} />
// <Duplicate filePath={"py389"} />
// <Duplicate filePath={"py390"} />
// <Duplicate filePath={"py391"} />
// <Duplicate filePath={"py392"} />
// <Duplicate filePath={"py393"} />
// <Duplicate filePath={"py394"} />
// <Duplicate filePath={"py395"} />
// <Duplicate filePath={"py396"} />
// <Duplicate filePath={"py397"} />
// <Duplicate filePath={"py398"} />
// <Duplicate filePath={"py399"} />
// <Duplicate filePath={"py400"} />
// <Duplicate filePath={"py401"} />
// <Duplicate filePath={"py402"} />
// <Duplicate filePath={"py403"} />
// <Duplicate filePath={"py404"} />
// <Duplicate filePath={"py405"} />
// <Duplicate filePath={"py406"} />
// <Duplicate filePath={"py407"} />
// <Duplicate filePath={"py408"} />
// <Duplicate filePath={"py409"} />
// <Duplicate filePath={"py410"} />
// <Duplicate filePath={"py411"} />
// <Duplicate filePath={"py412"} />
// <Duplicate filePath={"py413"} />
// <Duplicate filePath={"py414"} />
// <Duplicate filePath={"py415"} />
// <Duplicate filePath={"py416"} />
// <Duplicate filePath={"py417"} />
// <Duplicate filePath={"py418"} />
// <Duplicate filePath={"py419"} />
// <Duplicate filePath={"py420"} />
// <Duplicate filePath={"py421"} />
// <Duplicate filePath={"py422"} />
// <Duplicate filePath={"py423"} />
// <Duplicate filePath={"py424"} />
// <Duplicate filePath={"py425"} />
// <Duplicate filePath={"py426"} />
// <Duplicate filePath={"py427"} />
// <Duplicate filePath={"py428"} />
// <Duplicate filePath={"py429"} />
// <Duplicate filePath={"py430"} />
// <Duplicate filePath={"py431"} />
// <Duplicate filePath={"py432"} />
// <Duplicate filePath={"py433"} />
// <Duplicate filePath={"py434"} />
// <Duplicate filePath={"py435"} />

// <Duplicate filePath={"py441"} />
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
//           .list(`python/${filePath}`, {
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
//                 .getPublicUrl(`python/${filePath}/${file.name}`).data.publicUrl
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
//             alt={`python programming  Images ${currentImageIndex + 1}`}
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

//               <div className="bash-shell-image-wrapper">
//                 <button
//                   className="bash-shell-nav-button bash-shell-nav-left"
//                   onClick={handlePreviousImage}
//                   aria-label="Previous Image"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="15 18 9 12 15 6"></polyline>
//                   </svg>
//                 </button>
//                 <button
//                   className="bash-shell-nav-button bash-shell-nav-right"
//                   onClick={handleNextImage}
//                   aria-label="Next Image"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="9 18 15 12 9 6"></polyline>
//                   </svg>
//                 </button>
//               </div>
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
//     "py1",
//     "py2",
//     "py3",
//     "py4",
//     "py5",
//     "py6",
//     "py7",
//     "py8",
//     "py9",
//     "py10",
//     "py11",
//     "py12",
//     "py13",
//     "py14",
//     "py15",
//     "py16",
//     "py17",
//     "py18",
//     "py19",
//     "py20",
//     "py21",
//     "py22",
//     "py23",
//     "py24",
//     "py25",
//     "py26",
//     "py27",
//     "py28",
//     "py29",
//     "py30",
//     "py31",
//     "py32",
//     "py33",
//     "py34",
//     "py35",
//     "py36",
//     "py37",
//     "py38",
//     "py39",
//     "py40",
//     "py41",
//     "py42",
//     "py43",
//     "py44",
//     "py45",
//     "py46",
//     "py47",
//     "py48",
//     "py49",
//     "py50",
//     "py51",
//     "py52",
//     "py53",
//     "py54",
//     "py55",
//     "py56",
//     "py57",
//     "py58",
//     "py59",
//     "py60",
//     "py61",
//     "py62",
//     "py63",
//     "py64",
//     "py65",
//     "py66",
//     "py67",
//     "py68",
//     "py69",
//     "py70",
//     "py71",
//     "py72",
//     "py73",
//     "py74",
//     "py75",
//     "py76",
//     "py77",
//     "py78",
//     "py79",
//     "py80",
//     "py81",
//     "py82",
//     "py83",
//     "py84",
//     "py85",
//     "py86",
//     "py87",
//     "py88",
//     "py89",
//     "py90",
//     "py91",
//     "py92",
//     "py93",
//     "py94",
//     "py95",
//     "py96",
//     "py97",
//     "py98",
//     "py99",
//     "py100",
//     "py101",
//     "py102",
//     "py103",
//     "py104",
//     "py105",
//     "py106",
//     "py107",
//     "py108",
//     "py109",
//     "py110",
//     "py111",
//     "py112",
//     "py113",
//     "py114",
//     "py115",
//     "py116",
//     "py117",
//     "py118",
//     "py119",
//     "py120",
//     "py121",
//     "py122",
//     "py123",
//     "py124",
//     "py125",
//     "py126",
//     "py127",
//     "py128",
//     "py129",
//     "py130",
//     "py131",
//     "py132",
//     "py133",
//     "py134",
//     "py135",
//     "py136",
//     "py137",
//     "py138",
//     "py139",
//     "py140",
//     "py141",
//     "py142",
//     "py143",
//     "py144",
//     "py145",
//     "py146",
//     "py147",
//     "py148",
//     "py149",
//     "py150",
//     "py151",
//     "py152",
//     "py153",
//     "py154",
//     "py155",
//     "py156",
//     "py157",
//     "py158",
//     "py159",
//     "py160",
//     "py161",
//     "py162",
//     "py163",
//     "py164",
//     "py165",
//     "py166",
//     "py167",
//     "py168",
//     "py169",
//     "py170",
//     "py171",
//     "py172",
//     "py173",
//     "py174",
//     "py175",
//     "py176",
//     "py177",
//     "py178",
//     "py179",
//     "py180",
//     "py181",
//     "py182",
//     "py183",
//     "py184",
//     "py185",
//     "py186",
//     "py187",
//     "py188",
//     "py189",
//     "py190",
//     "py191",
//     "py192",
//     "py193",
//     "py194",
//     "py195",
//     "py196",
//     "py197",
//     "py198",
//     "py199",
//     "py200",
//     "py201",
//     "py202",
//     "py203",
//     "py204",
//     "py205",
//     "py206",
//     "py207",
//     "py208",
//     "py209",
//     "py210",
//     "py211",
//     "py212",
//     "py213",
//     "py214",
//     "py215",
//     "py216",
//     "py217",
//     "py218",
//     "py219",
//     "py220",
//     "py221",
//     "py222",
//     "py223",
//     "py224",
//     "py225",
//     "py226",
//     "py227",
//     "py228",
//     "py229",
//     "py230",
//     "py231",
//     "py232",
//     "py233",
//     "py234",
//     "py235",
//     "py236",
//     "py237",
//     "py238",
//     "py239",
//     "py240",
//     "py241",
//     "py242",
//     "py243",
//     "py244",
//     "py245",
//     "py246",
//     "py247",
//     "py248",
//     "py249",
//     "py250",
//     "py251",
//     "py252",
//     "py253",
//     "py254",
//     "py255",
//     "py256",
//     "py257",
//     "py258",
//     "py259",
//     "py260",
//     "py261",
//     "py262",
//     "py263",
//     "py264",
//     "py265",
//     "py266",
//     "py267",
//     "py268",
//     "py269",
//     "py270",
//     "py271",
//     "py272",
//     "py273",
//     "py274",
//     "py275",
//     "py276",
//     "py277",
//     "py278",
//     "py279",
//     "py280",
//     "py281",
//     "py282",
//     "py283",
//     "py284",
//     "py285",
//     "py286",
//     "py287",
//     "py288",
//     "py289",
//     "py290",
//     "py291",
//     "py292",
//     "py293",
//     "py294",
//     "py295",
//     "py296",
//     "py297",
//     "py298",
//     "py299",
//     "py300",
//     "py301",
//     "py302",
//     "py303",
//     "py304",
//     "py305",
//     "py306",
//     "py307",
//     "py308",
//     "py309",
//     "py310",
//     "py311",
//     "py312",
//     "py313",
//     "py314",
//     "py315",
//     "py316",
//     "py317",
//     "py318",
//     "py319",
//     "py320",
//     "py321",
//     "py322",
//     "py323",
//     "py324",
//     "py325",
//     "py326",
//     "py327",
//     "py328",
//     "py329",
//     "py330",
//     "py331",
//     "py332",
//     "py333",
//     "py334",
//     "py335",
//     "py336",
//     "py337",
//     "py338",
//     "py339",
//     "py340",
//     "py341",
//     "py342",
//     "py343",
//     "py344",
//     "py345",
//     "py346",
//     "py347",
//     "py348",
//     "py349",
//     "py350",
//     "py351",
//     "py352",
//     "py353",
//     "py354",
//     "py355",
//     "py356",
//     "py357",
//     "py358",
//     "py359",
//     "py360",
//     "py361",
//     "py362",
//     "py363",
//     "py364",
//     "py365",
//     "py366",
//     "py367",
//     "py368",
//     "py369",
//     "py370",
//     "py371",
//     "py372",
//     "py373",
//     "py374",
//     "py375",
//     "py376",
//     "py377",
//     "py378",
//     "py379",
//     "py380",
//     "py381",
//     "py382",
//     "py383",
//     "py384",
//     "py385",
//     "py386",
//     "py387",
//     "py388",
//     "py389",
//     "py390",
//     "py391",
//     "py392",
//     "py393",
//     "py394",
//     "py395",
//     "py396",
//     "py397",
//     "py398",
//     "py399",
//     "py400",
//     "py401",
//     "py402",
//     "py403",
//     "py404",
//     "py405",
//     "py406",
//     "py407",
//     "py408",
//     "py409",
//     "py410",
//     "py411",
//     "py412",
//     "py413",
//     "py414",
//     "py415",
//     "py416",
//     "py417",
//     "py418",
//     "py419",
//     "py420",
//     "py421",
//     "py422",
//     "py423",
//     "py424",
//     "py425",
//     "py426",
//     "py427",
//     "py428",
//     "py429",
//     "py430",
//     "py431",
//     "py432",
//     "py433",
//     "py434",
//     "py435",
//     "py441",
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
//           .list(`python/${filePath}`, {
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
//                 .getPublicUrl(`python/${filePath}/${file.name}`).data.publicUrl
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
//             alt={`Python programming Images ${currentImageIndex + 1}`}
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
//   // List of file paths for Python images
//   const filePaths = Array.from({ length: 441 }, (_, i) => `py${i + 1}`);

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
//           .list(`python/${filePath}`, {
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
//                 .getPublicUrl(`python/${filePath}/${file.name}`).data.publicUrl
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
//             alt={`Python Programming Image ${currentImageIndex + 1}`}
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

"use client"; // Ensure this is at the top for Next.js
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import supabase from "@/supabaseConfig";

// Your existing Duplicate component
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
          .list(`python/${filePath}`, {
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
                .getPublicUrl(`python/${filePath}/${file.name}`).data.publicUrl
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
        const fileName = `python_${filePath}_image_${i + 1}.jpg`; // Customize the filename

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
            alt={`Python Programming Image ${currentImageIndex + 1}`}
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

// Default export for the page
export default function PythonPage() {
  // List of file paths for Python images
  const filePaths = Array.from({ length: 441 }, (_, i) => `py${i + 1}`);

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
}
