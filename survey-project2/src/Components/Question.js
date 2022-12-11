export default function Question({ options, question, id, handleChange }) {
    const formattedQuestion = question.charAt(0).concat(question.substring(1).toLowerCase())
    const formattedOptionA = options[0].charAt(0).concat(options[0].substring(1).toLowerCase())
    const formattedOptionB = options[1].toLowerCase()
    return (
        <div>
            <br>
            </br>
            <form>
                <fieldset>
                    <h2>{id}. {formattedQuestion}</h2>
                    <p>
                        <input
                            type="radio"
                            id={id}
                            name="option"
                            value="A"
                            onChange={(e) => handleChange(parseInt(e.target.id), e.target.value) }
                        />
                        <label htmlFor={id} style={{paddingLeft:"10px"}} >{formattedOptionA}</label>
                    </p>
                    <p>
                        <input
                            type="radio"
                            id={id}
                            name="option"
                            value="B"
                            onChange={(e) => handleChange(parseInt(e.target.id), e.target.value)}
                        />
                        <label htmlFor={id} style={{paddingLeft:"10px"}}>{formattedOptionB}</label>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}