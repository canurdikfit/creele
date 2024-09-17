import ReactFullpage from "@fullpage/react-fullpage";
import Loading from "./components/Loading";
import { useState } from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Video from "./components/Video";
import Project from "./components/Project";
import Services from "./components/Services";
import Music from "./components/Music";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState({
    index: 0,
    origin: 0,
    directioin: '',
  });


  return (
    <>
      {
        loaded ? (
          <Loading
            loading={loading}
            onLoad={() => {
              setLoading(false)
              setTimeout(() => {
                setLoaded(false)
              }, 1000)
            }}
          />
        ) : (
          <>

            <Navbar
              activeIndex={activeSection.index}
              slideTOPass={2}
            />

            <ReactFullpage
              menu="#menu"
              navigation
              credits={{
                enabled: false
              }}
              scrollOverflow
              scrollOverflowReset
              autoScrolling
              scrollingSpeed={700}
              onLeave={(origin, destination, direction) => {
                setActiveSection({
                  index: destination.index,
                  origin: origin.index,
                  directioin: direction
                });
              }}
              licenseKey=""
              render={({ fullpageApi }) => {
                return (
                  <main>
                    <Banner route={fullpageApi} />
                    <About />
                    <Video />
                    <Project />
                    <Services />
                    <Music />
                    <Contact />
                  </main>
                );
              }}
            />
          </>
        )
      }
    </>
  )
}
export default App;