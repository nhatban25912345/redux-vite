import { useState } from 'react';
import { Row, Tag, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes

import todoListSlice from '../TodoList/todoSlice';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ id, name, priority, completed }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    // dispatch(togleTodoStatus(id));
    dispatch(todoListSlice.actions.togleTodoStatus(id));
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}

// Add propTypes validation
Todo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['High', 'Medium', 'Low']).isRequired,
  completed: PropTypes.bool.isRequired,
};
