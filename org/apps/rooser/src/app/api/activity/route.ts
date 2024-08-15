import { getData } from "../utils";

const fileName = 'recent_activity.json';

export async function GET() {
  return getData(fileName);
}
