import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const addPost = () => {
    setPosts([...posts, content]);
    setContent("");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">News Feed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="flex-1"
            />
            <Button onClick={addPost}>Post</Button>
          </div>
          <ul className="space-y-2">
            {posts.map((post, index) => (
              <li key={index} className="border p-4 rounded bg-white shadow-sm">
                {post}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsFeed;