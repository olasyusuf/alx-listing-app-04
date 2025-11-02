import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy  from "@/components/booking/CancellationPolicy";
import { BookingPageProps } from "@/interfaces";


export default function BookingPage({ bookingDetails }: BookingPageProps) {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
        <CancellationPolicy />
      </div>
    </div>
  );
}