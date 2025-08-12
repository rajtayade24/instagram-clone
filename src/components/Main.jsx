import Section from "./Section"
import Aside from "./Aside"

function Main() {
  return (
    <>
      <main className="main flex justify-center p-4 ml-auto relative w-[calc(100%-70px)] xl:w-[calc(100%-250px)] max-[600px]:w-[100%] mt-5">
        <Section/>
        <Aside/>
      </main>
    </>
  )
}

export default Main