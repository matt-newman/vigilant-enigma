import { getData } from "../utils";

const fileName = 'live_demand.json';

export async function GET() {
  return getData(fileName);
}
