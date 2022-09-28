import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
          // <Pet
          //     {...pet}
          //     id={pet.id}
          // /> //not a good idea (can't understand how pet Reults interacts with Pet)
        ))
      )}
    </div>
  );
};
export default Results;
