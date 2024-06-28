import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your New App</h1>
      <p className="text-lg text-center">
        This is a bare-bones application. Start building your amazing app here!
      </p>
      <div className="space-x-4">
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
    </div>
  );
};

export default Index;