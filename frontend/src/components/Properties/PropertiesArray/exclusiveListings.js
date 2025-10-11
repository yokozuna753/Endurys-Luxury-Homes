import {
  beachAccess8223Estero,
  dock8223Estero,
  lot8223Estero,
  main8223Estero,
  pool8223Estero,
} from "../../../assets/Lee/8223-Estero-Blvd-Images/index";
import {
  back16700,
  backPool6700,
  front,
  front2,
  main6700,
} from "../../../assets/Pinecrest/6700-images";

//* Properties Below

/* 
exclusiveProperties = {
county1:[
            property1: {...info}, property2: {...info}
        ],
county2:[
            property3: {...info}, property4: {...info}
        ],
}
*/

export const exclusiveProperties = {
  lee: [
    {
      id: 11,
      address: "8223 Estero Blvd, Fort Myers Beach, FL, 33931",
      location: "lee",
      status: "EXCLUSIVE",
      images: [
        main8223Estero,
        beachAccess8223Estero,
        dock8223Estero,
        lot8223Estero,
        pool8223Estero,
      ],
      heading: "",
      description: `Luxury residence located at 8223 Estero Blvd, in Fort Myer's prestigious St. Andrews Country Club. Designed by Hollub Group, it features 6 bedrooms, 8.2 bathrooms, an office, a gym, and a media room. The gourmet kitchen and dual-bath master suite are strikingly elegant. It offers over 11.954 square feet of construction on a 0.37-acre lot. Resort-like exterior with a pool, spa, summer kitchen, and lake views. Includes an elevator, a 3-car garage, and high-end finishes throughout.`,
      sellPrice: "$1,100,000",
      beds: 2,
      baths: 3,
      livingArea: "1,824",
    },
  ],
  "miami-dade": [],
  pinecrest: [
    {
      id: 5,
      address: "6700 SW 115 ST, PINECREST, FL 33156, United States",
      location: "pinecrest",
      status: "EXCLUSIVE",
      images: [main6700, backPool6700, back16700, front, front2],
      heading: "",
      description: `Luxury residence located at 6700 SW 115 ST, in Pinecrest's prestigious area. Designed by Hollub Group, it features 4 bedrooms, 4 bathrooms, an office, and modern amenities. The gourmet kitchen and master suite are elegantly designed. It offers over 3,931 square feet of construction on a beautiful lot. Resort-like exterior with a pool, spa, and outdoor living space. Includes high-end finishes throughout.`,
      sellPrice: "$2,995,000",
      beds: 4,
      baths: 4,
      livingArea: "3,931",
    },
  ],
  westcoast: [],
};
