import React, { useState } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Friends</h1>
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a friend"
        />
        <Button onClick={addFriend}>Add Friend</Button>
      </div>
      <ul className="space-y-2">
        {friends.map((friend, index) => (
          <li key={index} className="flex justify-between items-center">
            {friend}
            <Button variant="outline" onClick={() => removeFriend(friend)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;