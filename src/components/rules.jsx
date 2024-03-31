
const Rules = () => {
  return (
    <div className="w-full bg-orange-200 flex flex-col gap-4 p-4 ">
      <h2 className="text-2xl font-semibold">How to play pseudo-LUDO</h2>
      <div>
        <p className="mb-2 font-medium">Select any number from 1 to 6</p>
        <p className="mb-2 font-medium">Click on dice to roll it</p>
        <p className="mb-2 font-medium">If the your number and the randomly generated dice number are same, you move 5 steps ahead</p>
        <p className="mb-2 font-medium">If the two numbers are not the same, you move only 1 step ahead</p>
        <p className="mb-2 font-medium">Final Score = Total no. of moves taken to complete the grid</p>
      </div>
    </div>
  )
}

export default Rules;