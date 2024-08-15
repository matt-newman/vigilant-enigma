import { NextResponse } from "next/server";
import { promises as fs } from 'fs';

const dataDirectory = process.cwd() + '/src/app/data/';
const fileName = 'recent_activity.json';
const filePath = dataDirectory + fileName;

export async function GET() {
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  return NextResponse.json( data );

}