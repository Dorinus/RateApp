import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a simple React app to leave ratings for a product or service.</p>
            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </div>
      
    </Card>
  )
}

export default AboutPage
