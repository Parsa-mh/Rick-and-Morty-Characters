import { useState, useEffect } from "react";
import axios from "axios";
import Error from "./PageNotFound";
import { Routes,Route,Navigate } from "react-router-dom"
import Characters from "./characters";
import ViewCharacter from "./ViewCharacter";
function App() {
  let url = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.results);
      setLoading(false)
    }).catch((err) => {
      console.log(err);
    })
  }, [data])
  const findCharacter = (number) => {
    return data.find(item => item.id == number)
  }
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/characters"} />} />
      <Route path="/characters" element={<Characters data={data} isLoading={loading} />} />
      <Route path="/characters/:characterId" element={<ViewCharacter findCharacter={findCharacter} />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
