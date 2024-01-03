import dbConnect from "@/lib/dbConnect";
import Item from "@/lib/models/Item";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, {params}: { params: {category: string} }, res: NextResponse) {
  const {category} = params
  try {
    await dbConnect()
    
    const products = await Item.find({category})
    return  NextResponse.json({
      message: "OK",
      data: products
    }, {
      status:200
    }
    )
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fetch data",
      error
    }, {
      status: 500
    }
    )
  }
}
