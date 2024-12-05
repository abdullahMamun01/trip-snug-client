import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import { Info, MessageSquare, Star, ThumbsUp } from "lucide-react";
import React from "react";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: "Outstanding",
    ratingColor: "bg-green-500 text-white",
    date: "August 2023",
    comment:
      "Absolutely loved our stay at Cascade Vista! The views were breathtaking, and the amenities were top-notch. The e-bikes were a great touch for exploring the area.",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: "Very Good",
    ratingColor: "bg-blue-500 text-white",
    date: "July 2023",
    comment:
      "Great property with excellent amenities. The hot tub was perfect after a day of hiking. Only minor issue was some noise from nearby construction.",
  },
  {
    id: 3,
    name: "Carol Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: "Excellent",
    ratingColor: "bg-green-600 text-white",
    date: "June 2023",
    comment:
      "We had an amazing family vacation at Cascade Vista. The kitchen was well-equipped, and the kids loved the outdoor space. Highly recommend!",
  },
];

export default function ReviewList() {
  return (
    <>
      <div>
        <h2 className="mb-4 text-xl font-semibold text-black-2">
          Guest reviews
        </h2>
        <div className="space-y-4">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex items-center gap-1 rounded-md bg-green-700 px-2 py-1 text-white">
              <span className="font-bold">10</span>
              <Star className="h-4 w-4 fill-current" />
            </span>
            <span className="font-semibold">Exceptional</span>
            <span className="text-gray-600">{reviews.length} reviews</span>
          </div>
          {reviews.map((review) => (
            <Card key={review.id} className="shadow-none">
              <CardBody>
                <div className="flex items-start gap-4">
                  <Avatar
                    src={review.avatar}
                    name={review.name}
                    className="h-10 w-10"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                    <div className="my-2">
                      <span
                        className={`rounded-full px-2 py-1 text-sm font-semibold ${review.ratingColor}`}
                      >
                        {review.rating}
                      </span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-gray-600" />
                      <span className="text-sm text-gray-600">Helpful</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
          <Button variant="light" color="primary">
            See all reviews
          </Button>
        </div>
      </div>

      {/* Comment Box */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Leave a Review</h2>
        <Card className="shadow-sm">
          <CardBody>
            <div className="space-y-4">
              <p className="text-gray-600">
                Share your thoughts about this property with other travelers.
              </p>
              <Textarea placeholder="Write your comment here..." minRows={3} />
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  <MessageSquare className="mr-1 inline-block h-4 w-4" />
                  Your comment will be visible to other travelers
                </p>
                <Button color="primary" isDisabled>
                  Post your Review
                </Button>
              </div>
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-700">
                  <Info className="mr-1 inline-block h-4 w-4" />
                  To post a comment, please{" "}
                  <Button
                    variant="light"
                    color="primary"
                    className="px-1 font-semibold"
                  >
                    log in
                  </Button>{" "}
                  or{" "}
                  <Button
                    variant="light"
                    color="primary"
                    className="px-1 font-semibold"
                  >
                    sign up
                  </Button>
                  . It s quick and easy!
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
