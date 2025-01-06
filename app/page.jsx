// import React from "react";
// import CategoriesGrid from "./Category";
// import { Duplicate as BashDuplicate } from "./Bash/page";
// import { Duplicate as CDuplicate } from "./C/page";
// import { Duplicate as CSSDuplicate } from "./CSS/page";
// import { Duplicate as HTMLDuplicate } from "./HTML/page";
// import { Duplicate as JavaDuplicate } from "./Java/page";
// import { Duplicate as JavascriptDuplicate } from "./Javascript/page";
// import { Duplicate as PythonDuplicate } from "./Python/page";

// const LandingPage = () => {
//   return (
//     <main className="landing-page">
//       <section>
//         <h3 className="categories-heading">Explore by Category</h3>
//         <CategoriesGrid />
//       </section>
//       <section>
//         <BashDuplicate filePath={"bash_comand"} />
//         <BashDuplicate filePath={"write_bash"} />
//         <BashDuplicate filePath={"bash1"} />
//         <BashDuplicate filePath={"bash2"} />
//         <BashDuplicate filePath={"bash3"} />
//         <BashDuplicate filePath={"bash4"} />
//         <BashDuplicate filePath={"bash5"} />
//         <BashDuplicate filePath={"bash6"} />
//         <BashDuplicate filePath={"bash7"} />
//         <BashDuplicate filePath={"what_is_bash"} />
//         <CDuplicate filePath={"c1"} />
//         <CDuplicate filePath={"c2"} />
//         <CDuplicate filePath={"c3"} />
//         <CDuplicate filePath={"c4"} />
//         <CDuplicate filePath={"c5"} />
//         <CDuplicate filePath={"c6"} />
//         <CDuplicate filePath={"c7"} />
//         <CDuplicate filePath={"c8"} />
//         <CDuplicate filePath={"c9"} />
//         <CDuplicate filePath={"c10"} />
//         <CDuplicate filePath={"c11"} />
//         <CDuplicate filePath={"c12"} />
//         <CDuplicate filePath={"c13"} />
//         <CDuplicate filePath={"c14"} />
//         <CDuplicate filePath={"c15"} />
//         <CDuplicate filePath={"c16"} />
//         <CDuplicate filePath={"c17"} />
//         <CDuplicate filePath={"c18"} />
//         <CDuplicate filePath={"c19"} />
//         <CDuplicate filePath={"c20"} />
//         <CDuplicate filePath={"c21"} />
//         <CDuplicate filePath={"c22"} />
//         <CDuplicate filePath={"c23"} />
//         <CDuplicate filePath={"c24"} />
//         <CDuplicate filePath={"c25"} />
//         <CDuplicate filePath={"c26"} />
//         <CDuplicate filePath={"c27"} />
//         <CDuplicate filePath={"c28"} />
//         <CDuplicate filePath={"c29"} />
//         <CDuplicate filePath={"c30"} />
//         <CDuplicate filePath={"c31"} />
//         <CDuplicate filePath={"c32"} />
//         <CDuplicate filePath={"c33"} />
//         <CDuplicate filePath={"c34"} />
//         <CDuplicate filePath={"c35"} />
//         <CDuplicate filePath={"c36"} />
//         <CDuplicate filePath={"c37"} />
//         <CDuplicate filePath={"c38"} />
//         <CDuplicate filePath={"c39"} />
//         <CDuplicate filePath={"c40"} />
//         <CDuplicate filePath={"c41"} />
//         <CDuplicate filePath={"c42"} />
//         <CDuplicate filePath={"c43"} />
//         <CDuplicate filePath={"c44"} />
//         <CDuplicate filePath={"c45"} />
//         <CDuplicate filePath={"c46"} />
//         <CDuplicate filePath={"c47"} />
//         <CDuplicate filePath={"c48"} />
//         <CDuplicate filePath={"c49"} />
//         <CDuplicate filePath={"c50"} />
//         <CDuplicate filePath={"c51"} />
//         <CDuplicate filePath={"c52"} />
//         <CDuplicate filePath={"c53"} />
//         <CDuplicate filePath={"c54"} />
//         <CDuplicate filePath={"c55"} />
//         <CDuplicate filePath={"c56"} />
//         <CDuplicate filePath={"c58"} />
//         <CDuplicate filePath={"c59"} />

//         <CSSDuplicate filePath={"css1"} />
//         <CSSDuplicate filePath={"css2"} />
//         <CSSDuplicate filePath={"css3"} />
//         <CSSDuplicate filePath={"css4"} />
//         <CSSDuplicate filePath={"css5"} />
//         <CSSDuplicate filePath={"css6"} />
//         <CSSDuplicate filePath={"css7"} />
//         <CSSDuplicate filePath={"css8"} />
//         <CSSDuplicate filePath={"css9"} />
//         <CSSDuplicate filePath={"css10"} />
//         <CSSDuplicate filePath={"css11"} />
//         <CSSDuplicate filePath={"css12"} />
//         <CSSDuplicate filePath={"css13"} />
//         <CSSDuplicate filePath={"css14"} />
//         <CSSDuplicate filePath={"css15"} />
//         <CSSDuplicate filePath={"css16"} />
//         <CSSDuplicate filePath={"css17"} />
//         <CSSDuplicate filePath={"css18"} />
//         <CSSDuplicate filePath={"css19"} />
//         <CSSDuplicate filePath={"css20"} />
//         <CSSDuplicate filePath={"css21"} />
//         <CSSDuplicate filePath={"css22"} />
//         <CSSDuplicate filePath={"css23"} />
//         <CSSDuplicate filePath={"css24"} />
//         <CSSDuplicate filePath={"css25"} />
//         <CSSDuplicate filePath={"css26"} />
//         <CSSDuplicate filePath={"css27"} />
//         <CSSDuplicate filePath={"css28"} />
//         <CSSDuplicate filePath={"css29"} />
//         <CSSDuplicate filePath={"css30"} />
//         <CSSDuplicate filePath={"css31"} />
//         <CSSDuplicate filePath={"css32"} />
//         <CSSDuplicate filePath={"css33"} />
//         <CSSDuplicate filePath={"css34"} />
//         <CSSDuplicate filePath={"css35"} />
//         <CSSDuplicate filePath={"css36"} />
//         <CSSDuplicate filePath={"css37"} />
//         <CSSDuplicate filePath={"css38"} />
//         <CSSDuplicate filePath={"css39"} />
//         <CSSDuplicate filePath={"css40"} />
//         <CSSDuplicate filePath={"css42"} />
//         <CSSDuplicate filePath={"css43"} />
//         <CSSDuplicate filePath={"css44"} />
//         <CSSDuplicate filePath={"css45"} />
//         <CSSDuplicate filePath={"css46"} />
//         <CSSDuplicate filePath={"css47"} />
//         <CSSDuplicate filePath={"css48"} />
//         <CSSDuplicate filePath={"css49"} />
//         <CSSDuplicate filePath={"css50"} />
//         <CSSDuplicate filePath={"css51"} />
//         <CSSDuplicate filePath={"css52"} />
//         <CSSDuplicate filePath={"css53"} />
//         <CSSDuplicate filePath={"css54"} />
//         <CSSDuplicate filePath={"css55"} />
//         <CSSDuplicate filePath={"css56"} />
//         <CSSDuplicate filePath={"css57"} />
//         <CSSDuplicate filePath={"css58"} />
//         <CSSDuplicate filePath={"css59"} />
//         <CSSDuplicate filePath={"css60"} />
//         <CSSDuplicate filePath={"css61"} />
//         <CSSDuplicate filePath={"css62"} />
//         <CSSDuplicate filePath={"css63"} />
//         <CSSDuplicate filePath={"css64"} />
//         <CSSDuplicate filePath={"css65"} />
//         <CSSDuplicate filePath={"css66"} />
//         <CSSDuplicate filePath={"css67"} />
//         <CSSDuplicate filePath={"css68"} />
//         <CSSDuplicate filePath={"css69"} />
//         <CSSDuplicate filePath={"css70"} />
//         <CSSDuplicate filePath={"css71"} />
//         <CSSDuplicate filePath={"css72"} />
//         <CSSDuplicate filePath={"css73"} />
//         <CSSDuplicate filePath={"css74"} />
//         <CSSDuplicate filePath={"css75"} />
//         <CSSDuplicate filePath={"css76"} />
//         <CSSDuplicate filePath={"css77"} />
//         <CSSDuplicate filePath={"css78"} />
//         <CSSDuplicate filePath={"css79"} />
//         <CSSDuplicate filePath={"css80"} />
//         <CSSDuplicate filePath={"css81"} />
//         <CSSDuplicate filePath={"css82"} />
//         <CSSDuplicate filePath={"css83"} />
//         <CSSDuplicate filePath={"css84"} />
//         <CSSDuplicate filePath={"css85"} />
//         <CSSDuplicate filePath={"css86"} />
//         <CSSDuplicate filePath={"css87"} />
//         <CSSDuplicate filePath={"css88"} />
//         <CSSDuplicate filePath={"css89"} />
//         <CSSDuplicate filePath={"css90"} />
//         <CSSDuplicate filePath={"css91"} />
//         <CSSDuplicate filePath={"css92"} />
//         <CSSDuplicate filePath={"css93"} />
//         <CSSDuplicate filePath={"css94"} />
//         <CSSDuplicate filePath={"css95"} />
//         <CSSDuplicate filePath={"css96"} />
//         <CSSDuplicate filePath={"css97"} />
//         <CSSDuplicate filePath={"css98"} />
//         <CSSDuplicate filePath={"css99"} />
//         <CSSDuplicate filePath={"css100"} />
//         <CSSDuplicate filePath={"css101"} />
//         <CSSDuplicate filePath={"css102"} />
//         <CSSDuplicate filePath={"css103"} />
//         <CSSDuplicate filePath={"css104"} />
//         <CSSDuplicate filePath={"css105"} />
//         <CSSDuplicate filePath={"css106"} />
//         <CSSDuplicate filePath={"css107"} />
//         <CSSDuplicate filePath={"css108"} />
//         <CSSDuplicate filePath={"css109"} />
//         <CSSDuplicate filePath={"css110"} />
//         <CSSDuplicate filePath={"css111"} />
//         <CSSDuplicate filePath={"css112"} />
//         <CSSDuplicate filePath={"css113"} />
//         <CSSDuplicate filePath={"css114"} />
//         <CSSDuplicate filePath={"css115"} />
//         <CSSDuplicate filePath={"css116"} />
//         <CSSDuplicate filePath={"css117"} />
//         <CSSDuplicate filePath={"css118"} />
//         <CSSDuplicate filePath={"css119"} />
//         <CSSDuplicate filePath={"css120"} />
//         <CSSDuplicate filePath={"css121"} />
//         <CSSDuplicate filePath={"css122"} />
//         <CSSDuplicate filePath={"css123"} />
//         <CSSDuplicate filePath={"css124"} />
//         <CSSDuplicate filePath={"css125"} />
//         <CSSDuplicate filePath={"css126"} />
//         <CSSDuplicate filePath={"css127"} />
//         <CSSDuplicate filePath={"css128"} />
//         <CSSDuplicate filePath={"css129"} />
//         <CSSDuplicate filePath={"css130"} />
//         <CSSDuplicate filePath={"css131"} />
//         <CSSDuplicate filePath={"css132"} />
//         <CSSDuplicate filePath={"css133"} />
//         <CSSDuplicate filePath={"css134"} />
//         <CSSDuplicate filePath={"css135"} />
//         <CSSDuplicate filePath={"css136"} />
//         <CSSDuplicate filePath={"css137"} />
//         <CSSDuplicate filePath={"css138"} />
//         <CSSDuplicate filePath={"css139"} />
//         <CSSDuplicate filePath={"css140"} />
//         <CSSDuplicate filePath={"css141"} />

