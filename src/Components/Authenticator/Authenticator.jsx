import Cookies from 'js-cookie'
import { useContext } from 'react'
import { AuthContext } from '../Home/Home'
import axios from 'axios'
import useAxios from "axios-hooks";
import MockAdapter from 'axios-mock-adapter'

let mock = new MockAdapter(axios,{ delayResponse: 0 });

mock.onGet("/login", { params: { uname:'john' ,pass:'smith' } }).reply(200, { id: 1, name: "John Smith" },
);
mock.onGet("/login", { params: { uname: 'test', pword: 'testasd' } }).reply(200, {
  id: 2, name: "Granny Smith" },
);

const logIn = async (uName, pword) => {
  let encrPword = pword+'asd';
  await axios.get('/login', {params: { uname: uName, pword: encrPword }}).then ( res => {
    Cookies.set('currentUser', JSON.stringify(res.data),{expires: 1});
    return res.data;
  })
  
  
}
const logOut = () => {
    Cookies.remove('currentUser');
}

export const authService = {
  logIn,
  logOut
}

/*const Authernticator = () => {
  const [{ data, loading, error }, refetch] = useAxios();
  let mock = new MockAdapter(axios,{ delayResponse: 1000 });
  
  const [user, setUser] = useContext(AuthContext);
  const accessToken = () => Math.random().toString(36);

  mock.onGet("/login", { params: { token: accessToken } }).reply(200, {
    users: { id: 1, name: "John Smith" },
  });
  mock.onGet("/login", { params: { uname: 'test', pword: 'test' } }).reply(0, {
    users: { id: 2, name: "Granny Smith" },
  });


  const  getUsername = async () => {
    let responseUser = (await axios.get("/login", { params: { token: accessToken } })).data.users;
    setUser(responseUser)
    console.log(responseUser)
  } 

  const logIn = (uName, pword) => {
    axios.get('/login', {params: { uname: uName, pword: pword }})
    .then(res => {
      const u = res.data;
    })
    setUser(u);
  }
  const logOut = () => {
    
  }

  return (
    <>
      <div>{user.name}</div>
      <button onClick = {() => getUsername()}> Get username</button> 
    </>
  );

}
export default Authernticator;*/