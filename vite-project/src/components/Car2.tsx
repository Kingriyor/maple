interface Car {
  brand: string;
  model: string;
  color: string;
  year: number;
}

function Car2(car: Car) {
  return (
    <>
      <div>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
      </div>
    </>
  );
}

export default Car2;
