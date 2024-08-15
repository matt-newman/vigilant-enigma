import { getData } from "../utils";

const fileName = 'recent_activity.json';

export async function GET(request: Request) {
  return getData(fileName);
}
