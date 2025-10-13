"use client";
import { Checkout } from "mdk-checkout";
import { use } from "react";

export default function CheckoutPage({ params }) {
  const { id } = use(params);

  return <Checkout id={id} />;
}