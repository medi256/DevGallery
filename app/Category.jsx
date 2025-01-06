// "use client";
// import supabase from "@/supabaseConfig";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const CategoriesGrid = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data, error } = await supabase.from("category").select("*");
//       if (error) {
//         console.error("Error fetching categories:", error);
//         return;
//       }
//       if (data) {
//         console.log(data);
//         setData(data);
//       }
//     };
//     fetchData();
//   }, []);

//   const toggleShowAll = () => setShowAll(!showAll);

//   const itemsPerRow = 7;

//   return (
//     <section className="relative">
//       <div
//         className={`categories-grid ${showAll ? "show-all" : "first-row-only"}`}
//         style={{
//           height: showAll ? "auto" : `calc(130px + 20px)`,
//         }}
//       >
//         {data.map((item) => (
//           <Link
//             key={item.title}
//             href={`${item.title}`}
//             className="category-card"
//             style={{ backgroundImage: `url(${item.url})` }}
//           >
//             <div className="category-overlay">{item.title}</div>
//           </Link>
//         ))}
//       </div>
//       {data.length > itemsPerRow && (
//         <div className="view-more-container">
//           <div className="view-more-indicator" onClick={toggleShowAll}>
//             <div className="view-more-chevron">{showAll ? "▲" : "▼"}</div>
//             <div className="view-more-text">
//               {showAll ? "Show Less" : "View More Categories"}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default CategoriesGrid;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "@/supabaseConfig";

// Skeleton component for loading state
const CategorySkeleton = () => {
  const skeletonCards = Array(7).fill(0); // Show 7 skeleton cards (one row)

  return (
    <div
      className="categories-grid first-row-only"
      style={{ height: "calc(130px + 20px)" }}
    >
      {skeletonCards.map((_, index) => (
        <div
          key={index}
          className="category-card animate-pulse bg-gray-200 dark:bg-gray-700"
        >
          <div className="category-overlay bg-gray-300 dark:bg-gray-600 h-8 mt-auto mx-2 mb-2 rounded" />
        </div>
      ))}
    </div>
  );
};

const CategoriesGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.from("category").select("*");
        if (error) {
          console.error("Error fetching categories:", error);
          return;
        }
        if (data) {
          console.log(data);
          setData(data);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleShowAll = () => setShowAll(!showAll);
  const itemsPerRow = 7;

  if (isLoading) {
    return <CategorySkeleton />;
  }

  return (
    <section className="relative">
      <div
        className={`categories-grid ${showAll ? "show-all" : "first-row-only"}`}
        style={{
          height: showAll ? "auto" : `calc(130px + 20px)`,
        }}
      >
        {data.map((item) => (
          <Link
            key={item.title}
            href={`${item.title}`}
            className="category-card"
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <div className="category-overlay">{item.title}</div>
          </Link>
        ))}
      </div>
      {data.length > itemsPerRow && (
        <div className="view-more-container">
          <div className="view-more-indicator" onClick={toggleShowAll}>
            <div className="view-more-chevron">{showAll ? "▲" : "▼"}</div>
            <div className="view-more-text">
              {showAll ? "Show Less" : "View More Categories"}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoriesGrid;