//         <HTMLDuplicate filePath={"html1"} />
//         <HTMLDuplicate filePath={"html2"} />
//         <HTMLDuplicate filePath={"html3"} />
//         <HTMLDuplicate filePath={"html4"} />
//         <HTMLDuplicate filePath={"html5"} />
//         <HTMLDuplicate filePath={"html7"} />
//         <HTMLDuplicate filePath={"html8"} />
//         <HTMLDuplicate filePath={"html9"} />
//         <HTMLDuplicate filePath={"html10"} />
//         <HTMLDuplicate filePath={"html11"} />
//         <HTMLDuplicate filePath={"html12"} />
//         <HTMLDuplicate filePath={"html13"} />
//         <HTMLDuplicate filePath={"html14"} />
//         <HTMLDuplicate filePath={"html15"} />
//         <HTMLDuplicate filePath={"html16"} />
//         <HTMLDuplicate filePath={"html17"} />
//         <HTMLDuplicate filePath={"html18"} />
//         <HTMLDuplicate filePath={"html19"} />
//         <HTMLDuplicate filePath={"html20"} />
//         <HTMLDuplicate filePath={"html21"} />
//         <HTMLDuplicate filePath={"html22"} />
//         <HTMLDuplicate filePath={"html23"} />
//         <HTMLDuplicate filePath={"html24"} />
//         <HTMLDuplicate filePath={"html25"} />
//         <HTMLDuplicate filePath={"html26"} />
//         <HTMLDuplicate filePath={"html27"} />
//         <HTMLDuplicate filePath={"html28"} />
//         <HTMLDuplicate filePath={"html29"} />
//         <HTMLDuplicate filePath={"html30"} />
//         <HTMLDuplicate filePath={"html31"} />
//         <HTMLDuplicate filePath={"html32"} />
//         <HTMLDuplicate filePath={"html33"} />
//         <HTMLDuplicate filePath={"html34"} />
//         <HTMLDuplicate filePath={"html35"} />
//         <HTMLDuplicate filePath={"html36"} />
//         <HTMLDuplicate filePath={"html37"} />
//         <HTMLDuplicate filePath={"html38"} />
//         <HTMLDuplicate filePath={"html39"} />
//         <HTMLDuplicate filePath={"html40"} />
//         <HTMLDuplicate filePath={"html41"} />
//         <HTMLDuplicate filePath={"html42"} />
//         <HTMLDuplicate filePath={"html43"} />
//         <HTMLDuplicate filePath={"html44"} />
//         <HTMLDuplicate filePath={"html45"} />
//         <HTMLDuplicate filePath={"html46"} />
//         <HTMLDuplicate filePath={"html47"} />
//         <HTMLDuplicate filePath={"html48"} />
//         <HTMLDuplicate filePath={"html49"} />
//         <HTMLDuplicate filePath={"html50"} />
//         <HTMLDuplicate filePath={"html51"} />
//         <HTMLDuplicate filePath={"html52"} />
//         <HTMLDuplicate filePath={"html53"} />
//         <HTMLDuplicate filePath={"html54"} />
//         <HTMLDuplicate filePath={"html55"} />
//         <HTMLDuplicate filePath={"html56"} />
//         <HTMLDuplicate filePath={"html57"} />
//         <HTMLDuplicate filePath={"html58"} />
//         <HTMLDuplicate filePath={"html59"} />
//         <HTMLDuplicate filePath={"html60"} />
//         <HTMLDuplicate filePath={"html61"} />
//         <HTMLDuplicate filePath={"html62"} />
//         <HTMLDuplicate filePath={"html63"} />
//         <HTMLDuplicate filePath={"html64"} />
//         <HTMLDuplicate filePath={"html65"} />
//         <HTMLDuplicate filePath={"html66"} />
//         <HTMLDuplicate filePath={"html67"} />
//         <HTMLDuplicate filePath={"html68"} />
//         <HTMLDuplicate filePath={"html69"} />
//         <HTMLDuplicate filePath={"html70"} />
//         <HTMLDuplicate filePath={"html71"} />
//         <HTMLDuplicate filePath={"html72"} />
//         <HTMLDuplicate filePath={"html73"} />
//         <HTMLDuplicate filePath={"html74"} />
//         <HTMLDuplicate filePath={"html75"} />
//         <HTMLDuplicate filePath={"html76"} />
//         <HTMLDuplicate filePath={"html77"} />
//         <HTMLDuplicate filePath={"html78"} />
//         <HTMLDuplicate filePath={"html79"} />
//         <HTMLDuplicate filePath={"html80"} />
//         <HTMLDuplicate filePath={"html81"} />
//         <HTMLDuplicate filePath={"html82"} />
//         <HTMLDuplicate filePath={"html83"} />
//         <HTMLDuplicate filePath={"html84"} />
//         <HTMLDuplicate filePath={"html85"} />
//         <HTMLDuplicate filePath={"html86"} />
//         <HTMLDuplicate filePath={"html87"} />
//         <HTMLDuplicate filePath={"html88"} />
//         <HTMLDuplicate filePath={"html89"} />
//         <HTMLDuplicate filePath={"html90"} />
//         <HTMLDuplicate filePath={"html91"} />
//         <HTMLDuplicate filePath={"html92"} />
//         <HTMLDuplicate filePath={"html93"} />
//         <HTMLDuplicate filePath={"html94"} />
//         <HTMLDuplicate filePath={"html95"} />
//         <HTMLDuplicate filePath={"html96"} />
//         <HTMLDuplicate filePath={"html97"} />
//         <HTMLDuplicate filePath={"html98"} />
//         <HTMLDuplicate filePath={"html99"} />
//         <HTMLDuplicate filePath={"html100"} />
//         <HTMLDuplicate filePath={"html101"} />
//         <HTMLDuplicate filePath={"html102"} />
//         <HTMLDuplicate filePath={"html103"} />
//         <HTMLDuplicate filePath={"html104"} />
//         <HTMLDuplicate filePath={"html105"} />
//         <HTMLDuplicate filePath={"html106"} />
//         <HTMLDuplicate filePath={"html107"} />
//         <HTMLDuplicate filePath={"html108"} />
//         <HTMLDuplicate filePath={"html109"} />
//         <HTMLDuplicate filePath={"html110"} />
//         <HTMLDuplicate filePath={"html111"} />
//         <HTMLDuplicate filePath={"html112"} />
//         <HTMLDuplicate filePath={"html113"} />
//         <HTMLDuplicate filePath={"html114"} />
//         <HTMLDuplicate filePath={"html115"} />
//         <HTMLDuplicate filePath={"html116"} />
//         <HTMLDuplicate filePath={"html117"} />
//         <HTMLDuplicate filePath={"html118"} />
//         <HTMLDuplicate filePath={"html119"} />
//         <HTMLDuplicate filePath={"html120"} />
//         <HTMLDuplicate filePath={"html121"} />
//         <HTMLDuplicate filePath={"html122"} />
//         <HTMLDuplicate filePath={"html123"} />
//         <HTMLDuplicate filePath={"html124"} />
//         <HTMLDuplicate filePath={"html125"} />
//         <HTMLDuplicate filePath={"html126"} />
//         <HTMLDuplicate filePath={"html127"} />
//         <HTMLDuplicate filePath={"html128"} />
//         <HTMLDuplicate filePath={"html129"} />
//         <HTMLDuplicate filePath={"html130"} />
//         <HTMLDuplicate filePath={"html131"} />
//         <HTMLDuplicate filePath={"html132"} />
//         <HTMLDuplicate filePath={"html133"} />
//         <HTMLDuplicate filePath={"html134"} />
//         <HTMLDuplicate filePath={"html135"} />
//         <HTMLDuplicate filePath={"html136"} />
//         <HTMLDuplicate filePath={"html137"} />
//         <HTMLDuplicate filePath={"html138"} />
//         <HTMLDuplicate filePath={"html139"} />
//         <HTMLDuplicate filePath={"html140"} />
//         <HTMLDuplicate filePath={"html141"} />

