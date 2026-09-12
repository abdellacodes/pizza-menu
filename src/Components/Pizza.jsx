import MenuItem from "./MenuItem";
import data from "../data";
export default function Pizza() {
  return (
    <div className="pizza">
      {data.map((item) => (
        <MenuItem key={item.id} data={item} />
      ))}
    </div>
  );
}
