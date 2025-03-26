import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'

function GoalForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createGoal({text}))
        // clear the form
        setText('')
    }
    
    return (
    <div>
        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='text'>Goal</label>
                    <input 
                        type='text' 
                        name='text' 
                        id='text' 
                        value={text} 
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>
                        Add Goal
                    </button>
                </div>
            </form>
        </section>
    </div>
  )
}
export default GoalForm