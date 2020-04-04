import React from 'react';
import Link from 'next/link'
import Button from '@material-ui/core/Button';

export default function CenteredGrid() {
    return (
        <>
            <div className="navbar">
                <div className="row">
                    <div className="col">
                        <Link href="/">
                            <div>
                                <img src="/logo.png" alt="logo" className="imgLogo" />
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/technology">
                            <Button style={{ color: "red", backgroundColor: "white" }} variant="contained">Technology News</Button>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/business">
                            <Button style={{ color: "red", backgroundColor: "white" }} variant="contained">Business News</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .navbar{
                cursor: pointer;
                position:fixed;
                left: 0;
                top: 0;
                background-color: #ff8e00;
                width: 100%;
                border: 1px;
                padding: 6px;
                box-shadow: -4px -34px 51px 25px rgba(0,0,0,0.46);
                z-index: 100;
            }
            .imgLogo{
                height: 6vh;
                width: 30vh;
            }
            .row{
                margin: 5px;
                display: flex;
            }
            .col{
                position: relative;
                min-height: 1px;
                padding-right: 15px;
                padding-left: 15px;
            }
            `}</style>
        </>
    );
}