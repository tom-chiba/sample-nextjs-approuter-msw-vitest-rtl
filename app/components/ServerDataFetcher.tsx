const ServerDataFetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return (
    <div>
      <h2 className="text-lg font-bold">Server Data</h2>
      <p>{data.title}</p>
    </div>
  );
};

export default ServerDataFetcher;
