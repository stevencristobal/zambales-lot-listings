import fs from "fs";
import path from "path";
import Papa from "papaparse";

import { Property } from "@/types/property";


// =====================================================
// LOAD PROPERTIES CSV
// =====================================================


export function loadPropertiesCSV(): Property[] {


  const filePath = path.join(
    process.cwd(),
    "data",
    "properties.csv"
  );


  const file = fs.readFileSync(
    filePath,
    "utf8"
  );


  const result = Papa.parse(
    file,
    {
      header: true,
      skipEmptyLines: true,
    }
  );


  const properties =
    result.data.map(
      (item: any) => {


        return {


          ...item,


          // LOT DETAILS

          lotAreaMin:
            Number(item.lotAreaMin),

          lotAreaMax:
            Number(item.lotAreaMax),



          // PRICE DETAILS

          price:
            Number(item.price),

          pricePerSqm:
            Number(item.pricePerSqm),

          reservationFee:
            Number(item.reservationFee),



          // BOOLEAN

          featured:
            item.featured === "true" ||
            item.featured === "YES",



          // IMAGE GALLERY

          images:

            item.images

              ? item.images.split("|")

              : item.mainImage

                ? [item.mainImage]

                : ["/images/no-image.jpg"],



        } as Property;


      }

    );


  return properties;


}