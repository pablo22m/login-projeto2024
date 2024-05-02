import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  container: {
    alignItems: 'center'
  },
  snack: {
    width: 150,
    height: 150,
  },
  h1: { 
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  h2: {
    color: '#d1d1d1',
    fontSize: 15,
  },
  inputArea: {
    width: '100%',
    paddingTop: 40,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 7,
  },
  inputField: {
    color: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#fff',
    fontSize: 15,
    padding: 10,
  },
  aditionals: {
    width: '100%',
  },
  forgotBtnArea: {
    paddingVertical: 20,
    alignSelf: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  botao: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10, 
    marginVertical: 30,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
  },
  signUpArea: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#d1d1d1',
  },
  signUpBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 5,
  },
  footerArea: {
    marginVertical: 30,
  },
  footerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFF',
  },
 
  cadastro:{
    backgroundColor: '#FFF',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginVertical: 40
  },
  textResetPassword:{ 
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 120
  }
})