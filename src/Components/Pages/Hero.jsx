import React from "react";
import styled from "styled-components";
import axios from "axios";

function Hero({data, setData}){

                        const handleChange = (evt)=> {
                            if(evt.target.value === 'all'){
                                axios.get(`https://restcountries.com/v3.1/all`).then((res => {
                                    setData(res.data)
                                    console.log(res.data);
                                }))
                            }else {
                                axios.get(`https://restcountries.com/v3.1/region/${evt.target.value}`).then((res => {
                                setData(res.data)
                                console.log(res.data);
                                }))
                        }
                        }

    return (
        <Wrapper>
        <div className="site-hero container">
            <form className="form">
                <input className="input" type="search" placeholder="Search for a country…" />
                
                <select className="select" onChange={handleChange}>
                            <option value='all'>Filter by Region</option>
                            <option value='Africa'>Africa</option>
                            <option value='Americas'>America</option>
                            <option value='Europe'>Europe</option>
                            <option value='Asia'>Asia</option>
                            <option value='Oceania'>Oceania</option>
                </select>
            </form>
        </div>
        </Wrapper>
    )
}

export default Hero;

const Wrapper = styled.div`
.site-hero {
    margin-bottom: 48px;
}

.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.input {
    padding: 18px;
    border: none;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
}

.select {
    padding: 18px;
    border: none;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    color: #111517;
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
}
`