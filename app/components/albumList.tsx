async function AlbumList() {
  //server side fetching (server component)
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");
  
  const albums = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {albums.map((album: { id: number, title: string }) => (
        <div 
          key={album.id}
          className="mb-2 ml-2 bg-white shadow-md rounded-lg p-4 transition ..."
        >
          <h1 className="text-lg  font-bold mb-2 text-red">{album.title}</h1>
          <p className="text-red-600">Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
}

export default AlbumList;