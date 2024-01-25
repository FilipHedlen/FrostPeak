import SlopeObject from '../SlopeObject/SlopeObject';
import slopeData from '../../../data/slopeData';

const SlopeList = () => {
  return (
    <ul>
      {slopeData.map((slope, index) => (
        <li key={index}>
          <SlopeObject {...slope} />
        </li>
      ))}
    </ul>
  );
};

export default SlopeList;