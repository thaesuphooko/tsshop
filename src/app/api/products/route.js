import { NextResponse } from 'next/server';

export async function GET() {
  const products = [{ id: 1, title: 'ပစ္စည်း နမူနာ' }];
  return NextResponse.json(products);
}
