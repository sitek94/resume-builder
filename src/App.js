import {
  FaCheckSquare as FullCheckIcon,
  FaRegCheckSquare as CheckIcon,
  FaRegComment as CommentIcon,
} from 'react-icons/fa';

import data from './data/english';
import Details from './components/details';
import FullName from './components/full-name';
import Summary from './components/summary';
import Projects from './components/projects';
import WorkExperience from './components/work-experience';
import Certificates from './components/certificates';
import Education from './components/education';

export default function App() {
  return (
    <div className="page">
      <div className="column left">
        <Details data={data.contact} />
        <Details data={data.keySkills} defaultIcon={<FullCheckIcon />} />
        <Details data={data.additionalSkills} defaultIcon={<CheckIcon />} />
        <Details data={data.languages} defaultIcon={<CommentIcon />} />
        <Details data={data.interests} />
      </div>

      <div className="column right">
        <FullName text={data.fullName} />
        <Summary data={data.summary} />
        <Projects data={data.projects} />
        <WorkExperience data={data.workExperience} />
        <Certificates data={data.certificates} />
        <Education data={data.education} />
      </div>
    </div>
  );
}
