import { Button } from 'react-bootstrap';

const Contact = () => {
    return (  
        <div className="contact"> 
        <h2>Contact</h2>
        <p>contact@biblion.co.uk</p>
        <p>Help us be better for you:</p>
        <form>
            <textarea className="textarea" name="feedback" rows="4" cols="60"></textarea>
            <Button className="feedback-button" type="submit" variant="outline-dark">Send</Button>

        </form>
        </div>
    );
}
 
export default Contact;