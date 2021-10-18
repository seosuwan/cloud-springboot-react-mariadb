import React from 'react';


export function UserDetail() {

  return (
    <div>
    <figure>
    <figcaption>오늘은 남은 인생이 시작되는 첫째날</figcaption> </figure> 
    <h1>Suwan Seo</h1>
    <p>이메일 : los2ve7@icloud.com</p>
    <h2>Who I am?</h2>
    <p>저는 서수완임니다!/</p>
    <h2>Github</h2>
    <ul>
        <li><a href="https://github.com/seosuwan?tab=repositories">Github</a></li>
    </ul>
    <hr/>
    <h2>Skills</h2>
    <ul>
        <li>사용 언어
            <ul>
                <li><mark>HTML</mark></li>
                <li><mark>CSS</mark></li>
                <li>JAVA</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>Oracle</li>
                <li>C++</li>
                <li>WPF</li>
            </ul>
        </li>
        <li>사용 툴
            <ul>
                <li>Eclipse(5years)</li>
                <li>Spring FrameWork(5years)</li>
                <li>Sql Developer(5years)</li>
                <li><b>Visual Studio(1year)</b></li>
            </ul>
        </li>
    </ul>
    <h2>Academic</h2>
    <table border="1">
        <caption>학력 사항</caption>
        <thead>
            <tr>
                <th>출신학교</th>
                <th>전공</th>
                <th>기간</th>
                <th>졸업구분</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ㅇㅇㅇ고등학교</td>
                <td> (해당사항 없음)</td>
                <td>2003.3 ~ 2006.2</td>
                <td>졸업</td>
            </tr>
            <tr>
                <td>ㅁㅁ대학교</td>
                <td>정보통신공학과</td>
                <td>2006.3 ~ 2013.2</td>
                <td>졸업</td>
            </tr>
        </tbody>
    </table>
    </div>
  );
}
export default UserDetail