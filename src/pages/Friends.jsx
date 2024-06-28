import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [name, setName] = useState("");

  const addFriend = () => {
    setFriends([...friends, name]);
    setName("");
  };

  const removeFriend = (friend) => {
    setFriends(friends.filter((f) => f !== friend));
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Friends</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Add a friend"
              className="flex-1"
            />
            <Button onClick={addFriend}>Add Friend</Button>
          </div>
          <ul className="space-y-2">
            {friends.map((friend, index) => (
              <li key={index} className="flex justify-between items-center border p-4 rounded bg-white shadow-sm">
                {friend}
                <Button variant="outline" onClick={() => removeFriend(friend)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Friends;