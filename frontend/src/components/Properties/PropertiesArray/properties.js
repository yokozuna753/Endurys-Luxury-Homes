import {
  bathroom9669,
  bathtub9669,
  closet9669,
  familyRoom9669,
  garage9669,
  kitchen9669,
  livingRoom9669,
  main9669,
  nightShot9669,
  court9669,
} from "../../../assets/Miami-Dade/9669-images";
import {
  aerial9765,
  bathroom9765,
  front9765,
  kitchen9765,
  livingRoom9765,
  main9765,
  nightBackshot9765,
  nightTables9765,
  room9765,
} from "../../../assets/Miami-Dade/9765-images";
import {
  famRoom11035,
  kitchen11035,
  kitchenTwo11035,
  livingRooom11035,
  main11035,
} from "../../../assets/Miami-Dade/11035-images";
import {
  bathroom6290,
  kitchen6290,
  livingRoom6290,
  main6290,
  kitchenTwo6290,
  pool6290,
} from "../../../assets/Pinecrest/6290-images";
import { backPool6700, main6700 } from "../../../assets/Pinecrest/6700-images";
import {
  backPool10801,
  main10801,
} from "../../../assets/Pinecrest/10801-images";

export const propertiesObj = {
  miamiDade: [
    {
      id: 1,
      address: "9669 SW 96 ST",
      location: "MIAMI-DADE",
      images: {
        main9669,
        bathroom9669,
        bathtub9669,
        closet9669,
        familyRoom9669,
        garage9669,
        kitchen9669,
        livingRoom9669,
        nightShot9669,
        court9669,
      },
    },
    {
      id: 2,
      address: "9765 SW 110 ST",
      location: "MIAMI-DADE",
      images: {
        main9765,
        aerial9765,
        bathroom9765,
        front9765,
        kitchen9765,
        livingRoom9765,
        nightBackshot9765,
        nightTables9765,
        room9765,
      },
    },
    {
      id: 3,
      address: "11035 SW 93 ST",
      location: "MIAMI-DADE",
      images: {
        main11035,
        famRoom11035,
        kitchen11035,
        kitchenTwo11035,
        livingRooom11035,
      },
    },
  ],

  pinecrest: [
    {
      id: 4,
      address: "6290 SW 130 TER",
      location: "PINECREST",
      images: {
        main6290,
        bathroom6290,
        kitchen6290,
        livingRoom6290,
        kitchenTwo6290,
        pool6290,
      },
    },
    {
      id: 5,
      address: "6700 SW 115 ST",
      location: "PINECREST",
      images: {
        main6700,
        backPool6700,
      },
    },
    {
      id: 6,
      address: "10801 SW 67 AVE",
      location: "PINECREST",
      images: {
        main10801,
        backPool10801,
      },
    },
  ],
};
