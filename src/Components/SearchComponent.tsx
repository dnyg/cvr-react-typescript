import React from 'react'
import styled from 'styled-components'
import { Data, TextIcon } from '../Data'
import { BasicInput } from './BasicInput'
import { Icon } from './Icon'
import { PageComponenet } from './PageComponent'

const SearchComponent = () => {
  const {
    search: { title, textIcons },
  } = Data

  return (
    <Wrapper>
      <div>
        <h1>{title}</h1>
        <SearchInput />
        {textIcons.map((item) => <Icon {...item} key={item.id} />)}
      </div>
    </Wrapper>
  )
}

const SearchInput = styled(BasicInput)`
  max-width: 15rem;
`

const Wrapper = styled(PageComponenet)`
  justify-content: right;
  align-items: center;
  height: 220px;

  h1 {
    text-align: center;
    margin-top: 2.5rem;
    font-weight: 300;
  }

  input {
    margin-top: 1rem;
    padding: 1.1rem 5rem;
    margin-right: 0.7rem;
  }

  @media (min-width: 768px) {
    input {
      padding: 1.1rem 10rem;
    }
  }

  @media (min-width: 992px) {
    input {
      padding: 1.1rem 14rem;
    }
  }

  p {
    display: inline;
  }

  .filter {
    margin-top: 1rem;
    text-align: right;
  }
`

export default SearchComponent
