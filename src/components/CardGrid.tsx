import Card from './Card';

const CardGrid = () => {
  return (
    <div>
      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 1em;
            paddingTop: 2em;
            paddingBottom: 2em;
            justify-content: space-evenly;
            justify-items: center;
            align-content: space-evenly;
            align-items: center;
           
          }
          @media (max-width: 850px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}
      </style>
      <div className="grid-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardGrid;
