import { useState } from 'react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { todosRemainingSelector } from '../../redux/selectors';
// import { fetchTodos } from './todoSlice';
import { addNewTodo } from './todoSlice';

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todosRemainingSelector);

  const handleAddButtonClick = () => {
    // dispatch(todoListSlice.actions.addTodo({
    //   id: uuidv4(),
    //   name: todoName,
    //   completed: false,
    //   priority: priority
    // }));

    // dispatch(fetchTodos({
    dispatch(addNewTodo({
      id: uuidv4(),
      name: todoName,
      completed: false,
      priority: priority
    }));

    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleCheckBoxChange = (value) => {
    console.log("1111");
    console.log(value);
  };

  return (
    <>
      <Row style={{ height: 'calc(100% - 40px)' }}>
        <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
          {todoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} onClick={handleCheckBoxChange}/>)}
        </Col>
        <Col span={24}>
          <Input.Group style={{ display: 'flex' }} compact>
            <Input value={todoName} onChange={handleInputChange}/>
            <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
              <Select.Option value='High' label='High'>
                <Tag color='red'>High</Tag>
              </Select.Option>
              <Select.Option value='Medium' label='Medium'>
                <Tag color='blue'>Medium</Tag>
              </Select.Option>
              <Select.Option value='Low' label='Low'>
                <Tag color='gray'>Low</Tag>
              </Select.Option>
            </Select>
            <Button type='primary' onClick={handleAddButtonClick}>
              Add
            </Button>
          </Input.Group>
        </Col>
      </Row>
    </>
  );
}
