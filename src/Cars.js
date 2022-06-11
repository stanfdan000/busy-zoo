export default function Cars({ car }) {
  return <div className="car">
    {car === 'car0' && '🏎️'}
    {car === 'car1' && '🏍'}
    {car === 'car2' && '🏍️'}
    {car === 'car3' && '🚓'}
    {car === 'car4' && '🚗'}
  </div>;
}