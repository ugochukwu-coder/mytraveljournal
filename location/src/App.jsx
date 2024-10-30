import './App.css'
import Header from "./components/Header"
import JournalContent from "./components/JournalContent"
import data from "./components/data"

function App() {

  const travelList = data.map((list) => {
   return <JournalContent key={list.id}
      title={list.title}
      location={list.location}
      googleMapsUrl={list.googleMapsUrl}
      startDate={list.startDate}
      endDate={list.endDate}
      description={list.description}
      imageUrl={list.imageUrl}
    />
  })


  return (
    <div className='app__container'>
        <Header/>
        <div className='main'>
          {travelList}
        </div>
    </div>
  )
}

export default App