//         <JavaDuplicate filePath={"java1"} />
//         <JavaDuplicate filePath={"java2"} />
//         <JavaDuplicate filePath={"java3"} />
//         <JavaDuplicate filePath={"java4"} />
//         <JavaDuplicate filePath={"java5"} />
//         <JavaDuplicate filePath={"java6"} />
//         <JavaDuplicate filePath={"java7"} />
//         <JavaDuplicate filePath={"java8"} />
//         <JavaDuplicate filePath={"java9"} />
//         <JavaDuplicate filePath={"java10"} />
//         <JavaDuplicate filePath={"java11"} />
//         <JavaDuplicate filePath={"java12"} />
//         <JavaDuplicate filePath={"java13"} />
//         <JavaDuplicate filePath={"java14"} />
//         <JavaDuplicate filePath={"java15"} />
//         <JavaDuplicate filePath={"java16"} />
//         <JavaDuplicate filePath={"java17"} />
//         <JavaDuplicate filePath={"java18"} />
//         <JavaDuplicate filePath={"java19"} />
//         <JavaDuplicate filePath={"java20"} />
//         <JavaDuplicate filePath={"java21"} />
//         <JavaDuplicate filePath={"java22"} />
//         <JavaDuplicate filePath={"java23"} />
//         <JavaDuplicate filePath={"java25"} />
//         <JavaDuplicate filePath={"java26"} />
//         <JavaDuplicate filePath={"java27"} />
//         <JavaDuplicate filePath={"java28"} />
//         <JavaDuplicate filePath={"java29"} />
//         <JavaDuplicate filePath={"java30"} />
//         <JavaDuplicate filePath={"java31"} />
//         <JavaDuplicate filePath={"java32"} />
//         <JavaDuplicate filePath={"java33"} />
//         <JavaDuplicate filePath={"java34"} />
//         <JavaDuplicate filePath={"java35"} />
//         <JavaDuplicate filePath={"java36"} />
//         <JavaDuplicate filePath={"java37"} />
//         <JavaDuplicate filePath={"java38"} />
//         <JavaDuplicate filePath={"java39"} />
//         <JavaDuplicate filePath={"java40"} />
//         <JavaDuplicate filePath={"java41"} />
//         <JavaDuplicate filePath={"java42"} />
//         <JavaDuplicate filePath={"java43"} />
//         <JavaDuplicate filePath={"java44"} />
//         <JavaDuplicate filePath={"java45"} />
//         <JavaDuplicate filePath={"java46"} />
//         <JavaDuplicate filePath={"java47"} />
//         <JavaDuplicate filePath={"java48"} />
//         <JavaDuplicate filePath={"java49"} />
//         <JavaDuplicate filePath={"java50"} />
//         <JavaDuplicate filePath={"java51"} />
//         <JavaDuplicate filePath={"java52"} />
//         <JavaDuplicate filePath={"java53"} />
//         <JavaDuplicate filePath={"java54"} />
//         <JavaDuplicate filePath={"java55"} />
//         <JavaDuplicate filePath={"java56"} />
//         <JavaDuplicate filePath={"java57"} />
//         <JavaDuplicate filePath={"java58"} />
//         <JavaDuplicate filePath={"java59"} />
//         <JavaDuplicate filePath={"java60"} />
//         <JavaDuplicate filePath={"java61"} />
//         <JavaDuplicate filePath={"java62"} />
//         <JavaDuplicate filePath={"java63"} />
//         <JavaDuplicate filePath={"java64"} />
//         <JavaDuplicate filePath={"java65"} />
//         <JavaDuplicate filePath={"java66"} />
//         <JavaDuplicate filePath={"java67"} />
//         <JavaDuplicate filePath={"java68"} />
//         <JavaDuplicate filePath={"java69"} />
//         <JavaDuplicate filePath={"java70"} />
//         <JavaDuplicate filePath={"java71"} />
//         <JavaDuplicate filePath={"java72"} />
//         <JavaDuplicate filePath={"java73"} />
//         <JavaDuplicate filePath={"java74"} />
//         <JavaDuplicate filePath={"java75"} />
//         <JavaDuplicate filePath={"java76"} />
//         <JavaDuplicate filePath={"java77"} />
//         <JavaDuplicate filePath={"java78"} />
//         <JavaDuplicate filePath={"java79"} />
//         <JavaDuplicate filePath={"java80"} />
//         <JavaDuplicate filePath={"java81"} />
//         <JavaDuplicate filePath={"java82"} />
//         <JavaDuplicate filePath={"java83"} />
//         <JavaDuplicate filePath={"java84"} />
//         <JavaDuplicate filePath={"java85"} />
//         <JavaDuplicate filePath={"java86"} />
//         <JavaDuplicate filePath={"java87"} />
//         <JavaDuplicate filePath={"java88"} />
//         <JavaDuplicate filePath={"java89"} />
//         <JavaDuplicate filePath={"java90"} />
//         <JavaDuplicate filePath={"java91"} />
//         <JavaDuplicate filePath={"java92"} />
//         <JavaDuplicate filePath={"java93"} />
//         <JavaDuplicate filePath={"java94"} />
//         <JavaDuplicate filePath={"java95"} />
//         <JavaDuplicate filePath={"java96"} />
//         <JavaDuplicate filePath={"java97"} />
//         <JavaDuplicate filePath={"java98"} />
//         <JavaDuplicate filePath={"java99"} />
//         <JavaDuplicate filePath={"java100"} />
//         <JavaDuplicate filePath={"java101"} />
//         <JavaDuplicate filePath={"java102"} />
//         <JavaDuplicate filePath={"java103"} />
//         <JavaDuplicate filePath={"java104"} />
//         <JavaDuplicate filePath={"java105"} />
//         <JavaDuplicate filePath={"java106"} />
//         <JavaDuplicate filePath={"java107"} />
//         <JavaDuplicate filePath={"java108"} />
//         <JavaDuplicate filePath={"java109"} />
//         <JavaDuplicate filePath={"java110"} />
//         <JavaDuplicate filePath={"java111"} />
//         <JavaDuplicate filePath={"java112"} />
//         <JavaDuplicate filePath={"java113"} />
//         <JavaDuplicate filePath={"java114"} />
//         <JavaDuplicate filePath={"java115"} />
//         <JavaDuplicate filePath={"java116"} />
//         <JavaDuplicate filePath={"java117"} />
//         <JavaDuplicate filePath={"java118"} />
//         <JavaDuplicate filePath={"java119"} />
//         <JavaDuplicate filePath={"java120"} />
//         <JavaDuplicate filePath={"java121"} />
//         <JavaDuplicate filePath={"java122"} />
//         <JavaDuplicate filePath={"java123"} />
//         <JavaDuplicate filePath={"java124"} />
//         <JavaDuplicate filePath={"java125"} />
//         <JavaDuplicate filePath={"java127"} />
//         <JavaDuplicate filePath={"java128"} />
//         <JavaDuplicate filePath={"java129"} />
//         <JavaDuplicate filePath={"java130"} />
//         <JavaDuplicate filePath={"java132"} />
//         <JavaDuplicate filePath={"java133"} />
//         <JavaDuplicate filePath={"java134"} />
//         <JavaDuplicate filePath={"java135"} />
//         <JavaDuplicate filePath={"java136"} />
//         <JavaDuplicate filePath={"java137"} />
//         <JavaDuplicate filePath={"java138"} />
//         <JavaDuplicate filePath={"java139"} />
//         <JavaDuplicate filePath={"java140"} />
//         <JavaDuplicate filePath={"java141"} />
//         <JavaDuplicate filePath={"java142"} />
//         <JavaDuplicate filePath={"java143"} />
//         <JavaDuplicate filePath={"java144"} />
//         <JavaDuplicate filePath={"java145"} />
//         <JavaDuplicate filePath={"java146"} />
//         <JavaDuplicate filePath={"java147"} />
//         <JavaDuplicate filePath={"java148"} />
//         <JavaDuplicate filePath={"java149"} />
//         <JavaDuplicate filePath={"java150"} />
//         <JavaDuplicate filePath={"java151"} />
//         <JavaDuplicate filePath={"java152"} />
//         <JavaDuplicate filePath={"java153"} />
//         <JavaDuplicate filePath={"java154"} />
//         <JavaDuplicate filePath={"java155"} />
//         <JavaDuplicate filePath={"java156"} />
//         <JavaDuplicate filePath={"java157"} />
//         <JavaDuplicate filePath={"java158"} />
//         <JavaDuplicate filePath={"java159"} />
//         <JavaDuplicate filePath={"java160"} />
//         <JavaDuplicate filePath={"java161"} />
//         <JavaDuplicate filePath={"java162"} />
//         <JavaDuplicate filePath={"java163"} />
//         <JavaDuplicate filePath={"java164"} />
//         <JavaDuplicate filePath={"java165"} />
//         <JavaDuplicate filePath={"java166"} />
//         <JavaDuplicate filePath={"java167"} />
//         <JavaDuplicate filePath={"java168"} />
//         <JavaDuplicate filePath={"java169"} />
//         <JavaDuplicate filePath={"java170"} />
//         <JavaDuplicate filePath={"java171"} />
//         <JavaDuplicate filePath={"java172"} />
//         <JavaDuplicate filePath={"java173"} />

