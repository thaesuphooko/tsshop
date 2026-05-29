import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, title: 'ပစ္စည်း နမူနာ ၁', price: 1000 },
    { id: 2, title: 'ပစ္စည်း နမူနာ ၂', price: 2000 }
  ];
  return NextResponse.json(products);
}
