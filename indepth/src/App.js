import ParentComponent from './components/ParentComponent';
import './App.css';
import UserGreeting from './components/UserGreeting';
import Lists from './components/Lists';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import Refs from './components/Refs';
import FocusInpt from './components/FocusInpt';
import FRParentInpt from './components/FRParentInpt';
import Portal from './components/Portal';
import ClickHigh1 from './components/ClickHigh1';
import HovHigh1 from './components/HovHigh1';
import UpdatedComponent from './components/withCounter';
import ClickRender from './components/ClickRender';
import HovRender from './components/HovRender';
import UserRender from './components/UserRender';
import RenderCount from './components/RenderCount';
import CompC from './components/CompC';
import { UserProvider } from './components/ContextUser';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <UserGreeting /> */}
      {/* <Lists/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <ParentComp /> */}
      {/* <Refs /> */}
      {/* <FocusInpt/> */}
      {/* <FRParentInpt/> */}
      {/* <Portal /> */}
      {/* <ClickHigh1 name="Cool"/> */}
      {/* <HovHigh1 /> */}
      {/* <HovRender/>
      <ClickRender/>
      <UserRender name={(isLoggedIn) => isLoggedIn ? 'Really Cool' : 'Not So Cool' }/> */}
      {/* <RenderCount>
        {(count,incrementCount) => (
           <ClickRender count={count} incrementCount={incrementCount}/>
            )} 
            </RenderCount>
      <RenderCount>
        {(count,incrementCount) => (
           <HovRender count={count} incrementCount={incrementCount}/>
            )} 
      </RenderCount> */}

      <UserProvider value="Nerve">
        <CompC />
      </UserProvider>
      
    </div>
  );
}

export default App;