//         <JavascriptDuplicate filePath={"js1"} />
//         <JavascriptDuplicate filePath={"js2"} />
//         <JavascriptDuplicate filePath={"js3"} />
//         <JavascriptDuplicate filePath={"js4"} />
//         <JavascriptDuplicate filePath={"js5"} />
//         <JavascriptDuplicate filePath={"js6"} />
//         <JavascriptDuplicate filePath={"js7"} />
//         <JavascriptDuplicate filePath={"js8"} />
//         <JavascriptDuplicate filePath={"js9"} />
//         <JavascriptDuplicate filePath={"js10"} />
//         <JavascriptDuplicate filePath={"js11"} />
//         <JavascriptDuplicate filePath={"js12"} />
//         <JavascriptDuplicate filePath={"js13"} />
//         <JavascriptDuplicate filePath={"js14"} />
//         <JavascriptDuplicate filePath={"js15"} />
//         <JavascriptDuplicate filePath={"js16"} />
//         <JavascriptDuplicate filePath={"js17"} />
//         <JavascriptDuplicate filePath={"js18"} />
//         <JavascriptDuplicate filePath={"js19"} />
//         <JavascriptDuplicate filePath={"js20"} />
//         <JavascriptDuplicate filePath={"js21"} />
//         <JavascriptDuplicate filePath={"js22"} />
//         <JavascriptDuplicate filePath={"js23"} />
//         <JavascriptDuplicate filePath={"js24"} />
//         <JavascriptDuplicate filePath={"js25"} />
//         <JavascriptDuplicate filePath={"js26"} />
//         <JavascriptDuplicate filePath={"js27"} />
//         <JavascriptDuplicate filePath={"js28"} />
//         <JavascriptDuplicate filePath={"js29"} />
//         <JavascriptDuplicate filePath={"js30"} />
//         <JavascriptDuplicate filePath={"js31"} />
//         <JavascriptDuplicate filePath={"js32"} />
//         <JavascriptDuplicate filePath={"js33"} />
//         <JavascriptDuplicate filePath={"js34"} />
//         <JavascriptDuplicate filePath={"js35"} />
//         <JavascriptDuplicate filePath={"js36"} />
//         <JavascriptDuplicate filePath={"js37"} />
//         <JavascriptDuplicate filePath={"js38"} />
//         <JavascriptDuplicate filePath={"js39"} />
//         <JavascriptDuplicate filePath={"js40"} />
//         <JavascriptDuplicate filePath={"js41"} />
//         <JavascriptDuplicate filePath={"js42"} />
//         <JavascriptDuplicate filePath={"js43"} />
//         <JavascriptDuplicate filePath={"js44"} />
//         <JavascriptDuplicate filePath={"js45"} />
//         <JavascriptDuplicate filePath={"js46"} />
//         <JavascriptDuplicate filePath={"js47"} />
//         <JavascriptDuplicate filePath={"js48"} />
//         <JavascriptDuplicate filePath={"js49"} />
//         <JavascriptDuplicate filePath={"js50"} />
//         <JavascriptDuplicate filePath={"js51"} />
//         <JavascriptDuplicate filePath={"js52"} />
//         <JavascriptDuplicate filePath={"js53"} />
//         <JavascriptDuplicate filePath={"js54"} />
//         <JavascriptDuplicate filePath={"js55"} />
//         <JavascriptDuplicate filePath={"js56"} />
//         <JavascriptDuplicate filePath={"js57"} />
//         <JavascriptDuplicate filePath={"js58"} />
//         <JavascriptDuplicate filePath={"js59"} />
//         <JavascriptDuplicate filePath={"js60"} />
//         <JavascriptDuplicate filePath={"js61"} />
//         <JavascriptDuplicate filePath={"js62"} />
//         <JavascriptDuplicate filePath={"js63"} />
//         <JavascriptDuplicate filePath={"js64"} />
//         <JavascriptDuplicate filePath={"js65"} />
//         <JavascriptDuplicate filePath={"js66"} />
//         <JavascriptDuplicate filePath={"js67"} />
//         <JavascriptDuplicate filePath={"js68"} />
//         <JavascriptDuplicate filePath={"js69"} />
//         <JavascriptDuplicate filePath={"js70"} />
//         <JavascriptDuplicate filePath={"js71"} />
//         <JavascriptDuplicate filePath={"js72"} />
//         <JavascriptDuplicate filePath={"js73"} />
//         <JavascriptDuplicate filePath={"js74"} />
//         <JavascriptDuplicate filePath={"js75"} />
//         <JavascriptDuplicate filePath={"js76"} />
//         <JavascriptDuplicate filePath={"js77"} />
//         <JavascriptDuplicate filePath={"js78"} />
//         <JavascriptDuplicate filePath={"js79"} />
//         <JavascriptDuplicate filePath={"js80"} />
//         <JavascriptDuplicate filePath={"js81"} />
//         <JavascriptDuplicate filePath={"js82"} />
//         <JavascriptDuplicate filePath={"js83"} />
//         <JavascriptDuplicate filePath={"js84"} />
//         <JavascriptDuplicate filePath={"js85"} />
//         <JavascriptDuplicate filePath={"js86"} />
//         <JavascriptDuplicate filePath={"js87"} />
//         <JavascriptDuplicate filePath={"js88"} />
//         <JavascriptDuplicate filePath={"js90"} />
//         <JavascriptDuplicate filePath={"js91"} />
//         <JavascriptDuplicate filePath={"js92"} />
//         <JavascriptDuplicate filePath={"js93"} />
//         <JavascriptDuplicate filePath={"js94"} />
//         <JavascriptDuplicate filePath={"js95"} />
//         <JavascriptDuplicate filePath={"js96"} />
//         <JavascriptDuplicate filePath={"js97"} />
//         <JavascriptDuplicate filePath={"js98"} />
//         <JavascriptDuplicate filePath={"js99"} />
//         <JavascriptDuplicate filePath={"js100"} />
//         <JavascriptDuplicate filePath={"js101"} />
//         <JavascriptDuplicate filePath={"js102"} />
//         <JavascriptDuplicate filePath={"js103"} />
//         <JavascriptDuplicate filePath={"js104"} />
//         <JavascriptDuplicate filePath={"js105"} />
//         <JavascriptDuplicate filePath={"js106"} />
//         <JavascriptDuplicate filePath={"js107"} />
//         <JavascriptDuplicate filePath={"js108"} />
//         <JavascriptDuplicate filePath={"js109"} />
//         <JavascriptDuplicate filePath={"js110"} />
//         <JavascriptDuplicate filePath={"js111"} />
//         <JavascriptDuplicate filePath={"js112"} />
//         <JavascriptDuplicate filePath={"js113"} />
//         <JavascriptDuplicate filePath={"js114"} />
//         <JavascriptDuplicate filePath={"js115"} />
//         <JavascriptDuplicate filePath={"js116"} />
//         <JavascriptDuplicate filePath={"js117"} />
//         <JavascriptDuplicate filePath={"js118"} />
//         <JavascriptDuplicate filePath={"js119"} />
//         <JavascriptDuplicate filePath={"js120"} />
//         <JavascriptDuplicate filePath={"js121"} />
//         <JavascriptDuplicate filePath={"js122"} />
//         <JavascriptDuplicate filePath={"js123"} />
//         <JavascriptDuplicate filePath={"js124"} />
//         <JavascriptDuplicate filePath={"js125"} />
//         <JavascriptDuplicate filePath={"js126"} />
//         <JavascriptDuplicate filePath={"js127"} />
//         <JavascriptDuplicate filePath={"js128"} />
//         <JavascriptDuplicate filePath={"js129"} />
//         <JavascriptDuplicate filePath={"js130"} />
//         <JavascriptDuplicate filePath={"js131"} />
//         <JavascriptDuplicate filePath={"js132"} />
//         <JavascriptDuplicate filePath={"js133"} />
//         <JavascriptDuplicate filePath={"js134"} />
//         <JavascriptDuplicate filePath={"js135"} />
//         <JavascriptDuplicate filePath={"js136"} />
//         <JavascriptDuplicate filePath={"js137"} />
//         <JavascriptDuplicate filePath={"js138"} />
//         <JavascriptDuplicate filePath={"js139"} />
//         <JavascriptDuplicate filePath={"js140"} />
//         <JavascriptDuplicate filePath={"js141"} />
//         <JavascriptDuplicate filePath={"js142"} />
//         <JavascriptDuplicate filePath={"js143"} />
//         <JavascriptDuplicate filePath={"js144"} />
//         <JavascriptDuplicate filePath={"js145"} />
//         <JavascriptDuplicate filePath={"js146"} />
//         <JavascriptDuplicate filePath={"js147"} />
//         <JavascriptDuplicate filePath={"js148"} />
//         <JavascriptDuplicate filePath={"js149"} />
//         <JavascriptDuplicate filePath={"js150"} />
//         <JavascriptDuplicate filePath={"js151"} />
//         <JavascriptDuplicate filePath={"js152"} />
//         <JavascriptDuplicate filePath={"js153"} />
//         <JavascriptDuplicate filePath={"js154"} />
//         <JavascriptDuplicate filePath={"js155"} />
//         <JavascriptDuplicate filePath={"js156"} />
//         <JavascriptDuplicate filePath={"js157"} />
//         <JavascriptDuplicate filePath={"js158"} />
//         <JavascriptDuplicate filePath={"js159"} />
//         <JavascriptDuplicate filePath={"js160"} />
//         <JavascriptDuplicate filePath={"js161"} />
//         <JavascriptDuplicate filePath={"js162"} />
//         <JavascriptDuplicate filePath={"js163"} />
//         <JavascriptDuplicate filePath={"js164"} />
//         <JavascriptDuplicate filePath={"js165"} />
//         <JavascriptDuplicate filePath={"js166"} />
//         <JavascriptDuplicate filePath={"js167"} />
//         <JavascriptDuplicate filePath={"js168"} />
//         <JavascriptDuplicate filePath={"js169"} />
//         <JavascriptDuplicate filePath={"js170"} />
//         <JavascriptDuplicate filePath={"js171"} />
//         <JavascriptDuplicate filePath={"js172"} />
//         <JavascriptDuplicate filePath={"js173"} />
//         <JavascriptDuplicate filePath={"js174"} />
//         <JavascriptDuplicate filePath={"js175"} />
//         <JavascriptDuplicate filePath={"js176"} />
//         <JavascriptDuplicate filePath={"js177"} />
//         <JavascriptDuplicate filePath={"js178"} />
//         <JavascriptDuplicate filePath={"js179"} />
//         <JavascriptDuplicate filePath={"js180"} />
//         <JavascriptDuplicate filePath={"js181"} />
//         <JavascriptDuplicate filePath={"js182"} />
//         <JavascriptDuplicate filePath={"js183"} />
//         <JavascriptDuplicate filePath={"js184"} />
//         <JavascriptDuplicate filePath={"js185"} />
//         <JavascriptDuplicate filePath={"js186"} />
//         <JavascriptDuplicate filePath={"js187"} />
//         <JavascriptDuplicate filePath={"js188"} />
//         <JavascriptDuplicate filePath={"js189"} />
//         <JavascriptDuplicate filePath={"js190"} />
//         <JavascriptDuplicate filePath={"js191"} />
//         <JavascriptDuplicate filePath={"js192"} />
//         <JavascriptDuplicate filePath={"js193"} />
//         <JavascriptDuplicate filePath={"js194"} />
//         <JavascriptDuplicate filePath={"js195"} />
//         <JavascriptDuplicate filePath={"js196"} />
//         <JavascriptDuplicate filePath={"js197"} />
//         <JavascriptDuplicate filePath={"js198"} />
//         <JavascriptDuplicate filePath={"js199"} />
//         <JavascriptDuplicate filePath={"js200"} />
//         <JavascriptDuplicate filePath={"js201"} />
//         <JavascriptDuplicate filePath={"js202"} />
//         <JavascriptDuplicate filePath={"js203"} />
//         <JavascriptDuplicate filePath={"js204"} />
//         <JavascriptDuplicate filePath={"js205"} />
//         <JavascriptDuplicate filePath={"js206"} />
//         <JavascriptDuplicate filePath={"js207"} />
//         <JavascriptDuplicate filePath={"js208"} />
//         <JavascriptDuplicate filePath={"js209"} />
//         <JavascriptDuplicate filePath={"js210"} />
//         <JavascriptDuplicate filePath={"js211"} />
//         <JavascriptDuplicate filePath={"js212"} />
//         <JavascriptDuplicate filePath={"js213"} />
//         <JavascriptDuplicate filePath={"js214"} />
//         <JavascriptDuplicate filePath={"js215"} />
//         <JavascriptDuplicate filePath={"js216"} />
//         <JavascriptDuplicate filePath={"js217"} />
//         <JavascriptDuplicate filePath={"js218"} />
//         <JavascriptDuplicate filePath={"js219"} />
//         <JavascriptDuplicate filePath={"js220"} />
//         <JavascriptDuplicate filePath={"js221"} />
//         <JavascriptDuplicate filePath={"js222"} />
//         <JavascriptDuplicate filePath={"js223"} />
//         <JavascriptDuplicate filePath={"js224"} />
//         <JavascriptDuplicate filePath={"js225"} />
//         <JavascriptDuplicate filePath={"js226"} />
//         <JavascriptDuplicate filePath={"js227"} />
//         <JavascriptDuplicate filePath={"js228"} />
//         <JavascriptDuplicate filePath={"js229"} />
//         <JavascriptDuplicate filePath={"js230"} />
//         <JavascriptDuplicate filePath={"js231"} />
//         <JavascriptDuplicate filePath={"js232"} />
//         <JavascriptDuplicate filePath={"js233"} />
//         <JavascriptDuplicate filePath={"js234"} />
//         <JavascriptDuplicate filePath={"js235"} />
//         <JavascriptDuplicate filePath={"js236"} />
//         <JavascriptDuplicate filePath={"js237"} />
//         <JavascriptDuplicate filePath={"js238"} />
//         <JavascriptDuplicate filePath={"js239"} />
//         <JavascriptDuplicate filePath={"js240"} />
//         <JavascriptDuplicate filePath={"js241"} />
//         <JavascriptDuplicate filePath={"js242"} />
//         <JavascriptDuplicate filePath={"js243"} />
//         <JavascriptDuplicate filePath={"js244"} />
//         <JavascriptDuplicate filePath={"js245"} />
//         <JavascriptDuplicate filePath={"js246"} />
//         <JavascriptDuplicate filePath={"js247"} />
//         <JavascriptDuplicate filePath={"js248"} />
//         <JavascriptDuplicate filePath={"js249"} />
//         <JavascriptDuplicate filePath={"js250"} />
//         <JavascriptDuplicate filePath={"js251"} />
//         <JavascriptDuplicate filePath={"js252"} />
//         <JavascriptDuplicate filePath={"js253"} />
//         <JavascriptDuplicate filePath={"js254"} />
//         <JavascriptDuplicate filePath={"js255"} />
//         <JavascriptDuplicate filePath={"js256"} />
//         <JavascriptDuplicate filePath={"js257"} />
//         <JavascriptDuplicate filePath={"js258"} />
//         <JavascriptDuplicate filePath={"js259"} />
//         <JavascriptDuplicate filePath={"js260"} />
//         <JavascriptDuplicate filePath={"js261"} />
//         <JavascriptDuplicate filePath={"js262"} />
//         <JavascriptDuplicate filePath={"js263"} />
//         <JavascriptDuplicate filePath={"js264"} />
//         <JavascriptDuplicate filePath={"js265"} />
//         <JavascriptDuplicate filePath={"js266"} />
//         <JavascriptDuplicate filePath={"js267"} />
//         <JavascriptDuplicate filePath={"js268"} />
//         <JavascriptDuplicate filePath={"js269"} />
//         <JavascriptDuplicate filePath={"js270"} />
//         <JavascriptDuplicate filePath={"js271"} />
//         <JavascriptDuplicate filePath={"js272"} />
//         <JavascriptDuplicate filePath={"js273"} />
//         <JavascriptDuplicate filePath={"js274"} />
//         <JavascriptDuplicate filePath={"js275"} />
//         <JavascriptDuplicate filePath={"js276"} />
//         <JavascriptDuplicate filePath={"js277"} />
//         <JavascriptDuplicate filePath={"js278"} />
//         <JavascriptDuplicate filePath={"js279"} />
//         <JavascriptDuplicate filePath={"js280"} />
//         <JavascriptDuplicate filePath={"js281"} />
//         <JavascriptDuplicate filePath={"js282"} />
//         <JavascriptDuplicate filePath={"js283"} />
//         <JavascriptDuplicate filePath={"js284"} />
//         <JavascriptDuplicate filePath={"js285"} />
//         <JavascriptDuplicate filePath={"js286"} />
//         <JavascriptDuplicate filePath={"js287"} />
//         <JavascriptDuplicate filePath={"js288"} />
//         <JavascriptDuplicate filePath={"js289"} />
//         <JavascriptDuplicate filePath={"js290"} />
//         <JavascriptDuplicate filePath={"js291"} />
//         <JavascriptDuplicate filePath={"js292"} />
//         <JavascriptDuplicate filePath={"js293"} />
//         <JavascriptDuplicate filePath={"js294"} />
//         <JavascriptDuplicate filePath={"js295"} />
//         <JavascriptDuplicate filePath={"js296"} />
//         <JavascriptDuplicate filePath={"js297"} />
//         <JavascriptDuplicate filePath={"js298"} />
//         <JavascriptDuplicate filePath={"js299"} />
//         <JavascriptDuplicate filePath={"js300"} />
//         <JavascriptDuplicate filePath={"js301"} />
//         <JavascriptDuplicate filePath={"js302"} />
//         <JavascriptDuplicate filePath={"js303"} />
//         <JavascriptDuplicate filePath={"js304"} />
//         <JavascriptDuplicate filePath={"js305"} />
//         <JavascriptDuplicate filePath={"js306"} />
//         <JavascriptDuplicate filePath={"js307"} />
//         <JavascriptDuplicate filePath={"js308"} />
//         <JavascriptDuplicate filePath={"js309"} />
//         <JavascriptDuplicate filePath={"js310"} />
//         <JavascriptDuplicate filePath={"js311"} />
//         <JavascriptDuplicate filePath={"js312"} />
//         <JavascriptDuplicate filePath={"js313"} />
//         <JavascriptDuplicate filePath={"js314"} />
//         <JavascriptDuplicate filePath={"js315"} />
//         <JavascriptDuplicate filePath={"js316"} />
//         <JavascriptDuplicate filePath={"js317"} />
//         <JavascriptDuplicate filePath={"js318"} />
//         <JavascriptDuplicate filePath={"js319"} />
//         <JavascriptDuplicate filePath={"js320"} />
//         <JavascriptDuplicate filePath={"js321"} />
//         <JavascriptDuplicate filePath={"js322"} />
//         <JavascriptDuplicate filePath={"js323"} />
//         <JavascriptDuplicate filePath={"js324"} />
//         <JavascriptDuplicate filePath={"js325"} />
//         <JavascriptDuplicate filePath={"js326"} />
//         <JavascriptDuplicate filePath={"js327"} />
//         <JavascriptDuplicate filePath={"js328"} />
//         <JavascriptDuplicate filePath={"js329"} />
//         <JavascriptDuplicate filePath={"js330"} />
//         <JavascriptDuplicate filePath={"js331"} />
//         <JavascriptDuplicate filePath={"js332"} />
//         <JavascriptDuplicate filePath={"js333"} />
//         <JavascriptDuplicate filePath={"js334"} />
//         <JavascriptDuplicate filePath={"js335"} />
//         <JavascriptDuplicate filePath={"js336"} />
//         <JavascriptDuplicate filePath={"js337"} />
//         <JavascriptDuplicate filePath={"js338"} />
//         <JavascriptDuplicate filePath={"js339"} />
//         <JavascriptDuplicate filePath={"js340"} />
//         <JavascriptDuplicate filePath={"js341"} />
//         <JavascriptDuplicate filePath={"js342"} />
//         <JavascriptDuplicate filePath={"js343"} />
//         <JavascriptDuplicate filePath={"js344"} />
//         <JavascriptDuplicate filePath={"js345"} />
//         <JavascriptDuplicate filePath={"js346"} />
//         <JavascriptDuplicate filePath={"js347"} />
//         <JavascriptDuplicate filePath={"js348"} />
//         <JavascriptDuplicate filePath={"js349"} />
//         <JavascriptDuplicate filePath={"js350"} />
//         <JavascriptDuplicate filePath={"js351"} />
//         <JavascriptDuplicate filePath={"js352"} />
//         <JavascriptDuplicate filePath={"js353"} />
//         <JavascriptDuplicate filePath={"js354"} />
//         <JavascriptDuplicate filePath={"js355"} />
//         <JavascriptDuplicate filePath={"js356"} />
//         <JavascriptDuplicate filePath={"js357"} />
//         <JavascriptDuplicate filePath={"js358"} />
//         <JavascriptDuplicate filePath={"js359"} />
//         <JavascriptDuplicate filePath={"js360"} />
//         <JavascriptDuplicate filePath={"js361"} />
//         <JavascriptDuplicate filePath={"js362"} />
//         <JavascriptDuplicate filePath={"js363"} />
//         <JavascriptDuplicate filePath={"js364"} />
//         <JavascriptDuplicate filePath={"js365"} />
//         <JavascriptDuplicate filePath={"js366"} />
//         <JavascriptDuplicate filePath={"js367"} />
//         <JavascriptDuplicate filePath={"js368"} />
//         <JavascriptDuplicate filePath={"js369"} />
//         <JavascriptDuplicate filePath={"js370"} />
//         <JavascriptDuplicate filePath={"js371"} />
//         <JavascriptDuplicate filePath={"js372"} />
//         <JavascriptDuplicate filePath={"js373"} />
//         <JavascriptDuplicate filePath={"js374"} />
//         <JavascriptDuplicate filePath={"js375"} />
//         <JavascriptDuplicate filePath={"js376"} />
//         <JavascriptDuplicate filePath={"js377"} />
//         <JavascriptDuplicate filePath={"js378"} />
//         <JavascriptDuplicate filePath={"js379"} />
//         <JavascriptDuplicate filePath={"js380"} />
//         <JavascriptDuplicate filePath={"js381"} />
//         <JavascriptDuplicate filePath={"js382"} />
//         <JavascriptDuplicate filePath={"js383"} />
//         <JavascriptDuplicate filePath={"js384"} />
//         <JavascriptDuplicate filePath={"js385"} />
//         <JavascriptDuplicate filePath={"js386"} />
//         <JavascriptDuplicate filePath={"js387"} />
//         <JavascriptDuplicate filePath={"js388"} />
//         <JavascriptDuplicate filePath={"js389"} />
//         <JavascriptDuplicate filePath={"js390"} />
//         <JavascriptDuplicate filePath={"js391"} />
//         <JavascriptDuplicate filePath={"js392"} />
//         <JavascriptDuplicate filePath={"js393"} />
//         <JavascriptDuplicate filePath={"js394"} />
//         <JavascriptDuplicate filePath={"js395"} />
//         <JavascriptDuplicate filePath={"js396"} />
//         <JavascriptDuplicate filePath={"js397"} />
//         <JavascriptDuplicate filePath={"js398"} />
//         <JavascriptDuplicate filePath={"js399"} />
//         <JavascriptDuplicate filePath={"js400"} />
//         <JavascriptDuplicate filePath={"js401"} />
//         <JavascriptDuplicate filePath={"js402"} />
//         <JavascriptDuplicate filePath={"js403"} />
//         <JavascriptDuplicate filePath={"js404"} />
//         <JavascriptDuplicate filePath={"js405"} />
//         <JavascriptDuplicate filePath={"js406"} />
//         <JavascriptDuplicate filePath={"js407"} />
//         <JavascriptDuplicate filePath={"js408"} />
//         <JavascriptDuplicate filePath={"js409"} />
//         <JavascriptDuplicate filePath={"js410"} />
//         <JavascriptDuplicate filePath={"js411"} />
//         <JavascriptDuplicate filePath={"js412"} />
//         <JavascriptDuplicate filePath={"js413"} />
//         <JavascriptDuplicate filePath={"js414"} />
//         <JavascriptDuplicate filePath={"js415"} />
//         <JavascriptDuplicate filePath={"js416"} />
//         <JavascriptDuplicate filePath={"js417"} />
//         <JavascriptDuplicate filePath={"js418"} />
//         <JavascriptDuplicate filePath={"js419"} />
//         <JavascriptDuplicate filePath={"js419"} />
//         <JavascriptDuplicate filePath={"js421"} />
//         <JavascriptDuplicate filePath={"js422"} />
//         <JavascriptDuplicate filePath={"js423"} />
//         <JavascriptDuplicate filePath={"js424"} />
//         <JavascriptDuplicate filePath={"js425"} />
//         <JavascriptDuplicate filePath={"js426"} />
//         <JavascriptDuplicate filePath={"js427"} />
//         <JavascriptDuplicate filePath={"js428"} />
//         <JavascriptDuplicate filePath={"js429"} />
//         <JavascriptDuplicate filePath={"js430"} />
//         <JavascriptDuplicate filePath={"js431"} />
//         <JavascriptDuplicate filePath={"js432"} />
//         <JavascriptDuplicate filePath={"js433"} />
//         <JavascriptDuplicate filePath={"js434"} />
//         <JavascriptDuplicate filePath={"js435"} />
//         <JavascriptDuplicate filePath={"js436"} />
//         <JavascriptDuplicate filePath={"js437"} />
//         <JavascriptDuplicate filePath={"js438"} />
//         <JavascriptDuplicate filePath={"js439"} />
//         <JavascriptDuplicate filePath={"js440"} />
//         <JavascriptDuplicate filePath={"js441"} />
//         <JavascriptDuplicate filePath={"js442"} />
//         <JavascriptDuplicate filePath={"js443"} />
//         <JavascriptDuplicate filePath={"js444"} />
//         <JavascriptDuplicate filePath={"js445"} />
//         <JavascriptDuplicate filePath={"js446"} />
//         <JavascriptDuplicate filePath={"js447"} />
//         <JavascriptDuplicate filePath={"js448"} />
//         <JavascriptDuplicate filePath={"js449"} />
//         <JavascriptDuplicate filePath={"js450"} />
//         <JavascriptDuplicate filePath={"js451"} />
//         <JavascriptDuplicate filePath={"js452"} />
//         <JavascriptDuplicate filePath={"js453"} />
//         <JavascriptDuplicate filePath={"js454"} />
//         <JavascriptDuplicate filePath={"js455"} />
//         <JavascriptDuplicate filePath={"js456"} />
//         <JavascriptDuplicate filePath={"js457"} />
//         <JavascriptDuplicate filePath={"js458"} />
//         <JavascriptDuplicate filePath={"js459"} />
//         <JavascriptDuplicate filePath={"js460"} />
//         <JavascriptDuplicate filePath={"js461"} />
//         <JavascriptDuplicate filePath={"js462"} />
//         <JavascriptDuplicate filePath={"js463"} />
//         <JavascriptDuplicate filePath={"js464"} />
//         <JavascriptDuplicate filePath={"js465"} />
//         <JavascriptDuplicate filePath={"js466"} />
//         <JavascriptDuplicate filePath={"js467"} />
//         <JavascriptDuplicate filePath={"js468"} />
//         <JavascriptDuplicate filePath={"js469"} />
//         <JavascriptDuplicate filePath={"js470"} />
//         <JavascriptDuplicate filePath={"js471"} />
//         <JavascriptDuplicate filePath={"js472"} />
//         <JavascriptDuplicate filePath={"js473"} />
//         <JavascriptDuplicate filePath={"js474"} />
//         <JavascriptDuplicate filePath={"js475"} />
//         <JavascriptDuplicate filePath={"js476"} />
//         <JavascriptDuplicate filePath={"js477"} />
//         <JavascriptDuplicate filePath={"js478"} />
//         <JavascriptDuplicate filePath={"js479"} />
//         <JavascriptDuplicate filePath={"js480"} />
//         <JavascriptDuplicate filePath={"js481"} />
//         <JavascriptDuplicate filePath={"js482"} />

