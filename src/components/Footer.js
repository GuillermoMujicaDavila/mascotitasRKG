import React from 'react'

export default function Footer() {
    return (
        <div style={{  zIndex:-1  }}>
        <div className = "main-footer" style={{
                backgroundColor:"black",
                //position:'fixed',
                minWidth:'100%',
                minHeight:'100%',  
                //top:'0%',
                //left:'0%'
                zIndex:-1  
            }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>lorem</h4>
                        <ul className="list-unstyled">
                            <li>uno1</li>
                            <li>uno2</li>
                            <li>uno3</li>
                            <li>uno4</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>lorem</h4>
                        <ul className="list-unstyled">
                            <li>dos1</li>
                            <li>dos2</li>
                            <li>dos3</li>
                            <li>dos4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
