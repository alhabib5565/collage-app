import { useContext, useRef, useState } from "react";
// import './App.css';
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvaider";
import {TbLoader3} from 'react-icons/tb'
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};
function Rating({ collageName }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const textRef = useRef(null)
  const stars = Array(5).fill(0)
  // console.log(collageName)

  const handleSubmit = () => {
    const text = textRef.current.value
    const data = { collageName, name: user?.displayName, photo: user?.photoURL, feedback: text, rating: currentValue }
    setLoading(true)
    fetch(`${import.meta.env.VITE_API_URL}/review`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        console.log(data)
      })

    console.log(text, currentValue)
  }

  return (
    <div className="my-10 md:my-14" style={styles.container}>
      <h2 className="text-2xl font-semibold "> please feedback </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => setCurrentValue(index + 1)}
              onMouseOver={() => setHoverValue(index + 1)}
              onMouseLeave={() => setHoverValue(undefined)}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        ref={textRef}
        placeholder="write your feedback"
        style={styles.textarea}
      />

      <div className="max-w-[300px]">
        {
          loading ?
            <button disabled={true} type="submit" className="my-googleBtn">
              <TbLoader3 className='animate-spin'></TbLoader3>
            </button> : <button onClick={handleSubmit} style={styles.button} className="my-googleBtn">
              Submit
            </button>
        }
      </div>

    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};




export default Rating;
