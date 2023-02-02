const Footer = () => {
    return (
        <div class="main-footer">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4>Biblion</h4>
                        <ul className="list-unstyled">
                            <li>+44 6543 877 091</li>
                            <li>London, United Kingdom</li>
                            <li>123 Lane, EC1 50D</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h4>Follow Us!</h4>
                        <ul className="list-unstyled">
                            <li>Instagram: Bib_lion</li>
                            <li>Twitter: @Bib_lion</li>
                            <li>Pinterest: B1b_l1on</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h4>Books</h4>
                        <ul className="list-unstyled">
                            <li>We Love Books</li>
                            <li>Books 4LYF</li>
                            <li>:)</li>
                        </ul>
                    </div>

                </div>
                <hr />
             <div className="row">
                <p className="col-sm">
                   &copy;{new Date().getFullYear()} BIBLION INC | All rights reserved | Terms of Service | Privacy
                </p>
                </div>   
            </div>
        </div>  
    );
}
 
export default Footer;