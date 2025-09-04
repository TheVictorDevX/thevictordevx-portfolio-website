import Hero from "./components/Hero"
import Title from "./components/Title"
import Skills from "./components/Skills"
import Projects from "./components/Projects"



function App() {

  return (
    <div className="w-screen bg-black text-white flex flex-col justify-center items-center">
      <Hero/>
      <Title title="My Skills & Technologies"/>
      <Skills/>
      <Title title="My Projects"/>
      <Projects/>
    </div>
  )
}

export default App
