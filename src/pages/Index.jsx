import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Welcome to Your New App</CardTitle>
        </CardHeader>
      <CardContent className="space-y-4">
          <p className="text-lg text-center">
            This is a bare-bones application. Start building your amazing app here!
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/profile">
              <Button variant="outline">Profile</Button>
            </Link>
            <Link to="/friends">
              <Button variant="outline">Friends</Button>
            </Link>
            <Link to="/newsfeed">
              <Button variant="outline">News Feed</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;