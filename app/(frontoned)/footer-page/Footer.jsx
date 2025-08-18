// import React from 'react'

// const Footer = () => {

//     const amfisabilinks = [
//         {
//             title: "Risk Factors ",
//             link: "/footer-page/risk-factors"
//         },
//         {
//             title: "Terms & Conditions ",
//             link: "/footer-page/terms-conditions"
//         },
//         {
//             title: "SID/SAI/KIM ",
//             link: "https://www.sebi.gov.in/filings/mutual-funds.html",
//             target: "_black"
//         },
//         {
//             title: "Code of Conduct ",
//             link: "/images/AMFI_Code-of-Conduct.pdf",
//             target: "_black"

//         },
//         {
//             title: "Investor Grievance Redressal ",
//             link: "/footer-page/investor-grievance-redressal"
//         },
//         {
//             title: "Important links",
//             link: "/footer-page/important-links"
//         },
//         {
//             title: "SEBI Circulars ",
//             link: "https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListingAll=yes&search=Mutual+Funds",
//             target: "_black"
//         },
//     ]



//     return (
//         <div>
//             <div className="text-gray-50 py-3 md:px-1 px-4 text-center">
//                 <p className="py-1 text-center">
//                     {sitedata?.websiteName} is an AMFI Registered Mutual Fund
//                     Distributor.
//                 </p>
//                 <div className={styles.footersabiLink}>
//                     <ul>
//                         {amfisabilinks?.map((sub, index) => (
//                             <li key={index}>
//                                 <Link href={sub?.link} target={`${sub?.target ? sub?.target : "_self"}`}  >{sub?.title}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <p className="py-2 text-center">
//                     Disclaimer: Mutual Fund investments are subject to market risks,
//                     read all scheme related documents carefully. The NAVs of the schemes
//                     may go up or down depending upon the factors and forces affecting
//                     the securities market including the fluctuations in the interest
//                     rates. The past performance of the mutual funds is not necessarily
//                     indicative of future performance of the schemes. The Mutual Fund is
//                     not guaranteeing or assuring any dividend under any of the schemes
//                     and the same is subject to the availability and adequacy
//                     distributable surplus.
//                 </p>
//                 <p className="py-2 text-center">
//                     {sitedata?.websiteName} makes no warranties or representations,
//                     express or implied, on products offered through the platform of{" "}
//                     {sitedata?.websiteName}. It accepts no liability for any damages or
//                     losses, however, caused, in connection with the use of, or on the
//                     reliance of its product or related services. Terms and conditions of
//                     the website are applicable. Investments in Securities markets are
//                     subject to market risks, read all the related documents carefully
//                     before investing.
//                 </p>
//             </div>
//             <div className="text-gray-50 py-3 flex gap-x-3 justify-center">
//                 <div className="flex gap-x-8 justify-center">
//                     <div className="flex gap-x-3 justify-center">
//                         <Image
//                             src={"/images/amfi-logo.jpg"}
//                             width={100}
//                             height={100}
//                             alt="image"
//                             className="rounded"
//                         />
//                         <div>
//                             <p>ARN - {arn[0]?.arn}</p>
//                             <p>EUIN - {arn[0]?.euins[0]?.euin}</p>
//                         </div>
//                         <Image
//                             src={"/images/mutualfund.png"}
//                             width={250}
//                             height={100}
//                             alt="image"
//                             className="rounded"
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className="text-gray-50 w-full mx-auto max-w-screen-xl p-4 md:flex md:justify-between border-t border-gray-300">
//                 <p className="sm:text-center">
//                     © 2025{" "}
//                     <Link href="/" className="hover:underline">
//                         {sitedata?.websiteName}
//                     </Link>
//                     . All Rights Reserved.
//                 </p>
//                 <ul className="flex flex-wrap items-center mt-3  sm:mt-0">
//                     <li>
//                         <p>Designed & Developed by <Link href={"https://www.redvisiontechnologies.com/"} target="_blank">REDVision Global Technologies</Link></p>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Footer
