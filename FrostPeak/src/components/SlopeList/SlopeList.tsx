import SlopeInfo, { Slope } from '../SlopeInfo/SlopeInfo';

const slopesData: Slope[] = [
  { number: 1, name: "Svarte Petter", difficulty: "Very difficult", length: "1100 m" },
  { number: 2, name: "K2", difficulty: "Very difficult", length: "1000 m" },
  { number: 3, name: "Gruvleden", difficulty: "Easy", length: "300 m" },
];

const SlopesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4">
      <ul className="list-none p-0 m-0">
        {slopesData.map((slope, index) => (
          <li key={index}>
            <SlopeInfo {...slope} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlopesList;