// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    {/* <div className="App fixed inset-0 bg-slate-900"> */}
      {/* <div className="fixed inset-0 opacity-25 bg-purple-300" />
      <img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F266e05dba3864799b4715cf4bfd8aa2a" alt="gradient background" width={1200} height={1200} className="fixed inset-0 w-screen h-screen object-cover" />
      <div className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8997f779f33b430bb22ca667d1b73ade)`,
          backgroundSize: '30px'
        }}
      /> */}
    <Home/>
    </div>
  );
}

export default App;
