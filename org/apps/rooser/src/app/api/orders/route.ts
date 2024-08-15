import { getData } from "../utils";

const fileName = 'accepted_orders.json';

export async function GET() {
  return getData(fileName);
}
