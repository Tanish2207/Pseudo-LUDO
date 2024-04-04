
const GameOver = ({ score }) => {
  return (
    <div className="flex flex-col items-center  text-center h-screen bg-green-200">
      <img src="Group 2.svg" alt="" width="20%" />

      <p className="text-3xl pt-10 font-bold mb-10">Yayy, Congratulations</p>
      <div className="font-semibold">
        <h3>You have successfully completed the pseudo-LUDO game in <br /> <span className="text-4xl ">{score} moves</span> </h3>

        <p className="mt-10">Share the score with your friends and compete with them</p>
      </div>
    </div>
  )
}

export default GameOver