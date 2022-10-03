import styled from 'styled-components'
import { Data } from '../Data';
import { Icon } from './Icon';
import { PageComponenet } from './PageComponent';

const AboutCvr = () => {
  const {
    aboutcvr: { title, text, textIcons },
  } = Data
  
  return (
    <Wrapper>
      <section>
        <h2> {title} </h2>
        <h6>{text}</h6>
        {textIcons.map((item) =>  <Icon key={item.id} {...item} />)}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled(PageComponenet)`
  min-height: 12rem;
  justify-content: left;
  align-items: flex-start;
  padding: 0.5rem 2rem;
  margin-bottom: 6rem;

  .hej {
    color: red;
  }

  h2 {
    margin-top: 1.6rem;
  }
  h6 {
    font-size: 0.8rem;
    line-height: 1.2rem;
    font-weight: 200;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: right;
    margin-bottom: 1rem;
  }
`

export default AboutCvr
