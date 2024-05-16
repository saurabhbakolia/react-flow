import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';
import CustomNode from './components/CustomNode/CustomNode';
import UpdatingNode from './components/UpdatingNode/UpdatingNode';
import StressTest from './components/StressTest/StressTest';
import AppBar from './components/AppBar/AppBar';
import { createElement, useState } from 'react';
import Hidden from './components/Hidden/Hidden';
import DragHandle from './components/DragHandle/DragHandle';
import EasyConnect from './components/EasyConnect/EasyConnect';
import AddNodeOnEdgeDrop from './components/AddNodeOnEdgeDrop/AddNodeOnEdgeDrop';

function App() {
  const componentMap = {
    CustomNode: CustomNode,
    UpdatingNode: UpdatingNode, 
    StressTest: StressTest, 
    Hidden: Hidden, 
    DragHandle: DragHandle, 
    EasyConnect: EasyConnect, 
    AddNodeOnEdgeDrop: AddNodeOnEdgeDrop
  };

  const [currentComponent, setCurrentComponent] = useState('CustomNode');

  const handleComponentChange = (componentName) => {
    setCurrentComponent(componentName);
  }

  return (
    <div className="App">
      <AppBar handleComponentChange={handleComponentChange} componentMap={componentMap} />
      {/* <CustomNode /> */}
      {createElement(componentMap[currentComponent])}
    </div>
  );
}

export default App;
