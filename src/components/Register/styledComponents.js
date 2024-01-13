import styled from 'styled-components'

export const RegisterPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterPageSubContainer = styled.div`
  width: 85%;
  display: flex;
`
export const RegisterImageContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  width: 100%;
  max-width: 450px;
`
export const FormContainer = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const FormTitle = styled.h1`
  color: #183b56;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`
export const FormLabel = styled.label`
  color: #5a7184;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const InputElement = styled.input`
  border-radius: 5px;
  border: 1px solid #c3cad9;
  padding: 10px 15px 10px 15px;
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 20px;
`
export const SelectElement = styled.select`
  border-radius: 5px;
  border: 1px solid #c3cad9;
  padding: 10px 15px 10px 15px;
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 20px;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px 8px 16px;
`
export const ErrorMessage = styled.p`
  text-align: center;
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`
