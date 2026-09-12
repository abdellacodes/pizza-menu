export default function MenuItem({ data }) {
  return (
    <div className="menu">
      <img src={data.photoName} alt={data.name} />

      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <p>Price: ${data.price}</p>
      </div>
    </div>
  );
}
