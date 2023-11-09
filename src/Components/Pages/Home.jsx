import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "./header";
import Hero from './Hero';


function Home() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/all`).then((res)=> {
            setData(res.data);
        })
    }, [])

    // console.log(data);

    return (
      <Wrapper>
        <Header />
        <main>
          <Hero data={data} setData={setData} />
            <div className="container">
          <ul className="list">
        {data?.map((item, index) => {
            return (
                <li className="item" key={index}>
                    <img className="countries-flag-img" src={item?.flags.png} alt="countries-flag" width='274' height='160' />
                    <div className="item-section-inner">
                        <h2 className="item-heading">{item?.name.common}</h2>
                        <ul className="countries-list-inner">
                            <li className="countries-item-inner">
                                <span className="countries-heading-section">Population:</span>
                                <p className="countries-text-section">{item?.population}</p>
                            </li>
                            <li className="countries-item-inner">
                                <span className="countries-heading-section">Region:</span>
                                <p className="countries-text-section">{item?.region}</p>
                            </li>
                            <li className="countries-item-inner">
                                <span className="countries-heading-section">Capital:</span>
                                <p className="countries-text-section">{item?.capital}</p>
                            </li>
                        </ul>
                    </div>
                </li>
            )
        })}
      </ul>
      </div>
      </main>
      </Wrapper>
    );
  }
  
  export default Home;
  

  const Wrapper = styled.div`
  .list {
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 67px;
    column-gap: 75px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .item {
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  }

  .countries-flag-img {
    border-radius: 5px 5px 0 0;
  }

  .item-section-inner {
    display: flex;
    flex-direction: column;
    margin: 24px 24px 45px;
  }

  .item-heading {
    margin: 0;
    margin-bottom: 16px;
  }

  .countries-list-inner {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .countries-item-inner {
    display: flex;
    align-items: center;
  }

  .countries-item-inner:not(:last-child){
    margin-bottom: 8px;
  }

  .countries-text-section {
    margin: 0;
  }


  @media only screen and (max-width: 400px) {
    .list {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 100%;
      max-width: 400px;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  `