import LiftObject from '../LiftObject/LiftObject'; 
import liftData from '../../../data/liftData'; 

const LiftList = () => {
  return (
    <ul>
      {liftData.map((lift, index) => (
        <li key={index}>
          <LiftObject {...lift} />
        </li>
      ))}
      </ul>
  );
};

export default LiftList;