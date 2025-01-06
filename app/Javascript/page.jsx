// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import supabase from "@/supabaseConfig";

// const BashShell = () => {
//   return (
//     <div className="bash-shell-gallery-container">
// <Duplicate filePath={"js1"} />
// <Duplicate filePath={"js2"} />
// <Duplicate filePath={"js3"} />
// <Duplicate filePath={"js4"} />
// <Duplicate filePath={"js5"} />
// <Duplicate filePath={"js6"} />
// <Duplicate filePath={"js7"} />
// <Duplicate filePath={"js8"} />
// <Duplicate filePath={"js9"} />
// <Duplicate filePath={"js10"} />
// <Duplicate filePath={"js11"} />
// <Duplicate filePath={"js12"} />
// <Duplicate filePath={"js13"} />
// <Duplicate filePath={"js14"} />
// <Duplicate filePath={"js15"} />
// <Duplicate filePath={"js16"} />
// <Duplicate filePath={"js17"} />
// <Duplicate filePath={"js18"} />
// <Duplicate filePath={"js19"} />
// <Duplicate filePath={"js20"} />
// <Duplicate filePath={"js21"} />
// <Duplicate filePath={"js22"} />
// <Duplicate filePath={"js23"} />
// <Duplicate filePath={"js24"} />
// <Duplicate filePath={"js25"} />
// <Duplicate filePath={"js26"} />
// <Duplicate filePath={"js27"} />
// <Duplicate filePath={"js28"} />
// <Duplicate filePath={"js29"} />
// <Duplicate filePath={"js30"} />
// <Duplicate filePath={"js31"} />
// <Duplicate filePath={"js32"} />
// <Duplicate filePath={"js33"} />
// <Duplicate filePath={"js34"} />
// <Duplicate filePath={"js35"} />
// <Duplicate filePath={"js36"} />
// <Duplicate filePath={"js37"} />
// <Duplicate filePath={"js38"} />
// <Duplicate filePath={"js39"} />
// <Duplicate filePath={"js40"} />
// <Duplicate filePath={"js41"} />
// <Duplicate filePath={"js42"} />
// <Duplicate filePath={"js43"} />
// <Duplicate filePath={"js44"} />
// <Duplicate filePath={"js45"} />
// <Duplicate filePath={"js46"} />
// <Duplicate filePath={"js47"} />
// <Duplicate filePath={"js48"} />
// <Duplicate filePath={"js49"} />
// <Duplicate filePath={"js50"} />
// <Duplicate filePath={"js51"} />
// <Duplicate filePath={"js52"} />
// <Duplicate filePath={"js53"} />
// <Duplicate filePath={"js54"} />
// <Duplicate filePath={"js55"} />
// <Duplicate filePath={"js56"} />
// <Duplicate filePath={"js57"} />
// <Duplicate filePath={"js58"} />
// <Duplicate filePath={"js59"} />
// <Duplicate filePath={"js60"} />
// <Duplicate filePath={"js61"} />
// <Duplicate filePath={"js62"} />
// <Duplicate filePath={"js63"} />
// <Duplicate filePath={"js64"} />
// <Duplicate filePath={"js65"} />
// <Duplicate filePath={"js66"} />
// <Duplicate filePath={"js67"} />
// <Duplicate filePath={"js68"} />
// <Duplicate filePath={"js69"} />
// <Duplicate filePath={"js70"} />
// <Duplicate filePath={"js71"} />
// <Duplicate filePath={"js72"} />
// <Duplicate filePath={"js73"} />
// <Duplicate filePath={"js74"} />
// <Duplicate filePath={"js75"} />
// <Duplicate filePath={"js76"} />
// <Duplicate filePath={"js77"} />
// <Duplicate filePath={"js78"} />
// <Duplicate filePath={"js79"} />
// <Duplicate filePath={"js80"} />
// <Duplicate filePath={"js81"} />
// <Duplicate filePath={"js82"} />
// <Duplicate filePath={"js83"} />
// <Duplicate filePath={"js84"} />
// <Duplicate filePath={"js85"} />
// <Duplicate filePath={"js86"} />
// <Duplicate filePath={"js87"} />
// <Duplicate filePath={"js88"} />
// <Duplicate filePath={"js90"} />
// <Duplicate filePath={"js91"} />
// <Duplicate filePath={"js92"} />
// <Duplicate filePath={"js93"} />
// <Duplicate filePath={"js94"} />
// <Duplicate filePath={"js95"} />
// <Duplicate filePath={"js96"} />
// <Duplicate filePath={"js97"} />
// <Duplicate filePath={"js98"} />
// <Duplicate filePath={"js99"} />
// <Duplicate filePath={"js100"} />
// <Duplicate filePath={"js101"} />
// <Duplicate filePath={"js102"} />
// <Duplicate filePath={"js103"} />
// <Duplicate filePath={"js104"} />
// <Duplicate filePath={"js105"} />
// <Duplicate filePath={"js106"} />
// <Duplicate filePath={"js107"} />
// <Duplicate filePath={"js108"} />
// <Duplicate filePath={"js109"} />
// <Duplicate filePath={"js110"} />
// <Duplicate filePath={"js111"} />
// <Duplicate filePath={"js112"} />
// <Duplicate filePath={"js113"} />
// <Duplicate filePath={"js114"} />
// <Duplicate filePath={"js115"} />
// <Duplicate filePath={"js116"} />
// <Duplicate filePath={"js117"} />
// <Duplicate filePath={"js118"} />
// <Duplicate filePath={"js119"} />
// <Duplicate filePath={"js120"} />
// <Duplicate filePath={"js121"} />
// <Duplicate filePath={"js122"} />
// <Duplicate filePath={"js123"} />
// <Duplicate filePath={"js124"} />
// <Duplicate filePath={"js125"} />
// <Duplicate filePath={"js126"} />
// <Duplicate filePath={"js127"} />
// <Duplicate filePath={"js128"} />
// <Duplicate filePath={"js129"} />
// <Duplicate filePath={"js130"} />
// <Duplicate filePath={"js131"} />
// <Duplicate filePath={"js132"} />
// <Duplicate filePath={"js133"} />
// <Duplicate filePath={"js134"} />
// <Duplicate filePath={"js135"} />
// <Duplicate filePath={"js136"} />
// <Duplicate filePath={"js137"} />
// <Duplicate filePath={"js138"} />
// <Duplicate filePath={"js139"} />
// <Duplicate filePath={"js140"} />
// <Duplicate filePath={"js141"} />
// <Duplicate filePath={"js142"} />
// <Duplicate filePath={"js143"} />
// <Duplicate filePath={"js144"} />
// <Duplicate filePath={"js145"} />
// <Duplicate filePath={"js146"} />
// <Duplicate filePath={"js147"} />
// <Duplicate filePath={"js148"} />
// <Duplicate filePath={"js149"} />
// <Duplicate filePath={"js150"} />
// <Duplicate filePath={"js151"} />
// <Duplicate filePath={"js152"} />
// <Duplicate filePath={"js153"} />
// <Duplicate filePath={"js154"} />
// <Duplicate filePath={"js155"} />
// <Duplicate filePath={"js156"} />
// <Duplicate filePath={"js157"} />
// <Duplicate filePath={"js158"} />
// <Duplicate filePath={"js159"} />
// <Duplicate filePath={"js160"} />
// <Duplicate filePath={"js161"} />
// <Duplicate filePath={"js162"} />
// <Duplicate filePath={"js163"} />
// <Duplicate filePath={"js164"} />
// <Duplicate filePath={"js165"} />
// <Duplicate filePath={"js166"} />
// <Duplicate filePath={"js167"} />
// <Duplicate filePath={"js168"} />
// <Duplicate filePath={"js169"} />
// <Duplicate filePath={"js170"} />
// <Duplicate filePath={"js171"} />
// <Duplicate filePath={"js172"} />
// <Duplicate filePath={"js173"} />
// <Duplicate filePath={"js174"} />
// <Duplicate filePath={"js175"} />
// <Duplicate filePath={"js176"} />
// <Duplicate filePath={"js177"} />
// <Duplicate filePath={"js178"} />
// <Duplicate filePath={"js179"} />
// <Duplicate filePath={"js180"} />
// <Duplicate filePath={"js181"} />
// <Duplicate filePath={"js182"} />
// <Duplicate filePath={"js183"} />
// <Duplicate filePath={"js184"} />
// <Duplicate filePath={"js185"} />
// <Duplicate filePath={"js186"} />
// <Duplicate filePath={"js187"} />
// <Duplicate filePath={"js188"} />
// <Duplicate filePath={"js189"} />
// <Duplicate filePath={"js190"} />
// <Duplicate filePath={"js191"} />
// <Duplicate filePath={"js192"} />
// <Duplicate filePath={"js193"} />
// <Duplicate filePath={"js194"} />
// <Duplicate filePath={"js195"} />
// <Duplicate filePath={"js196"} />
// <Duplicate filePath={"js197"} />
// <Duplicate filePath={"js198"} />
// <Duplicate filePath={"js199"} />
// <Duplicate filePath={"js200"} />
// <Duplicate filePath={"js201"} />
// <Duplicate filePath={"js202"} />
// <Duplicate filePath={"js203"} />
// <Duplicate filePath={"js204"} />
// <Duplicate filePath={"js205"} />
// <Duplicate filePath={"js206"} />
// <Duplicate filePath={"js207"} />
// <Duplicate filePath={"js208"} />
// <Duplicate filePath={"js209"} />
// <Duplicate filePath={"js210"} />
// <Duplicate filePath={"js211"} />
// <Duplicate filePath={"js212"} />
// <Duplicate filePath={"js213"} />
// <Duplicate filePath={"js214"} />
// <Duplicate filePath={"js215"} />
// <Duplicate filePath={"js216"} />
// <Duplicate filePath={"js217"} />
// <Duplicate filePath={"js218"} />
// <Duplicate filePath={"js219"} />
// <Duplicate filePath={"js220"} />
// <Duplicate filePath={"js221"} />
// <Duplicate filePath={"js222"} />
// <Duplicate filePath={"js223"} />
// <Duplicate filePath={"js224"} />
// <Duplicate filePath={"js225"} />
// <Duplicate filePath={"js226"} />
// <Duplicate filePath={"js227"} />
// <Duplicate filePath={"js228"} />
// <Duplicate filePath={"js229"} />
// <Duplicate filePath={"js230"} />
// <Duplicate filePath={"js231"} />
// <Duplicate filePath={"js232"} />
// <Duplicate filePath={"js233"} />
// <Duplicate filePath={"js234"} />
// <Duplicate filePath={"js235"} />
// <Duplicate filePath={"js236"} />
// <Duplicate filePath={"js237"} />
// <Duplicate filePath={"js238"} />
// <Duplicate filePath={"js239"} />
// <Duplicate filePath={"js240"} />
// <Duplicate filePath={"js241"} />
// <Duplicate filePath={"js242"} />
// <Duplicate filePath={"js243"} />
// <Duplicate filePath={"js244"} />
// <Duplicate filePath={"js245"} />
// <Duplicate filePath={"js246"} />
// <Duplicate filePath={"js247"} />
// <Duplicate filePath={"js248"} />
// <Duplicate filePath={"js249"} />
// <Duplicate filePath={"js250"} />
// <Duplicate filePath={"js251"} />
// <Duplicate filePath={"js252"} />
// <Duplicate filePath={"js253"} />
// <Duplicate filePath={"js254"} />
// <Duplicate filePath={"js255"} />
// <Duplicate filePath={"js256"} />
// <Duplicate filePath={"js257"} />
// <Duplicate filePath={"js258"} />
// <Duplicate filePath={"js259"} />
// <Duplicate filePath={"js260"} />
// <Duplicate filePath={"js261"} />
// <Duplicate filePath={"js262"} />
// <Duplicate filePath={"js263"} />
// <Duplicate filePath={"js264"} />
// <Duplicate filePath={"js265"} />
// <Duplicate filePath={"js266"} />
// <Duplicate filePath={"js267"} />
// <Duplicate filePath={"js268"} />
// <Duplicate filePath={"js269"} />
// <Duplicate filePath={"js270"} />
// <Duplicate filePath={"js271"} />
// <Duplicate filePath={"js272"} />
// <Duplicate filePath={"js273"} />
// <Duplicate filePath={"js274"} />
// <Duplicate filePath={"js275"} />
// <Duplicate filePath={"js276"} />
// <Duplicate filePath={"js277"} />
// <Duplicate filePath={"js278"} />
// <Duplicate filePath={"js279"} />
// <Duplicate filePath={"js280"} />
// <Duplicate filePath={"js281"} />
// <Duplicate filePath={"js282"} />
// <Duplicate filePath={"js283"} />
// <Duplicate filePath={"js284"} />
// <Duplicate filePath={"js285"} />
// <Duplicate filePath={"js286"} />
// <Duplicate filePath={"js287"} />
// <Duplicate filePath={"js288"} />
// <Duplicate filePath={"js289"} />
// <Duplicate filePath={"js290"} />
// <Duplicate filePath={"js291"} />
// <Duplicate filePath={"js292"} />
// <Duplicate filePath={"js293"} />
// <Duplicate filePath={"js294"} />
// <Duplicate filePath={"js295"} />
// <Duplicate filePath={"js296"} />
// <Duplicate filePath={"js297"} />
// <Duplicate filePath={"js298"} />
// <Duplicate filePath={"js299"} />
// <Duplicate filePath={"js300"} />
// <Duplicate filePath={"js301"} />
// <Duplicate filePath={"js302"} />
// <Duplicate filePath={"js303"} />
// <Duplicate filePath={"js304"} />
// <Duplicate filePath={"js305"} />
// <Duplicate filePath={"js306"} />
// <Duplicate filePath={"js307"} />
// <Duplicate filePath={"js308"} />
// <Duplicate filePath={"js309"} />
// <Duplicate filePath={"js310"} />
// <Duplicate filePath={"js311"} />
// <Duplicate filePath={"js312"} />
// <Duplicate filePath={"js313"} />
// <Duplicate filePath={"js314"} />
// <Duplicate filePath={"js315"} />
// <Duplicate filePath={"js316"} />
// <Duplicate filePath={"js317"} />
// <Duplicate filePath={"js318"} />
// <Duplicate filePath={"js319"} />
// <Duplicate filePath={"js320"} />
// <Duplicate filePath={"js321"} />
// <Duplicate filePath={"js322"} />
// <Duplicate filePath={"js323"} />
// <Duplicate filePath={"js324"} />
// <Duplicate filePath={"js325"} />
// <Duplicate filePath={"js326"} />
// <Duplicate filePath={"js327"} />
// <Duplicate filePath={"js328"} />
// <Duplicate filePath={"js329"} />
// <Duplicate filePath={"js330"} />
// <Duplicate filePath={"js331"} />
// <Duplicate filePath={"js332"} />
// <Duplicate filePath={"js333"} />
// <Duplicate filePath={"js334"} />
// <Duplicate filePath={"js335"} />
// <Duplicate filePath={"js336"} />
// <Duplicate filePath={"js337"} />
// <Duplicate filePath={"js338"} />
// <Duplicate filePath={"js339"} />
// <Duplicate filePath={"js340"} />
// <Duplicate filePath={"js341"} />
// <Duplicate filePath={"js342"} />
// <Duplicate filePath={"js343"} />
// <Duplicate filePath={"js344"} />
// <Duplicate filePath={"js345"} />
// <Duplicate filePath={"js346"} />
// <Duplicate filePath={"js347"} />
// <Duplicate filePath={"js348"} />
// <Duplicate filePath={"js349"} />
// <Duplicate filePath={"js350"} />
// <Duplicate filePath={"js351"} />
// <Duplicate filePath={"js352"} />
// <Duplicate filePath={"js353"} />
// <Duplicate filePath={"js354"} />
// <Duplicate filePath={"js355"} />
// <Duplicate filePath={"js356"} />
// <Duplicate filePath={"js357"} />
// <Duplicate filePath={"js358"} />
// <Duplicate filePath={"js359"} />
// <Duplicate filePath={"js360"} />
// <Duplicate filePath={"js361"} />
// <Duplicate filePath={"js362"} />
// <Duplicate filePath={"js363"} />
// <Duplicate filePath={"js364"} />
// <Duplicate filePath={"js365"} />
// <Duplicate filePath={"js366"} />
// <Duplicate filePath={"js367"} />
// <Duplicate filePath={"js368"} />
// <Duplicate filePath={"js369"} />
// <Duplicate filePath={"js370"} />
// <Duplicate filePath={"js371"} />
// <Duplicate filePath={"js372"} />
// <Duplicate filePath={"js373"} />
// <Duplicate filePath={"js374"} />
// <Duplicate filePath={"js375"} />
// <Duplicate filePath={"js376"} />
// <Duplicate filePath={"js377"} />
// <Duplicate filePath={"js378"} />
// <Duplicate filePath={"js379"} />
// <Duplicate filePath={"js380"} />
// <Duplicate filePath={"js381"} />
// <Duplicate filePath={"js382"} />
// <Duplicate filePath={"js383"} />
// <Duplicate filePath={"js384"} />
// <Duplicate filePath={"js385"} />
// <Duplicate filePath={"js386"} />
// <Duplicate filePath={"js387"} />
// <Duplicate filePath={"js388"} />
// <Duplicate filePath={"js389"} />
// <Duplicate filePath={"js390"} />
// <Duplicate filePath={"js391"} />
// <Duplicate filePath={"js392"} />
// <Duplicate filePath={"js393"} />
// <Duplicate filePath={"js394"} />
// <Duplicate filePath={"js395"} />
// <Duplicate filePath={"js396"} />
// <Duplicate filePath={"js397"} />
// <Duplicate filePath={"js398"} />
// <Duplicate filePath={"js399"} />
// <Duplicate filePath={"js400"} />
// <Duplicate filePath={"js401"} />
// <Duplicate filePath={"js402"} />
// <Duplicate filePath={"js403"} />
// <Duplicate filePath={"js404"} />
// <Duplicate filePath={"js405"} />
// <Duplicate filePath={"js406"} />
// <Duplicate filePath={"js407"} />
// <Duplicate filePath={"js408"} />
// <Duplicate filePath={"js409"} />
// <Duplicate filePath={"js410"} />
// <Duplicate filePath={"js411"} />
// <Duplicate filePath={"js412"} />
// <Duplicate filePath={"js413"} />
// <Duplicate filePath={"js414"} />
// <Duplicate filePath={"js415"} />
// <Duplicate filePath={"js416"} />
// <Duplicate filePath={"js417"} />
// <Duplicate filePath={"js418"} />
// <Duplicate filePath={"js419"} />
// <Duplicate filePath={"js419"} />
// <Duplicate filePath={"js421"} />
// <Duplicate filePath={"js422"} />
// <Duplicate filePath={"js423"} />
// <Duplicate filePath={"js424"} />
// <Duplicate filePath={"js425"} />
// <Duplicate filePath={"js426"} />
// <Duplicate filePath={"js427"} />
// <Duplicate filePath={"js428"} />
// <Duplicate filePath={"js429"} />
// <Duplicate filePath={"js430"} />
// <Duplicate filePath={"js431"} />
// <Duplicate filePath={"js432"} />
// <Duplicate filePath={"js433"} />
// <Duplicate filePath={"js434"} />
// <Duplicate filePath={"js435"} />
// <Duplicate filePath={"js436"} />
// <Duplicate filePath={"js437"} />
// <Duplicate filePath={"js438"} />
// <Duplicate filePath={"js439"} />
// <Duplicate filePath={"js440"} />
// <Duplicate filePath={"js441"} />
// <Duplicate filePath={"js442"} />
// <Duplicate filePath={"js443"} />
// <Duplicate filePath={"js444"} />
// <Duplicate filePath={"js445"} />
// <Duplicate filePath={"js446"} />
// <Duplicate filePath={"js447"} />
// <Duplicate filePath={"js448"} />
// <Duplicate filePath={"js449"} />
// <Duplicate filePath={"js450"} />
// <Duplicate filePath={"js451"} />
// <Duplicate filePath={"js452"} />
// <Duplicate filePath={"js453"} />
// <Duplicate filePath={"js454"} />
// <Duplicate filePath={"js455"} />
// <Duplicate filePath={"js456"} />
// <Duplicate filePath={"js457"} />
// <Duplicate filePath={"js458"} />
// <Duplicate filePath={"js459"} />
// <Duplicate filePath={"js460"} />
// <Duplicate filePath={"js461"} />
// <Duplicate filePath={"js462"} />
// <Duplicate filePath={"js463"} />
// <Duplicate filePath={"js464"} />
// <Duplicate filePath={"js465"} />
// <Duplicate filePath={"js466"} />
// <Duplicate filePath={"js467"} />
// <Duplicate filePath={"js468"} />
// <Duplicate filePath={"js469"} />
// <Duplicate filePath={"js470"} />
// <Duplicate filePath={"js471"} />
// <Duplicate filePath={"js472"} />
// <Duplicate filePath={"js473"} />
// <Duplicate filePath={"js474"} />
// <Duplicate filePath={"js475"} />
// <Duplicate filePath={"js476"} />
// <Duplicate filePath={"js477"} />
// <Duplicate filePath={"js478"} />
// <Duplicate filePath={"js479"} />
// <Duplicate filePath={"js480"} />
// <Duplicate filePath={"js481"} />
// <Duplicate filePath={"js482"} />
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
//           .list(`javascript/${filePath}`, {
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
//                 .getPublicUrl(`javascript/${filePath}/${file.name}`).data
//                 .publicUrl
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
//             alt={`Javascript programming  Images ${currentImageIndex + 1}`}
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
//     "js1",
//     "js2",
//     "js3",
//     "js4",
//     "js5",
//     "js6",
//     "js7",
//     "js8",
//     "js9",
//     "js10",
//     "js11",
//     "js12",
//     "js13",
//     "js14",
//     "js15",
//     "js16",
//     "js17",
//     "js18",
//     "js19",
//     "js20",
//     "js21",
//     "js22",
//     "js23",
//     "js24",
//     "js25",
//     "js26",
//     "js27",
//     "js28",
//     "js29",
//     "js30",
//     "js31",
//     "js32",
//     "js33",
//     "js34",
//     "js35",
//     "js36",
//     "js37",
//     "js38",
//     "js39",
//     "js40",
//     "js41",
//     "js42",
//     "js43",
//     "js44",
//     "js45",
//     "js46",
//     "js47",
//     "js48",
//     "js49",
//     "js50",
//     "js51",
//     "js52",
//     "js53",
//     "js54",
//     "js55",
//     "js56",
//     "js57",
//     "js58",
//     "js59",
//     "js60",
//     "js61",
//     "js62",
//     "js63",
//     "js64",
//     "js65",
//     "js66",
//     "js67",
//     "js68",
//     "js69",
//     "js70",
//     "js71",
//     "js72",
//     "js73",
//     "js74",
//     "js75",
//     "js76",
//     "js77",
//     "js78",
//     "js79",
//     "js80",
//     "js81",
//     "js82",
//     "js83",
//     "js84",
//     "js85",
//     "js86",
//     "js87",
//     "js88",
//     "js90",
//     "js91",
//     "js92",
//     "js93",
//     "js94",
//     "js95",
//     "js96",
//     "js97",
//     "js98",
//     "js99",
//     "js100",
//     "js101",
//     "js102",
//     "js103",
//     "js104",
//     "js105",
//     "js106",
//     "js107",
//     "js108",
//     "js109",
//     "js110",
//     "js111",
//     "js112",
//     "js113",
//     "js114",
//     "js115",
//     "js116",
//     "js117",
//     "js118",
//     "js119",
//     "js120",
//     "js121",
//     "js122",
//     "js123",
//     "js124",
//     "js125",
//     "js126",
//     "js127",
//     "js128",
//     "js129",
//     "js130",
//     "js131",
//     "js132",
//     "js133",
//     "js134",
//     "js135",
//     "js136",
//     "js137",
//     "js138",
//     "js139",
//     "js140",
//     "js141",
//     "js142",
//     "js143",
//     "js144",
//     "js145",
//     "js146",
//     "js147",
//     "js148",
//     "js149",
//     "js150",
//     "js151",
//     "js152",
//     "js153",
//     "js154",
//     "js155",
//     "js156",
//     "js157",
//     "js158",
//     "js159",
//     "js160",
//     "js161",
//     "js162",
//     "js163",
//     "js164",
//     "js165",
//     "js166",
//     "js167",
//     "js168",
//     "js169",
//     "js170",
//     "js171",
//     "js172",
//     "js173",
//     "js174",
//     "js175",
//     "js176",
//     "js177",
//     "js178",
//     "js179",
//     "js180",
//     "js181",
//     "js182",
//     "js183",
//     "js184",
//     "js185",
//     "js186",
//     "js187",
//     "js188",
//     "js189",
//     "js190",
//     "js191",
//     "js192",
//     "js193",
//     "js194",
//     "js195",
//     "js196",
//     "js197",
//     "js198",
//     "js199",
//     "js200",
//     "js201",
//     "js202",
//     "js203",
//     "js204",
//     "js205",
//     "js206",
//     "js207",
//     "js208",
//     "js209",
//     "js210",
//     "js211",
//     "js212",
//     "js213",
//     "js214",
//     "js215",
//     "js216",
//     "js217",
//     "js218",
//     "js219",
//     "js220",
//     "js221",
//     "js222",
//     "js223",
//     "js224",
//     "js225",
//     "js226",
//     "js227",
//     "js228",
//     "js229",
//     "js230",
//     "js231",
//     "js232",
//     "js233",
//     "js234",
//     "js235",
//     "js236",
//     "js237",
//     "js238",
//     "js239",
//     "js240",
//     "js241",
//     "js242",
//     "js243",
//     "js244",
//     "js245",
//     "js246",
//     "js247",
//     "js248",
//     "js249",
//     "js250",
//     "js251",
//     "js252",
//     "js253",
//     "js254",
//     "js255",
//     "js256",
//     "js257",
//     "js258",
//     "js259",
//     "js260",
//     "js261",
//     "js262",
//     "js263",
//     "js264",
//     "js265",
//     "js266",
//     "js267",
//     "js268",
//     "js269",
//     "js270",
//     "js271",
//     "js272",
//     "js273",
//     "js274",
//     "js275",
//     "js276",
//     "js277",
//     "js278",
//     "js279",
//     "js280",
//     "js281",
//     "js282",
//     "js283",
//     "js284",
//     "js285",
//     "js286",
//     "js287",
//     "js288",
//     "js289",
//     "js290",
//     "js291",
//     "js292",
//     "js293",
//     "js294",
//     "js295",
//     "js296",
//     "js297",
//     "js298",
//     "js299",
//     "js300",
//     "js301",
//     "js302",
//     "js303",
//     "js304",
//     "js305",
//     "js306",
//     "js307",
//     "js308",
//     "js309",
//     "js310",
//     "js311",
//     "js312",
//     "js313",
//     "js314",
//     "js315",
//     "js316",
//     "js317",
//     "js318",
//     "js319",
//     "js320",
//     "js321",
//     "js322",
//     "js323",
//     "js324",
//     "js325",
//     "js326",
//     "js327",
//     "js328",
//     "js329",
//     "js330",
//     "js331",
//     "js332",
//     "js333",
//     "js334",
//     "js335",
//     "js336",
//     "js337",
//     "js338",
//     "js339",
//     "js340",
//     "js341",
//     "js342",
//     "js343",
//     "js344",
//     "js345",
//     "js346",
//     "js347",
//     "js348",
//     "js349",
//     "js350",
//     "js351",
//     "js352",
//     "js353",
//     "js354",
//     "js355",
//     "js356",
//     "js357",
//     "js358",
//     "js359",
//     "js360",
//     "js361",
//     "js362",
//     "js363",
//     "js364",
//     "js365",
//     "js366",
//     "js367",
//     "js368",
//     "js369",
//     "js370",
//     "js371",
//     "js372",
//     "js373",
//     "js374",
//     "js375",
//     "js376",
//     "js377",
//     "js378",
//     "js379",
//     "js380",
//     "js381",
//     "js382",
//     "js383",
//     "js384",
//     "js385",
//     "js386",
//     "js387",
//     "js388",
//     "js389",
//     "js390",
//     "js391",
//     "js392",
//     "js393",
//     "js394",
//     "js395",
//     "js396",
//     "js397",
//     "js398",
//     "js399",
//     "js400",
//     "js401",
//     "js402",
//     "js403",
//     "js404",
//     "js405",
//     "js406",
//     "js407",
//     "js408",
//     "js409",
//     "js410",
//     "js411",
//     "js412",
//     "js413",
//     "js414",
//     "js415",
//     "js416",
//     "js417",
//     "js418",
//     "js419",
//     "js421",
//     "js422",
//     "js423",
//     "js424",
//     "js425",
//     "js426",
//     "js427",
//     "js428",
//     "js429",
//     "js430",
//     "js431",
//     "js432",
//     "js433",
//     "js434",
//     "js435",
//     "js436",
//     "js437",
//     "js438",
//     "js439",
//     "js440",
//     "js441",
//     "js442",
//     "js443",
//     "js444",
//     "js445",
//     "js446",
//     "js447",
//     "js448",
//     "js449",
//     "js450",
//     "js451",
//     "js452",
//     "js453",
//     "js454",
//     "js455",
//     "js456",
//     "js457",
//     "js458",
//     "js459",
//     "js460",
//     "js461",
//     "js462",
//     "js463",
//     "js464",
//     "js465",
//     "js466",
//     "js467",
//     "js468",
//     "js469",
//     "js470",
//     "js471",
//     "js472",
//     "js473",
//     "js474",
//     "js475",
//     "js476",
//     "js477",
//     "js478",
//     "js479",
//     "js480",
//     "js481",
//     "js482",
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
//           .list(`javascript/${filePath}`, {
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
//                 .getPublicUrl(`javascript/${filePath}/${file.name}`).data
//                 .publicUrl
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
//             alt={`Javascript programming Images ${currentImageIndex + 1}`}
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
//   // List of file paths for JavaScript images
//   const filePaths = Array.from({ length: 482 }, (_, i) => `js${i + 1}`);

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
//           .list(`javascript/${filePath}`, {
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
//                 .getPublicUrl(`javascript/${filePath}/${file.name}`).data
//                 .publicUrl
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
//             alt={`JavaScript Programming Image ${currentImageIndex + 1}`}
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
  // List of file paths for JavaScript images
  const filePaths = Array.from({ length: 482 }, (_, i) => `js${i + 1}`);

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
          .list(`javascript/${filePath}`, {
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
                .getPublicUrl(`javascript/${filePath}/${file.name}`).data
                .publicUrl
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
        const fileName = `javascript_${filePath}_image_${i + 1}.jpg`; // Customize the filename

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
            alt={`JavaScript Programming Image ${currentImageIndex + 1}`}
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
