import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Stripe from '@/assests/stripe.png'
export default function Footer() {
  return (
    <footer className="bg-white pb-8  pt-16 shadow-lg dark:bg-boxdark-2 dark:text-bodydark">
      <div className="  container mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Trizen Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="leading-relaxed text-gray-600">
              Morbi convallis bibendum urna ut viverra. Maecenas consequat
            </p>
            <div className="space-y-2 text-gray-600">
              <p>3015 Grand Ave, Coconut Grove,</p>
              <p>Cerrick Way, FL 12345</p>
              <p>+123-456-789</p>
              <p>trizen@yourwebsite.com</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Company
              <div className="mt-2 h-1 w-8 bg-blue-500"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "About us",
                "Services",
                "Jobs",
                "News",
                "Support",
                "Advertising",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Other Links
              <div className="mt-2 h-1 w-8 bg-blue-500"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "USA Vacation Packages",
                "USA Flights",
                "USA Hotels",
                "USA Car Hire",
                "Create an Account",
                "Trizen Reviews",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Subscribe now
              <div className="mt-2 h-1 w-8 bg-blue-500"></div>
            </h3>
            <p className="mb-6 text-gray-600">
              Subscribe for latest updates & promotions
            </p>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter email address"
                endContent={
                  <Button className="bg-blue-500 px-6 text-white" size="sm">
                    Go
                  </Button>
                }
              />
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <Lock className="h-4 w-4" />
                Your information is safe with us.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600">
              <Link href="#" className="transition-colors hover:text-blue-500">
                Terms & Conditions
              </Link>
              <Link href="#" className="transition-colors hover:text-blue-500">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-blue-500">
                Help Center
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-gray-400">
                <Link
                  href="#"
                  className="transition-colors hover:text-blue-500"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="transition-colors hover:text-blue-500"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="transition-colors hover:text-blue-500"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="transition-colors hover:text-blue-500"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-gray-600 md:flex-row">
            <p className="flex items-center gap-1">
              © Copyright Trizen 2024 · Made with{" "}
              <Heart className="h-4 w-4 fill-current text-red-500" /> by
              TechyDevs
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm">We Accept</span>
              <div className="flex gap-2">
                <Image
                  src={Stripe}
                  alt="Mastercard"
                  width={45}
                  height={30}
                />
               <Image
                  src={Stripe}
                  alt="Mastercard"
                  width={45}
                  height={30}
                />
               <Image
                  src={Stripe}
                  alt="Mastercard"
                  width={45}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
