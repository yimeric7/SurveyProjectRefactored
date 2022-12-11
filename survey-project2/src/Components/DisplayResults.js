import { useNavigate } from "react-router"
import { Button } from 'react-bootstrap'
import './Result.css'

export default function Result({ result }) {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()

        const finalAnswers = result.results
        navigate('/results', {state: finalAnswers})
    }

    return (
        <div className='Result' >
            <div>
                <solid> Previous Survey </solid>
                <Button onClick={handleClick} variant='primary'>
                    Show Results
                </Button>
            </div>
        </div>
    )
}