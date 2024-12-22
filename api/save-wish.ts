import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { wish } = req.body;

    if (!wish) {
      return res.status(400).json({ message: "No wish provided" });
    }

    const filePath = path.join(process.cwd(), "wishes.txt");

    // Ghi dữ liệu vào file
    try {
      fs.appendFileSync(filePath, `${wish}\n`);
      return res.status(200).json({ message: "Wish saved successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error saving wish", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