//         <PythonDuplicate filePath={"py1"} />
//         <PythonDuplicate filePath={"py2"} />
//         <PythonDuplicate filePath={"py3"} />
//         <PythonDuplicate filePath={"py4"} />
//         <PythonDuplicate filePath={"py5"} />
//         <PythonDuplicate filePath={"py6"} />
//         <PythonDuplicate filePath={"py7"} />
//         <PythonDuplicate filePath={"py8"} />
//         <PythonDuplicate filePath={"py9"} />
//         <PythonDuplicate filePath={"py10"} />
//         <PythonDuplicate filePath={"py11"} />
//         <PythonDuplicate filePath={"py12"} />
//         <PythonDuplicate filePath={"py13"} />
//         <PythonDuplicate filePath={"py14"} />
//         <PythonDuplicate filePath={"py15"} />
//         <PythonDuplicate filePath={"py16"} />
//         <PythonDuplicate filePath={"py17"} />
//         <PythonDuplicate filePath={"py18"} />
//         <PythonDuplicate filePath={"py19"} />
//         <PythonDuplicate filePath={"py20"} />
//         <PythonDuplicate filePath={"py21"} />
//         <PythonDuplicate filePath={"py22"} />
//         <PythonDuplicate filePath={"py23"} />
//         <PythonDuplicate filePath={"py24"} />
//         <PythonDuplicate filePath={"py25"} />
//         <PythonDuplicate filePath={"py26"} />
//         <PythonDuplicate filePath={"py27"} />
//         <PythonDuplicate filePath={"py28"} />
//         <PythonDuplicate filePath={"py29"} />
//         <PythonDuplicate filePath={"py30"} />
//         <PythonDuplicate filePath={"py31"} />
//         <PythonDuplicate filePath={"py32"} />
//         <PythonDuplicate filePath={"py33"} />
//         <PythonDuplicate filePath={"py34"} />
//         <PythonDuplicate filePath={"py35"} />
//         <PythonDuplicate filePath={"py36"} />
//         <PythonDuplicate filePath={"py37"} />
//         <PythonDuplicate filePath={"py38"} />
//         <PythonDuplicate filePath={"py39"} />
//         <PythonDuplicate filePath={"py40"} />
//         <PythonDuplicate filePath={"py41"} />
//         <PythonDuplicate filePath={"py42"} />
//         <PythonDuplicate filePath={"py43"} />
//         <PythonDuplicate filePath={"py44"} />
//         <PythonDuplicate filePath={"py45"} />
//         <PythonDuplicate filePath={"py46"} />
//         <PythonDuplicate filePath={"py47"} />
//         <PythonDuplicate filePath={"py48"} />
//         <PythonDuplicate filePath={"py49"} />
//         <PythonDuplicate filePath={"py50"} />
//         <PythonDuplicate filePath={"py51"} />
//         <PythonDuplicate filePath={"py52"} />
//         <PythonDuplicate filePath={"py53"} />
//         <PythonDuplicate filePath={"py54"} />
//         <PythonDuplicate filePath={"py55"} />
//         <PythonDuplicate filePath={"py56"} />
//         <PythonDuplicate filePath={"py57"} />
//         <PythonDuplicate filePath={"py58"} />
//         <PythonDuplicate filePath={"py59"} />
//         <PythonDuplicate filePath={"py60"} />
//         <PythonDuplicate filePath={"py61"} />
//         <PythonDuplicate filePath={"py62"} />
//         <PythonDuplicate filePath={"py63"} />
//         <PythonDuplicate filePath={"py64"} />
//         <PythonDuplicate filePath={"py65"} />
//         <PythonDuplicate filePath={"py66"} />
//         <PythonDuplicate filePath={"py67"} />
//         <PythonDuplicate filePath={"py68"} />
//         <PythonDuplicate filePath={"py69"} />
//         <PythonDuplicate filePath={"py70"} />
//         <PythonDuplicate filePath={"py71"} />
//         <PythonDuplicate filePath={"py72"} />
//         <PythonDuplicate filePath={"py73"} />
//         <PythonDuplicate filePath={"py74"} />
//         <PythonDuplicate filePath={"py75"} />
//         <PythonDuplicate filePath={"py76"} />
//         <PythonDuplicate filePath={"py77"} />
//         <PythonDuplicate filePath={"py78"} />
//         <PythonDuplicate filePath={"py79"} />
//         <PythonDuplicate filePath={"py80"} />
//         <PythonDuplicate filePath={"py81"} />
//         <PythonDuplicate filePath={"py82"} />
//         <PythonDuplicate filePath={"py83"} />
//         <PythonDuplicate filePath={"py84"} />
//         <PythonDuplicate filePath={"py85"} />
//         <PythonDuplicate filePath={"py86"} />
//         <PythonDuplicate filePath={"py87"} />
//         <PythonDuplicate filePath={"py88"} />
//         <PythonDuplicate filePath={"py89"} />
//         <PythonDuplicate filePath={"py90"} />
//         <PythonDuplicate filePath={"py91"} />
//         <PythonDuplicate filePath={"py92"} />
//         <PythonDuplicate filePath={"py93"} />
//         <PythonDuplicate filePath={"py94"} />
//         <PythonDuplicate filePath={"py95"} />
//         <PythonDuplicate filePath={"py96"} />
//         <PythonDuplicate filePath={"py97"} />
//         <PythonDuplicate filePath={"py98"} />
//         <PythonDuplicate filePath={"py99"} />
//         <PythonDuplicate filePath={"py100"} />
//         <PythonDuplicate filePath={"py101"} />
//         <PythonDuplicate filePath={"py102"} />
//         <PythonDuplicate filePath={"py103"} />
//         <PythonDuplicate filePath={"py104"} />
//         <PythonDuplicate filePath={"py105"} />
//         <PythonDuplicate filePath={"py106"} />
//         <PythonDuplicate filePath={"py107"} />
//         <PythonDuplicate filePath={"py108"} />
//         <PythonDuplicate filePath={"py109"} />
//         <PythonDuplicate filePath={"py110"} />
//         <PythonDuplicate filePath={"py111"} />
//         <PythonDuplicate filePath={"py112"} />
//         <PythonDuplicate filePath={"py113"} />
//         <PythonDuplicate filePath={"py114"} />
//         <PythonDuplicate filePath={"py115"} />
//         <PythonDuplicate filePath={"py116"} />
//         <PythonDuplicate filePath={"py117"} />
//         <PythonDuplicate filePath={"py118"} />
//         <PythonDuplicate filePath={"py119"} />
//         <PythonDuplicate filePath={"py120"} />
//         <PythonDuplicate filePath={"py121"} />
//         <PythonDuplicate filePath={"py122"} />
//         <PythonDuplicate filePath={"py123"} />
//         <PythonDuplicate filePath={"py124"} />
//         <PythonDuplicate filePath={"py125"} />
//         <PythonDuplicate filePath={"py126"} />
//         <PythonDuplicate filePath={"py127"} />
//         <PythonDuplicate filePath={"py128"} />
//         <PythonDuplicate filePath={"py129"} />
//         <PythonDuplicate filePath={"py130"} />
//         <PythonDuplicate filePath={"py131"} />
//         <PythonDuplicate filePath={"py132"} />
//         <PythonDuplicate filePath={"py133"} />
//         <PythonDuplicate filePath={"py134"} />
//         <PythonDuplicate filePath={"py135"} />
//         <PythonDuplicate filePath={"py136"} />
//         <PythonDuplicate filePath={"py137"} />
//         <PythonDuplicate filePath={"py138"} />
//         <PythonDuplicate filePath={"py139"} />
//         <PythonDuplicate filePath={"py140"} />
//         <PythonDuplicate filePath={"py141"} />
//         <PythonDuplicate filePath={"py142"} />
//         <PythonDuplicate filePath={"py143"} />
//         <PythonDuplicate filePath={"py144"} />
//         <PythonDuplicate filePath={"py145"} />
//         <PythonDuplicate filePath={"py146"} />
//         <PythonDuplicate filePath={"py147"} />
//         <PythonDuplicate filePath={"py148"} />
//         <PythonDuplicate filePath={"py149"} />
//         <PythonDuplicate filePath={"py150"} />
//         <PythonDuplicate filePath={"py151"} />
//         <PythonDuplicate filePath={"py152"} />
//         <PythonDuplicate filePath={"py153"} />
//         <PythonDuplicate filePath={"py154"} />
//         <PythonDuplicate filePath={"py155"} />
//         <PythonDuplicate filePath={"py156"} />
//         <PythonDuplicate filePath={"py157"} />
//         <PythonDuplicate filePath={"py158"} />
//         <PythonDuplicate filePath={"py159"} />
//         <PythonDuplicate filePath={"py160"} />
//         <PythonDuplicate filePath={"py161"} />
//         <PythonDuplicate filePath={"py162"} />
//         <PythonDuplicate filePath={"py163"} />
//         <PythonDuplicate filePath={"py164"} />
//         <PythonDuplicate filePath={"py165"} />
//         <PythonDuplicate filePath={"py166"} />
//         <PythonDuplicate filePath={"py167"} />
//         <PythonDuplicate filePath={"py168"} />
//         <PythonDuplicate filePath={"py169"} />
//         <PythonDuplicate filePath={"py170"} />
//         <PythonDuplicate filePath={"py171"} />
//         <PythonDuplicate filePath={"py172"} />
//         <PythonDuplicate filePath={"py173"} />
//         <PythonDuplicate filePath={"py174"} />
//         <PythonDuplicate filePath={"py175"} />
//         <PythonDuplicate filePath={"py176"} />
//         <PythonDuplicate filePath={"py177"} />
//         <PythonDuplicate filePath={"py178"} />
//         <PythonDuplicate filePath={"py179"} />
//         <PythonDuplicate filePath={"py180"} />
//         <PythonDuplicate filePath={"py181"} />
//         <PythonDuplicate filePath={"py182"} />
//         <PythonDuplicate filePath={"py183"} />
//         <PythonDuplicate filePath={"py184"} />
//         <PythonDuplicate filePath={"py185"} />
//         <PythonDuplicate filePath={"py186"} />
//         <PythonDuplicate filePath={"py187"} />
//         <PythonDuplicate filePath={"py188"} />
//         <PythonDuplicate filePath={"py189"} />
//         <PythonDuplicate filePath={"py190"} />
//         <PythonDuplicate filePath={"py191"} />
//         <PythonDuplicate filePath={"py192"} />
//         <PythonDuplicate filePath={"py193"} />
//         <PythonDuplicate filePath={"py194"} />
//         <PythonDuplicate filePath={"py195"} />
//         <PythonDuplicate filePath={"py196"} />
//         <PythonDuplicate filePath={"py197"} />
//         <PythonDuplicate filePath={"py198"} />
//         <PythonDuplicate filePath={"py199"} />
//         <PythonDuplicate filePath={"py200"} />
//         <PythonDuplicate filePath={"py201"} />
//         <PythonDuplicate filePath={"py202"} />
//         <PythonDuplicate filePath={"py203"} />
//         <PythonDuplicate filePath={"py204"} />
//         <PythonDuplicate filePath={"py205"} />
//         <PythonDuplicate filePath={"py206"} />
//         <PythonDuplicate filePath={"py207"} />
//         <PythonDuplicate filePath={"py208"} />
//         <PythonDuplicate filePath={"py209"} />
//         <PythonDuplicate filePath={"py210"} />
//         <PythonDuplicate filePath={"py211"} />
//         <PythonDuplicate filePath={"py212"} />
//         <PythonDuplicate filePath={"py213"} />
//         <PythonDuplicate filePath={"py214"} />
//         <PythonDuplicate filePath={"py215"} />
//         <PythonDuplicate filePath={"py216"} />
//         <PythonDuplicate filePath={"py217"} />
//         <PythonDuplicate filePath={"py218"} />
//         <PythonDuplicate filePath={"py219"} />
//         <PythonDuplicate filePath={"py220"} />
//         <PythonDuplicate filePath={"py221"} />
//         <PythonDuplicate filePath={"py222"} />
//         <PythonDuplicate filePath={"py223"} />
//         <PythonDuplicate filePath={"py224"} />
//         <PythonDuplicate filePath={"py225"} />
//         <PythonDuplicate filePath={"py226"} />
//         <PythonDuplicate filePath={"py227"} />
//         <PythonDuplicate filePath={"py228"} />
//         <PythonDuplicate filePath={"py229"} />
//         <PythonDuplicate filePath={"py230"} />
//         <PythonDuplicate filePath={"py231"} />
//         <PythonDuplicate filePath={"py232"} />
//         <PythonDuplicate filePath={"py233"} />
//         <PythonDuplicate filePath={"py234"} />
//         <PythonDuplicate filePath={"py235"} />
//         <PythonDuplicate filePath={"py236"} />
//         <PythonDuplicate filePath={"py237"} />
//         <PythonDuplicate filePath={"py238"} />
//         <PythonDuplicate filePath={"py239"} />
//         <PythonDuplicate filePath={"py240"} />
//         <PythonDuplicate filePath={"py241"} />
//         <PythonDuplicate filePath={"py242"} />
//         <PythonDuplicate filePath={"py243"} />
//         <PythonDuplicate filePath={"py244"} />
//         <PythonDuplicate filePath={"py245"} />
//         <PythonDuplicate filePath={"py246"} />
//         <PythonDuplicate filePath={"py247"} />
//         <PythonDuplicate filePath={"py248"} />
//         <PythonDuplicate filePath={"py249"} />
//         <PythonDuplicate filePath={"py250"} />
//         <PythonDuplicate filePath={"py251"} />
//         <PythonDuplicate filePath={"py252"} />
//         <PythonDuplicate filePath={"py253"} />
//         <PythonDuplicate filePath={"py254"} />
//         <PythonDuplicate filePath={"py255"} />
//         <PythonDuplicate filePath={"py256"} />
//         <PythonDuplicate filePath={"py257"} />
//         <PythonDuplicate filePath={"py258"} />
//         <PythonDuplicate filePath={"py259"} />
//         <PythonDuplicate filePath={"py260"} />
//         <PythonDuplicate filePath={"py261"} />
//         <PythonDuplicate filePath={"py262"} />
//         <PythonDuplicate filePath={"py263"} />
//         <PythonDuplicate filePath={"py264"} />
//         <PythonDuplicate filePath={"py265"} />
//         <PythonDuplicate filePath={"py266"} />
//         <PythonDuplicate filePath={"py267"} />
//         <PythonDuplicate filePath={"py268"} />
//         <PythonDuplicate filePath={"py269"} />
//         <PythonDuplicate filePath={"py270"} />
//         <PythonDuplicate filePath={"py271"} />
//         <PythonDuplicate filePath={"py272"} />
//         <PythonDuplicate filePath={"py273"} />
//         <PythonDuplicate filePath={"py274"} />
//         <PythonDuplicate filePath={"py275"} />
//         <PythonDuplicate filePath={"py276"} />
//         <PythonDuplicate filePath={"py277"} />
//         <PythonDuplicate filePath={"py278"} />
//         <PythonDuplicate filePath={"py279"} />
//         <PythonDuplicate filePath={"py280"} />
//         <PythonDuplicate filePath={"py281"} />
//         <PythonDuplicate filePath={"py282"} />
//         <PythonDuplicate filePath={"py283"} />
//         <PythonDuplicate filePath={"py284"} />
//         <PythonDuplicate filePath={"py285"} />
//         <PythonDuplicate filePath={"py286"} />
//         <PythonDuplicate filePath={"py287"} />
//         <PythonDuplicate filePath={"py288"} />
//         <PythonDuplicate filePath={"py289"} />
//         <PythonDuplicate filePath={"py290"} />
//         <PythonDuplicate filePath={"py291"} />
//         <PythonDuplicate filePath={"py292"} />
//         <PythonDuplicate filePath={"py293"} />
//         <PythonDuplicate filePath={"py294"} />
//         <PythonDuplicate filePath={"py295"} />
//         <PythonDuplicate filePath={"py296"} />
//         <PythonDuplicate filePath={"py297"} />
//         <PythonDuplicate filePath={"py298"} />
//         <PythonDuplicate filePath={"py299"} />
//         <PythonDuplicate filePath={"py300"} />
//         <PythonDuplicate filePath={"py301"} />
//         <PythonDuplicate filePath={"py302"} />
//         <PythonDuplicate filePath={"py303"} />
//         <PythonDuplicate filePath={"py304"} />
//         <PythonDuplicate filePath={"py305"} />
//         <PythonDuplicate filePath={"py306"} />
//         <PythonDuplicate filePath={"py307"} />
//         <PythonDuplicate filePath={"py308"} />
//         <PythonDuplicate filePath={"py309"} />
//         <PythonDuplicate filePath={"py310"} />
//         <PythonDuplicate filePath={"py311"} />
//         <PythonDuplicate filePath={"py312"} />
//         <PythonDuplicate filePath={"py313"} />
//         <PythonDuplicate filePath={"py314"} />
//         <PythonDuplicate filePath={"py315"} />
//         <PythonDuplicate filePath={"py316"} />
//         <PythonDuplicate filePath={"py317"} />
//         <PythonDuplicate filePath={"py318"} />
//         <PythonDuplicate filePath={"py319"} />
//         <PythonDuplicate filePath={"py320"} />
//         <PythonDuplicate filePath={"py321"} />
//         <PythonDuplicate filePath={"py322"} />
//         <PythonDuplicate filePath={"py323"} />
//         <PythonDuplicate filePath={"py324"} />
//         <PythonDuplicate filePath={"py325"} />
//         <PythonDuplicate filePath={"py326"} />
//         <PythonDuplicate filePath={"py327"} />
//         <PythonDuplicate filePath={"py328"} />
//         <PythonDuplicate filePath={"py329"} />
//         <PythonDuplicate filePath={"py330"} />
//         <PythonDuplicate filePath={"py331"} />
//         <PythonDuplicate filePath={"py332"} />
//         <PythonDuplicate filePath={"py333"} />
//         <PythonDuplicate filePath={"py334"} />
//         <PythonDuplicate filePath={"py335"} />
//         <PythonDuplicate filePath={"py336"} />
//         <PythonDuplicate filePath={"py337"} />
//         <PythonDuplicate filePath={"py338"} />
//         <PythonDuplicate filePath={"py339"} />
//         <PythonDuplicate filePath={"py340"} />
//         <PythonDuplicate filePath={"py341"} />
//         <PythonDuplicate filePath={"py342"} />
//         <PythonDuplicate filePath={"py343"} />
//         <PythonDuplicate filePath={"py344"} />
//         <PythonDuplicate filePath={"py345"} />
//         <PythonDuplicate filePath={"py346"} />
//         <PythonDuplicate filePath={"py347"} />
//         <PythonDuplicate filePath={"py348"} />
//         <PythonDuplicate filePath={"py349"} />
//         <PythonDuplicate filePath={"py350"} />
//         <PythonDuplicate filePath={"py351"} />
//         <PythonDuplicate filePath={"py352"} />
//         <PythonDuplicate filePath={"py353"} />
//         <PythonDuplicate filePath={"py354"} />
//         <PythonDuplicate filePath={"py355"} />
//         <PythonDuplicate filePath={"py356"} />
//         <PythonDuplicate filePath={"py357"} />
//         <PythonDuplicate filePath={"py358"} />
//         <PythonDuplicate filePath={"py359"} />
//         <PythonDuplicate filePath={"py360"} />
//         <PythonDuplicate filePath={"py361"} />
//         <PythonDuplicate filePath={"py362"} />
//         <PythonDuplicate filePath={"py363"} />
//         <PythonDuplicate filePath={"py364"} />
//         <PythonDuplicate filePath={"py365"} />
//         <PythonDuplicate filePath={"py366"} />
//         <PythonDuplicate filePath={"py367"} />
//         <PythonDuplicate filePath={"py368"} />
//         <PythonDuplicate filePath={"py369"} />
//         <PythonDuplicate filePath={"py370"} />
//         <PythonDuplicate filePath={"py371"} />
//         <PythonDuplicate filePath={"py372"} />
//         <PythonDuplicate filePath={"py373"} />
//         <PythonDuplicate filePath={"py374"} />
//         <PythonDuplicate filePath={"py375"} />
//         <PythonDuplicate filePath={"py376"} />
//         <PythonDuplicate filePath={"py377"} />
//         <PythonDuplicate filePath={"py378"} />
//         <PythonDuplicate filePath={"py379"} />
//         <PythonDuplicate filePath={"py380"} />
//         <PythonDuplicate filePath={"py381"} />
//         <PythonDuplicate filePath={"py382"} />
//         <PythonDuplicate filePath={"py383"} />
//         <PythonDuplicate filePath={"py384"} />
//         <PythonDuplicate filePath={"py385"} />
//         <PythonDuplicate filePath={"py386"} />
//         <PythonDuplicate filePath={"py387"} />
//         <PythonDuplicate filePath={"py388"} />
//         <PythonDuplicate filePath={"py389"} />
//         <PythonDuplicate filePath={"py390"} />
//         <PythonDuplicate filePath={"py391"} />
//         <PythonDuplicate filePath={"py392"} />
//         <PythonDuplicate filePath={"py393"} />
//         <PythonDuplicate filePath={"py394"} />
//         <PythonDuplicate filePath={"py395"} />
//         <PythonDuplicate filePath={"py396"} />
//         <PythonDuplicate filePath={"py397"} />
//         <PythonDuplicate filePath={"py398"} />
//         <PythonDuplicate filePath={"py399"} />
//         <PythonDuplicate filePath={"py400"} />
//         <PythonDuplicate filePath={"py401"} />
//         <PythonDuplicate filePath={"py402"} />
//         <PythonDuplicate filePath={"py403"} />
//         <PythonDuplicate filePath={"py404"} />
//         <PythonDuplicate filePath={"py405"} />
//         <PythonDuplicate filePath={"py406"} />
//         <PythonDuplicate filePath={"py407"} />
//         <PythonDuplicate filePath={"py408"} />
//         <PythonDuplicate filePath={"py409"} />
//         <PythonDuplicate filePath={"py410"} />
//         <PythonDuplicate filePath={"py411"} />
//         <PythonDuplicate filePath={"py412"} />
//         <PythonDuplicate filePath={"py413"} />
//         <PythonDuplicate filePath={"py414"} />
//         <PythonDuplicate filePath={"py415"} />
//         <PythonDuplicate filePath={"py416"} />
//         <PythonDuplicate filePath={"py417"} />
//         <PythonDuplicate filePath={"py418"} />
//         <PythonDuplicate filePath={"py419"} />
//         <PythonDuplicate filePath={"py420"} />
//         <PythonDuplicate filePath={"py421"} />
//         <PythonDuplicate filePath={"py422"} />
//         <PythonDuplicate filePath={"py423"} />
//         <PythonDuplicate filePath={"py424"} />
//         <PythonDuplicate filePath={"py425"} />
//         <PythonDuplicate filePath={"py426"} />
//         <PythonDuplicate filePath={"py427"} />
//         <PythonDuplicate filePath={"py428"} />
//         <PythonDuplicate filePath={"py429"} />
//         <PythonDuplicate filePath={"py430"} />
//         <PythonDuplicate filePath={"py431"} />
//         <PythonDuplicate filePath={"py432"} />
//         <PythonDuplicate filePath={"py433"} />
//         <PythonDuplicate filePath={"py434"} />
//         <PythonDuplicate filePath={"py435"} />
//         <PythonDuplicate filePath={"py441"} />
//       </section>
//     </main>
//   );
// };

