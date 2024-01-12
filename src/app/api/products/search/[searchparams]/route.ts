import dbConnect from "@/lib/dbConnect";
import Item from "@/lib/models/Item";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, {params}: { params: {searchparams: string} }, res: NextResponse) {
    const {searchparams} = params
  console.log(searchparams)
  try {
    await dbConnect()
    
    const products = await Item.find({title: { $regex: searchparams, $options: 'i' },})
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



//   try {

//     await dbConnect()
//     // const { db } = await connectToDatabase();
//     // Используйте $regex для поиска по title с учетом регистра (i)
//     const results = await Item.collection('yourCollectionName').find({
//       title: { $regex: searchQuery, $options: 'i' },
//     }).toArray();

//     res.status(200).json({ results });
//   } catch (error) {
//     console.error('Error during search:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// } else {
//   res.status(405).json({ error: 'Method Not Allowed' });
// }
}
