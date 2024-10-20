import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import './Programs.css';

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program_1} alt="Program 1" />
        <div className="caption">
          <img src={program_icon_1} alt="Program Icon 1" />
          <p>MasterDegree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_2} alt="Program 2"/>
        <div className="caption">
          <img src={program_icon_2} alt="Program Icon 2" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_3} alt="Program 3" />
        <div className="caption">
          <img src={program_icon_3} alt="Program Icon 3" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