// export default LandingPage;

// "use client";
// import React, { useState, useEffect } from "react";

// // Import your components
// import CategoriesGrid from "./Category";
// import { Duplicate as BashDuplicate } from "./Bash/page";
// import { Duplicate as CDuplicate } from "./C/page";
// import { Duplicate as CSSDuplicate } from "./CSS/page";
// import { Duplicate as HTMLDuplicate } from "./HTML/page";
// import { Duplicate as JavaDuplicate } from "./Java/page";
// import { Duplicate as JavascriptDuplicate } from "./Javascript/page";
// import { Duplicate as PythonDuplicate } from "./Python/page";

// // Sample data for file paths (replace with your actual data)
// const bashFiles = Array.from({ length: 100 }, (_, i) => `bash${i + 1}`);
// const cFiles = Array.from({ length: 100 }, (_, i) => `c${i + 1}`);
// const cssFiles = Array.from({ length: 100 }, (_, i) => `css${i + 1}`);
// const htmlFiles = Array.from({ length: 100 }, (_, i) => `html${i + 1}`);
// const javaFiles = Array.from({ length: 100 }, (_, i) => `java${i + 1}`);
// const jsFiles = Array.from({ length: 100 }, (_, i) => `js${i + 1}`);
// const pythonFiles = Array.from({ length: 100 }, (_, i) => `python${i + 1}`);

