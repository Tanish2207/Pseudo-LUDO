import TotalMoves from './totalMoves'
import NoSelector from './noSelector'
import GameGrid from './gamegrid'
import ResetRulesDice from './resetRulesDice'

function Gameplay() {

  return (
    <div>
      <div className=' flex flex-col  md:flex-row md:justify-around pt-4'>
        <TotalMoves />
        <NoSelector />
      </div>
      <div className='pt-10 flex flex-1 flex-col justify-around items-start gap-4 md:flex-row'>
        <GameGrid />
        <div className='flex flex-col gap-4 '>
          <ResetRulesDice />
        </div> 
      </div>
    </div>
  )
}

export default Gameplay