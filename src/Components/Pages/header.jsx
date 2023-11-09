import React from "react"
import darkMode from '../../Assets/img/dark-mode.svg'
import styled from "styled-components"

function Header(){
    return(
        <Wrapper>
            <div className="header">
            <div className="site-header container">

            <h1 className="header-heading">Where in the world?</h1>
            <button>
                <img src={darkMode} alt="" />
                <span className="header-dark-mode">Dark Mode</span>
            </button>
        </div>
        </div>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
.header {
    background: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06); 
}

.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
    padding-top: 24px;
    padding-bottom: 24px;
}

.header-heading {
    margin: 0;
}
`