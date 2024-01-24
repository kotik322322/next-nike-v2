import dbConnect from "@/lib/dbConnect";
import Item from "@/lib/models/Item";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(request.url);
  const query: string | null = searchParams.get("item");

  await dbConnect();
  try {

    if (query && query.length > 0) {
      const products = await Item.find({
        title: { $regex: query, $options: "i" },
      });
      return NextResponse.json(
        {
          data: products,
        },
        {
          status: 200,
        }
      );
    } else if (query && query.length ===  0) {
      return NextResponse.json(
        {
          message: "Here is your shoes:",
          data: {},
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch data",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
