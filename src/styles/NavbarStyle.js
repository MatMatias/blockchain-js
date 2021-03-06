import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #242325;
  padding-top: 25px;
  padding-bottom: 25px;
`

export const Link = styled.a`
  padding-left: 20px;
  font-size: 30px;
  color: white;
`

export const H3 = styled.h3`
  padding-right: 5px;
  padding-top: 6px;
`

export const Div = styled.div`
  padding-right: 20px;
  color: white;
  display: flex;
  flex-direction: row;
`
export const Button = styled.button`
  display: inline-block;
  background-color: rgb(70,70,70);
  color: white;
  padding: 10px;
  text-decoration: none;
  border-radius: 3px;
  border-style: none;
  &:hover {
    background-color: rgb(90,90,90);
    cursor: pointer;
  }
`

export const Input = styled.input`
  padding: 8px;
`

