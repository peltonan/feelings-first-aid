import { questions } from "./questions"

const Answers = ({ formState }) => {
    const answeredQuestions = questions.filter((question, index) => (formState[index].answer === true))
    if (answeredQuestions.length === 0) {
        return (
            <div>
                <p>You have answered no to all questions! That means everything seems to be alright.</p>
                <p>If you feel something is still bothering you, Feelings First Aid might not be helpful for your current situation.</p>
                <p>Consider contacting a professional for more serious issues or finding help elsewhere.</p>
                <p>If you think there's questions missing that could be added, give me feedback the next time we meet.</p>
                <p>Thank you for using Feelings First Aid! &hearts;</p>
            </div>
        )
    }
    return (
        <div className="answerWrapper">
            {answeredQuestions.map((question, index) => {
                return (<fragment className="answerCard">
                    <div>
                        <h4>{question.image}{question.answer}</h4>
                    </div>
                </fragment>
                )
            })}
            {questions.map((question, index) => formState[index].answer)}
        </div>
    )
}
export default Answers