import React from "react";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";

import { ThumbsUp } from "lucide-react";
import { IReview } from "@/types/review.type";

interface IProps {
    hotelReview: IReview
}
export default function ReviewCard({hotelReview} :IProps) {
    const {user ,rating ,review ,createdAt} = hotelReview || {}
    const avatar = `https://ui-avatars.com/api/?name=${user?.firstName.slice(0, 1)}&background=random&size=100`
    const formattedDate =  new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(createdAt));
      
  return (
    <Card className="shadow-none">
      <CardBody>
        <div className="flex items-start gap-4">
          <Avatar
            src={avatar}
            name={user?.firstName}
            className="h-10 w-10"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{user?.firstName} {user?.lastName}</h3>
              <p className="text-sm text-gray-600">{createdAt && formattedDate}</p>
            </div>
            <div className="my-2">
              <span
                className={`rounded-full px-2 py-1 text-sm font-semibold ${rating}`}
              >
                {rating}
              </span>
            </div>
            <p className="text-gray-600">{review}</p>
            
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
