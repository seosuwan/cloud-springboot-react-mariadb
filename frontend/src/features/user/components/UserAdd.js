import React, { useState, useCallback } from 'react';
import { useHistory  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinPage } from '../reducer/userSlice';


export default function UserAdd() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [join, setJoin] = useState({
        username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
    })
    const {username, password, email, name } = join
    
    const handleChange = useCallback (
        e => {
            const{value, name} = e.target //target 
            setJoin({
                ...join,
                [name] :  value
            })
        }, [join]
    )
    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation() // 버블링 전달되면 이벤트 정지
        const json = {
            'username': join.username,
            'password': join.password,
            'email': join.email,
            'name': join.name,
            'regDate': join.regDate
        }
        alert(`회원가입 정보: ${JSON.stringify(json)}`)
        dispatch(joinPage(json))
        alert(`${join.username} 회원가입 환영`)
        history.push('/usersLogin')
    }


  return (
    <div>
         <h1>회원 가입을 환영합니다</h1>
    <form onSubmit={handleSubmit} method='POST'>
        <ul>
            <li>
                <label>
                아이디 : <input type="text" id="username" name="username" value={username} onChange={handleChange}
                    size="10" minlength="4" maxlength="15"/>
                </label>
                <small>4~15자리 이내의 영문과 숫자</small>
            </li>
            <li>
                <label>
                    이메일: <input type="email" id="email" name="email" value={email} onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    비밀번호: <input type="password" id="password" name="password" value={password} onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    이름: <input type="text" id="name" name="name" value={name} onChange={handleChange}/>
                    
                </label>
            </li>
            <li>
                <input type="submit" onClick={ e => handleSubmit(e)} value="회원가입"/>
            </li>
        </ul>
    </form>
</div>
)
}

