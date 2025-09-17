import DataFetcher from "./components/DataFetcher";
import ServerDataFetcher from "./components/ServerDataFetcher";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <DataFetcher />
      <ServerDataFetcher />
    </div>
  );
}
