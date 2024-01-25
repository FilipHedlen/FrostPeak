import LiftObject from '../LiftObject/LiftObject'; 
import liftData from '../../../data/liftData'; 

const LiftList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-screen">
      <ul className="list-none p-0 m-0">
        {liftData.map((lift, index) => (
          <li key={index}>
            <LiftObject {...lift} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiftList;