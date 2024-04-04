
const GameOver = ({ score }) => {
  return (
    <div className="px-4 pt-16 flex flex-col items-center text-center h-screen bg-green-200">
      <img src="Group 2.svg" alt="" width="20%" />

      <p className="text-3xl pt-10 font-bold mb-10">Yayy, Congratulations</p>
      <div className="font-semibold text-xl">
        <h3>You have successfully completed the pseudo-LUDO game in <br /> <span className="text-4xl text-red-600">{score} moves</span> </h3>

        <p className="mt-20">Share the score with your friends and compete with them</p>
      </div>
    </div>
  )
}

export default GameOver