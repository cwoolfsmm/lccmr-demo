// Server Home Component - handles data fetching and passes data to the client component
import { getAllEntries } from "../../lib/graphql";
import { HomeClient } from "./components/HomeClient";

export default async function Home() {
  const data = await getAllEntries();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <HomeClient
      data={data}
    />
  );
}