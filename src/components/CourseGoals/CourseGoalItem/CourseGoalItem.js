import React from 'react';
import { FaTimes } from "react-icons/fa"

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item">
      {props.children} <p className="delete" onClick={deleteHandler}><FaTimes /></p>
    </li>
  );
};

export default CourseGoalItem;
