import dbConnect from "@/lib/dbConnect";
import Item from "@/lib/models/Item";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, res: NextResponse) {
    const {searchParams} = new URL(request.url)
    const query = searchParams.get("item")
    console.log(query)
  try {
    await dbConnect()
    
    const products = await Item.find({title: { $regex: query, $options: 'i' },})
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
  }}