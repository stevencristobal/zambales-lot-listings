"use client";

import { useState } from "react";

import { Property } from "@/types/property";

interface PriceCalculatorProps {
  property: Property;
}

export default function PriceCalculator({
  property,
}: PriceCalculatorProps) {

  const [downPayment, setDownPayment] = useState(20);
  const [months, setMonths] = useState(48);

  const totalPrice = property.price;

  const dpAmount =
    totalPrice * (downPayment / 100);

  const balance =
    totalPrice -
    dpAmount -
    property.reservationFee;

  const monthly =
    months > 0
      ? balance / months
      : 0;

  return (
    <div className="rounded-[30px] border border-lime-400/30 bg-white/5 p-8">

      <h2 className="text-3xl font-black">
        Payment Calculator
      </h2>

      <div className="mt-8 space-y-5">

        <div>

          <p className="text-gray-400">
            Total Contract Price
          </p>

          <h3 className="text-3xl font-black text-lime-400">
            {property.priceDisplay}
          </h3>

        </div>

        <div>

          <label>
            Down Payment (%)
          </label>

          <input
            type="number"
            min={0}
            max={100}
            value={downPayment}
            onChange={(e) =>
              setDownPayment(Number(e.target.value))
            }
            className="mt-2 w-full rounded-xl bg-black/50 p-4"
          />

        </div>

        <div>

          <label>
            Installment Months
          </label>

          <input
            type="number"
            min={1}
            value={months}
            onChange={(e) =>
              setMonths(Number(e.target.value))
            }
            className="mt-2 w-full rounded-xl bg-black/50 p-4"
          />

        </div>

        <div className="rounded-2xl bg-lime-400/10 p-5">

          <p>
            Reservation Fee
          </p>

          <h3 className="font-bold">
            ₱{property.reservationFee.toLocaleString()}
          </h3>

          <p className="mt-4">
            Down Payment
          </p>

          <h3 className="font-bold">
            ₱{dpAmount.toLocaleString()}
          </h3>

          <p className="mt-4">
            Estimated Monthly
          </p>

          <h3 className="text-2xl font-black text-lime-400">
            ₱{monthly.toLocaleString()}
          </h3>

        </div>

      </div>

    </div>
  );

}