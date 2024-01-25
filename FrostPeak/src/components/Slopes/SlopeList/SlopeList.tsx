import SlopeObject from '../SlopeObject/SlopeObject';
import slopeData from '../../../data/slopeData';

const SlopesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-screen">
      <ul className="list-none p-0 m-0">
        {slopeData.map((slope, index) => (
          <li key={index}>
            <SlopeObject {...slope} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlopesList;