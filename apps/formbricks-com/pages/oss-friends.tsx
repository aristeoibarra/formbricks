import Layout from "@/components/shared/Layout";
import HeroTitle from "@/components/shared/HeroTitle";
import { Button } from "@formbricks/ui";
import { useEffect, useState } from "react";

export default function OSSFriendsPage() {
  const [OSSFriends, setOSSFriends] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/oss-friends")
      .then((response) => response.json())
      .then((data) => setOSSFriends(data.data));
  }, []);

  return (
    <Layout title="OSS Friends" description="Open-source projects and tools for an open world.">
      <HeroTitle headingPt1="Our" headingTeal="Open-source" headingPt2="Friends" />
      <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {OSSFriends.map((friend, index) => (
          <div key={index} className="overflow-hidden rounded bg-slate-100 p-6 shadow-md">
            <a href={friend.href} className="mb-2 text-xl font-bold">
              {friend.name}
            </a>
            <p className="mt-4 text-sm text-gray-700">{friend.description}</p>
            <div className="mt-4">
              <Button target="_blank" variant="primary" href={friend.href}>
                Learn more
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
