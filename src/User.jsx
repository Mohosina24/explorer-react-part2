export default function User ({user}){
const {name, email,username} = user;
    return (
        <div style={{
            border:'2px solid red',
            margin: '15px'
             }}>
            <h4 >name: {name}</h4>
            <p>Email:{email} </p>
            <p>UserName: {username}</p>
        </div>
    )

}