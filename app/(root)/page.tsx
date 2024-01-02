import ThreadCard from "@/components/cards/ThreadCard";
import { fetchThreads } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const res = await fetchThreads(1, 30);

  return (
    <>
      <h1 className="text-white">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {res.threads.length === 0 ? (
          <p className="no-resuult">No threads found</p>
        ) : (
          <>
            {res.threads.map((thread) => {
              return (
                <ThreadCard
                  key={thread._id}
                  id={thread._id}
                  currentUserId={user?.id || ""}
                  parentId={thread.parentId}
                  content={thread.text}
                  author={thread.author}
                  community={thread.community}
                  createdAt={thread.createdAt}
                  comments={thread.children}
                />
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Home;
