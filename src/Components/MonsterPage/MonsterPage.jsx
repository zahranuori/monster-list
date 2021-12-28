import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {Container,Card} from "react-bootstrap";
import {useParams} from "react-router-dom";


const getMonster = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    console.log(data)
    return (data)
}
// const getMonsterP = (id) => {
//     return new Promise((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then(res => res.json())
//             .then(data => resolve(data))
//
//     })
// }


const MonsterPage = ()=> {
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [monster, setMonster] = useState(
        {
            id: 1,
            name: "",
            username: "",
            email: "",
            phone: "",
            website: "",
    })
    useEffect(() => {
        setLoading(true)
        getMonster(params.monsterID).then(data => {
            setMonster(data)
            setLoading(false)
        })
        console.log()
    }, [params.monsterID])
    return(
<Container>
    <Card className='w-100 text-center mt-4 p-2 bg-info bg-opacity-25'>
        {
            loading ? <h1>یکم صبر کن الان هیولاها میرسین :)</h1> :
    <Card.Body>
        <img style={{border:'2px solid rgba(146, 79, 173, 0.94)' ,borderRadius:'150px 150px 0px 0px'}} src={'https://robohash.org/'+monster.username} alt='avatar monster'/>
         <Card.Title>{monster.name}</Card.Title>
        <Card.Title>{monster.username}</Card.Title>
        <Card.Title>{monster.email}</Card.Title>
        <Card.Title>{monster.phone}</Card.Title>
        <Card.Title>{monster.website}</Card.Title>
        <Link className='text-decoration-none' to='/monsters'>برو به صفحه اصلی</Link>
    </Card.Body>
 }
    </Card>
</Container>
    )
}
export default MonsterPage;