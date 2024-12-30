import { Clock, MapPin, Shield, Users2 } from "lucide-react";
import React from "react";

export default function Service() {
  return (
    <section className="bg-white py-8">
      <div className=" mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">Our Services</h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex gap-4">
            <Clock className="h-8 w-8 flex-shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-xl font-semibold">Quick Booking</h3>
              <p className="text-muted-foreground">
                Easy and fast booking process with instant confirmation
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="h-8 w-8 flex-shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-xl font-semibold">Location Expertise</h3>
              <p className="text-muted-foreground">
                Detailed insights about neighborhoods and surroundings
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Shield className="h-8 w-8 flex-shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-xl font-semibold">Secure Payments</h3>
              <p className="text-muted-foreground">
                Safe and protected payment processing
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Users2 className="h-8 w-8 flex-shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-xl font-semibold">Group Bookings</h3>
              <p className="text-muted-foreground">
                Special assistance for group reservations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