// // Shuffle function (Fisher-Yates algorithm)
// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// const LandingPage = () => {
//   const [shuffledFiles, setShuffledFiles] = useState([]);
//   const [page, setPage] = useState(1);

//   const itemsPerPage = 20; // Number of items to display per page

//   // Combine all files into one array and shuffle them
//   useEffect(() => {
//     const allFiles = [
//       ...bashFiles.map((filePath) => ({ filePath, Component: BashDuplicate })),
//       ...cFiles.map((filePath) => ({ filePath, Component: CDuplicate })),
//       ...cssFiles.map((filePath) => ({ filePath, Component: CSSDuplicate })),
//       ...htmlFiles.map((filePath) => ({ filePath, Component: HTMLDuplicate })),
//       ...javaFiles.map((filePath) => ({ filePath, Component: JavaDuplicate })),
//       ...jsFiles.map((filePath) => ({
//         filePath,
//         Component: JavascriptDuplicate,
//       })),
//       ...pythonFiles.map((filePath) => ({
//         filePath,
//         Component: PythonDuplicate,
//       })),
//     ];
//     setShuffledFiles(shuffleArray(allFiles));
//   }, []);

//   // Function to render components for the current page
//   const renderComponents = () => {
//     const start = 0;
//     const end = page * itemsPerPage;
//     return shuffledFiles
//       .slice(start, end)
//       .map(({ filePath, Component }, index) => (
//         <Component key={index} filePath={filePath} />
//       ));
//   };

