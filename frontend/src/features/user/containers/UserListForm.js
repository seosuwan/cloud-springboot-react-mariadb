import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listPage } from "../reducer/userSlice";
//자식이다 그래서 람다로 처리했다 왜냐하면 부모안으로 들어가야하기때문이다.
const UserListForm = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.user.usersState);//전체가져오기
    const type = useSelector(state => state.user.type)//쿼리문에서 타입
    const keyword = useSelector(state => state.user.keyword)//쿼리문에서 키워드
    const page = 1;

    useEffect(() => {
        const param = {type: type, keyword: keyword, page: page}
        dispatch(listPage(param))
    }, []);
    //리액트는 그려지는데 시간이 걸리지만 훅은 이미 그려지고있기때뭉네 
    return(<table border = '1px' style={{textAlign:'center'}}> 
        <thead>
            <tr>
            <th>사용자번호</th>
            <th>사용자아이디</th>
            <th>이름</th>
            <th>이메일</th>
            </tr>
    </thead>
    <tbody>
    {users.map((i, userId) => (
            <tr key={userId}><td>{i.userId}</td>
            <td>{i.username}</td>
            <td>{i.name}</td>
            <td>{i.email}</td></tr>
        ))}
    </tbody>

    </table>
    
    )
}
export default UserListForm
    
    
    