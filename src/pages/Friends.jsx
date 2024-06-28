import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [name, setName] = useState("");

  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");

  const addFriend = () => {
    setFriends([...friends, name]);
    setName("");
  };

  const removeFriend = (friend) => {
    setFriends(friends.filter((f) => f !== friend));
  };

  const sendMessage = () => {
    if (selectedFriend) {
      setMessages({
        ...messages,
        [selectedFriend]: [...(messages[selectedFriend] || []), newMessage],
      });
      setNewMessage("");
    }
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
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedFriend(friend)}>
                        Chat
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Chat with {friend}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="h-64 overflow-y-auto border p-4 rounded bg-gray-100">
                          {messages[friend]?.map((msg, idx) => (
                            <div key={idx} className="mb-2">
                              {msg}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message"
                            className="flex-1"
                          />
                          <Button onClick={sendMessage}>Send</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" onClick={() => removeFriend(friend)}>
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Friends;