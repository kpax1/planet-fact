import styled from 'styled-components';
import data from '../data/data'
import { useLocation } from 'react-router-dom'

interface VenusProps {
  state: number;
  setState: any;
}


interface filtertype {
  name: string;
  overview: {
      content: string;
      source: string;
  };
  structure: {
      content: string;
      source: string;
  };
  geology: {
      content: string;
      source: string;
  };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
        planet: string;
        internal: string;
        geology: string;
    };
}



export default function Venus(props:VenusProps) {


 const location = useLocation().pathname;
  const filtered:filtertype[]= data.filter(obj => obj.name === location.slice(1));

  return (

    <Content>    
        {props.state ===0 && <Image src={filtered[0].images.planet} alt={filtered[0].name}/>}
        {props.state ===1 && <Image src={filtered[0].images.internal}/>}
        {props.state ===2 && <Image src={filtered[0].images.geology}/>}


      <h1>{filtered[0]?.name.toLocaleUpperCase()}</h1>
      {props.state ===0 && <p>{filtered[0].overview.content}</p>}
      {props.state ===1 && <p>{filtered[0].structure.content}</p>}
      {props.state ===2 && <p>{filtered[0].geology.content}</p>}
      
      <div> <span>src :</span><a href={filtered[0].overview.source}> Wikipedia</a></div>
      <Bottomdiv>
      <div>
      <span>ROTATION TIME </span>
      <Span>{filtered[0].rotation}</Span>
      </div>

      <div>
      <span>REVOLUTION TIME</span>
      <Span>{filtered[0].revolution}</Span>
      </div>

      <div>
      <span>RADIUS</span>
      <Span>{filtered[0].radius}</Span>
      </div>

      <div>
      <span>AVERAGE TEMP </span>
      <Span>{filtered[0].temperature}</Span>
      </div>
      </Bottomdiv>
      </Content>

  )
}


const Image = styled.img`
  width: 111px;
  height: 111px;
  margin-top: 95px;
  margin-bottom: 95px;
`

const Content = styled.div`


  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;


  p{
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 16px;
  }

  a{
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 700;
    opacity: 50%;
  }

  div{
    color: #FFFFFF;
    margin-top: 32px;
  }
`

const Bottomdiv = styled.div`
  width: 80%;

  div{
    border: 1px solid rgba(255, 255, 255, 0.2);    height: 48px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:28px;
    padding-right: 28px;
  }
`

const Span = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 25.88px;
  letter-spacing: -0.75px;

`