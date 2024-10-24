import { useState } from 'react'
import Navbar from './components/Navbar'
import ImageGrid from "./components/ImageGrid.jsx";

function App() {

    const [images, setData] = useState([]);

    return (
        <div className="flex flex-col">
            <Navbar setData={setData}/>
            {
                images.length > 0 &&
                <ImageGrid images={images}/>
            }
        </div>
    )
}

export default App
