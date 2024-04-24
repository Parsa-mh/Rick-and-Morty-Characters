import { useState, useEffect } from "react";
import { Routes,Route,Navigate } from "react-router-dom"
import axios from "axios";
import Error from "./PageNotFound";
import Characters from "./characters";
import ViewCharacter from "./ViewCharacter";
function App() {
  const url = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [isError,setIsError] = useState(false)
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.results);
      setLoading(false)
    }).catch(() => {
      setIsError(true)
      setLoading(false)
    })
  }, [data])
  const findCharacter = (number) => {
    return data.find(item => item.id == number)
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/characters"} />} />
        <Route path="/characters" element={<Characters data={data} isLoading={loading} isError={isError} />} />
        <Route path="/characters/:characterId" element={<ViewCharacter findCharacter={findCharacter} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {isError && (<h1 className="text-center">Network Is Not Connected</h1>)}
    </>
  );
}

export default App;
