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
import { ScrollRestoration } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [loaded, setLoaded] = useState<boolean>(false)


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
            <ScrollRestoration />
            <Navbar
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