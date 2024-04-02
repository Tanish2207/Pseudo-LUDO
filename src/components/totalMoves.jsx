

const TotalMoves = ({score}) => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-6xl font-extrabold">{score}</h1>
        <p className="text-lg">Total Score</p>
    </div>
  )
}

export default TotalMoves