//   return (
//     <main className="landing-page">
//       <section>
//         <h3 className="categories-heading">Explore by Category</h3>
//         <CategoriesGrid />
//       </section>

//       {/* Mixed Components Section */}
//       <section>
//         {renderComponents()}
//         {shuffledFiles.length > page * itemsPerPage && (
//           <button
//             className="load-more-button"
//             onClick={() => setPage(page + 1)}
//           >
//             Load More
//           </button>
//         )}
//       </section>
//     </main>
//   );
// };

// export default LandingPage;

"use client";
import React, { useState, useEffect } from "react";

// Import your components
import CategoriesGrid from "./Category";
import { Duplicate as BashDuplicate } from "./Bash/page";
import { Duplicate as CDuplicate } from "./C/page";
import { Duplicate as CSSDuplicate } from "./CSS/page";
import { Duplicate as HTMLDuplicate } from "./HTML/page";
import { Duplicate as JavaDuplicate } from "./Java/page";
import { Duplicate as JavascriptDuplicate } from "./Javascript/page";
import { Duplicate as PythonDuplicate } from "./Python/page";

// Sample data for file paths (replace with your actual data)
const bashFiles = Array.from({ length: 100 }, (_, i) => `bash${i + 1}`);
const cFiles = Array.from({ length: 100 }, (_, i) => `c${i + 1}`);
const cssFiles = Array.from({ length: 100 }, (_, i) => `css${i + 1}`);
const htmlFiles = Array.from({ length: 100 }, (_, i) => `html${i + 1}`);
const javaFiles = Array.from({ length: 100 }, (_, i) => `java${i + 1}`);
const jsFiles = Array.from({ length: 100 }, (_, i) => `js${i + 1}`);
const pythonFiles = Array.from({ length: 100 }, (_, i) => `python${i + 1}`);

// Shuffle function (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const LandingPage = () => {
  const [shuffledFiles, setShuffledFiles] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 20; // Number of items to display per page

  // Combine all files into one array and shuffle them
  useEffect(() => {
    const allFiles = [
      ...bashFiles.map((filePath) => ({ filePath, Component: BashDuplicate })),
      ...cFiles.map((filePath) => ({ filePath, Component: CDuplicate })),
      ...cssFiles.map((filePath) => ({ filePath, Component: CSSDuplicate })),
      ...htmlFiles.map((filePath) => ({ filePath, Component: HTMLDuplicate })),
      ...javaFiles.map((filePath) => ({ filePath, Component: JavaDuplicate })),
      ...jsFiles.map((filePath) => ({
        filePath,
        Component: JavascriptDuplicate,
      })),
      ...pythonFiles.map((filePath) => ({
        filePath,
        Component: PythonDuplicate,
      })),
    ];
    setShuffledFiles(shuffleArray(allFiles));
  }, []);

  // Function to render components for the current page
  const renderComponents = () => {
    const start = 0;
    const end = page * itemsPerPage;
    return shuffledFiles
      .slice(start, end)
      .map(({ filePath, Component }, index) => (
        <Component key={index} filePath={filePath} />
      ));
  };

  // Function to download all images across all categories
  const handleDownloadAll = async () => {
    try {
      // Loop through all shuffled files and trigger their download functionality
      for (const { filePath, Component } of shuffledFiles) {
        // Simulate clicking the download button for each component
        const componentInstance = <Component filePath={filePath} />;
        if (componentInstance.props.handleDownloadAll) {
          await componentInstance.props.handleDownloadAll();
        }
      }
    } catch (error) {
      console.error("Error downloading all images:", error);
    }
  };

  return (
    <main className="landing-page">
      <section>
        <h3 className="categories-heading">Explore by Category</h3>
        <CategoriesGrid />
      </section>

      {/* Mixed Components Section */}
      <section>
        {renderComponents()}
        {shuffledFiles.length > page * itemsPerPage && (
          <button
            className="load-more-button"
            onClick={() => setPage(page + 1)}
          >
            Load More
          </button>
        )}
      </section>

      {/* Global Download Button */}
      <button
        className="global-download-button"
        onClick={handleDownloadAll}
        aria-label="Download All Images"
      >
        Download All Images
      </button>
    </main>
  );
};

export default LandingPage;
