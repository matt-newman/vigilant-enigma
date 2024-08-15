import { NextResponse } from "next/server";
import { promises as fs } from 'fs';

import { DATA_PATH } from "apps/rooser/src/constants";

export const getData = async ( dataFilename:string ) => {
    const filePath = DATA_PATH + dataFilename;
    const file = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(file);
  
    return NextResponse.json( data );
}
