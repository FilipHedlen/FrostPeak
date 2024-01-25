import SlopeObject from '../SlopeObject/SlopeObject';
import slopeData from '../../../data/slopeData';

const SlopeList = () => {
  return (
    <ul className="w-[50%]">
      {slopeData.map((slope, index) => (
        <li key={index}>
          <SlopeObject {...slope} />
        </li>
      ))}
    </ul>
  );
};

export default SlopeList;